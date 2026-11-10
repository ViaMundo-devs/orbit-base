'use strict';
// Calendário real de demonstração, lendo a mesma lista de tarefas da Central.
let calendarMonthOffset = 0;
function calendar() {
  const done = state.tasks.filter(t => t.status).length;
  const now = new Date();
  const month = new Date(now.getFullYear(), now.getMonth() + calendarMonthOffset, 1);
  const year = month.getFullYear(), m = month.getMonth();
  const firstWeekday = month.getDay();
  const days = new Date(year, m + 1, 0).getDate();
  const label = new Intl.DateTimeFormat(OrbitConfig.locale, {month:'long',year:'numeric'}).format(month);
  const cells = [];
  for(let i=0;i<firstWeekday;i++) cells.push('<div class="cal-empty" aria-hidden="true"></div>');
  for(let day=1;day<=days;day++){
    const iso = `${year}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const tasks = state.tasks.filter(t => t.date === iso);
    const today = new Date();
    const isToday = year===today.getFullYear() && m===today.getMonth() && day===today.getDate();
    cells.push(`<div class="cal-day ${isToday?'cal-today':''}" aria-label="${day} ${esc(label)}"><div class="cal-daynum">${day}</div>${tasks.slice(0,3).map(t=>`<label class="cal-event ${t.status?'cal-event-done':''}" title="${esc(t.title)}"><input type="checkbox" ${t.status?'checked':''} data-check-task="${esc(t.id)}"><span>${esc(t.title)}</span></label>`).join('')}${tasks.length>3?`<span class="cal-overflow">+${tasks.length-3} tarefa(s)</span>`:''}</div>`);
  }
  const sorted = [...state.tasks].sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  return header('Calendário e tarefas', 'Uma agenda compartilhada para as atividades do Orbit Essencial e das soluções contratadas.', btn('+ Nova tarefa','new-task'))+
  `<div class="grid cols3"><div class="card"><div class="muted small">Total de tarefas</div><div class="stat">${state.tasks.length}</div></div><div class="card"><div class="muted small">Concluídas</div><div class="stat">${done}</div></div><div class="card"><div class="muted small">Progresso</div><div class="stat">${state.tasks.length?Math.round(done/state.tasks.length*100):0}%</div></div></div>`+
  `<section class="card cal-card"><div class="cardheader"><h3 class="cal-month">${esc(label)}</h3><div class="cal-actions">${btn('←','calendar-prev','secondary small')}${btn('Hoje','calendar-today','secondary small')}${btn('→','calendar-next','secondary small')}</div></div><div class="cal-weekdays">${['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(d=>`<div>${d}</div>`).join('')}</div><div class="cal-grid">${cells.join('')}</div></section>`+
  `<div class="card" style="margin-top:17px"><div class="cardheader"><h3>Minhas atividades</h3><span class="pill gray">Ordenadas por prazo</span></div><div class="stack">${sorted.map(t=>`<div class="task ${t.status?'done':''}"><input type="checkbox" ${t.status?'checked':''} data-check-task="${esc(t.id)}"><div style="flex:1"><div class="taskname">${esc(t.title)}</div><div class="small muted">${esc(t.date||'Sem data')} · ${esc(t.source)}</div></div>${btn('Excluir','delete-task:'+t.id,'ghost small')}</div>`).join('')||'<div class="empty">Sem tarefas. Adicione uma para começar.</div>'}</div></div>`;
}
