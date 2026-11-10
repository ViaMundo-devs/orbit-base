'use strict';
// Helpers globais temporários do protótipo. Fase seguinte: imports ES Modules.
const KEY='orbit_demo_v1';const money=n=>Number(n||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const date=()=>new Date().toLocaleDateString('pt-BR');const id=()=>Math.random().toString(36).slice(2,9);const groups=['Marketing','Vendas','Financeiro','Gestão','Pessoas','Experiência','Tecnologia','Estratégia'];
