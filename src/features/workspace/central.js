'use strict';
// Orbit Central: agregador demonstrativo; não chama IA nem serviços externos.
// Usa o mesmo state, tasks, leads, requests e subscriptions das demais telas.
function centralModel(){
 const pending=[...state.tasks].filter(t=>!t.status).sort((a,b)=>(a.date||'9999').localeCompare(b.date||'9999'));
 const completed=state.tasks.filter(t=>t.status);
 const active=activeModules();
 const projects=Array.isArray(state.launches)?state.launches:[];
 const activity=[
  ...pending.map(t=>({kind:'task',label:t.title,meta:`${t.source||'Central'} · ${t.date||'Sem prazo'}`,sort:t.date||'9999',id:t.id})),
  ...(state.subscriptions.crm?state.leads.filter(l=>l.stage!=='Ganho'&&l.stage!=='Perdido').map(l=>({kind:'lead',label:`Acompanhar ${l.name}`,meta:`CRM · ${l.stage}`,sort:'9998',id:l.id})):[]),
  ...projects.map(p=>({kind:'launch',label:`Lançamento: ${p.product}`,meta:`Projeto temporário · ${p.date}`,sort:p.date||'9999',id:p.id}))
 ];
 const recs=recommend().filter(r=>r.module!=='strategy');
 return {pending,completed,active,projects,activity,recs,unread:state.notifications.filter(n=>!n.read).length};
}
function centralSchedule(){
 const now=new Date(),today=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
 const upcoming=[...state.tasks].filter(t=>!t.status&&t.date&&t.date>=today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,3);
 return upcoming.length?upcoming.map(t=>`<div class="central-line"><span class="central-date">${esc(t.date.slice(8,10))}/${esc(t.date.slice(5,7))}</span><div><b>${esc(t.title)}</b><p class="muted small">${esc(t.source||'Central')}</p></div></div>`).join(''):'<p class="muted small">Nenhuma tarefa futura com prazo. Crie uma atividade para começar.</p>';
}
function centralTaskRows(rows){return rows.map(t=>`<label class="central-task"><input type="checkbox" data-check-task="${esc(t.id)}" ${t.status?'checked':''}><span><b>${esc(t.title)}</b><small>${esc(t.source||'Central')} · ${esc(t.date||'Sem prazo')}</small></span></label>`).join('')||'<p class="muted small">Nenhuma tarefa pendente. Você está em dia!</p>'}
function centralOpportunityRows(model){return model.recs.slice(0,3).map(r=>{const mod=state.modules.find(m=>m.id===r.module),enabled=!!state.subscriptions[r.module];return `<div class="central-opportunity"><div><b>${esc(r.title)}</b><p class="muted small">${esc(r.why)} <span class="central-origin">Origem: Desbrave</span></p></div><div>${mod?btn(enabled?'Usar solução':'Conhecer solução',enabled?'open-module:'+mod.id:'view:'+mod.id,'secondary small'):btn('Criar tarefa','new-task','secondary small')}</div></div>`}).join('')||'<p class="muted small">Atualize o Desbrave para receber recomendações contextuais.</p>'}
function centralWorkspaces(model){return model.active.map(({m,tier})=>`<div class="central-module"><span class="central-moduleicon">${esc(m.icon)}</span><div><b>${esc(m.name)}</b><small>${tier==='plus'?'Plus':'Normal'} · ativo</small></div>${btn('Abrir','open-module:'+m.id,'secondary small')}</div>`).join('')||'<p class="muted small">Nenhuma solução adicional ativa. A Central Essencial continua disponível.</p>'}
