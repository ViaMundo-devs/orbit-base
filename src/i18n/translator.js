'use strict';
// Ponto de extensão para traduzir todos os rótulos. A UI legada permanece em pt-BR nesta versão.
const OrbitMessages = {
 'pt-BR': {'app.title':'Sua central de trabalho','calendar.title':'Calendário e tarefas'},
 'es': {'app.title':'Tu espacio de trabajo','calendar.title':'Calendario y tareas'},
 'en': {'app.title':'Your workspace','calendar.title':'Calendar and tasks'}
};
function orbitT(key, locale = OrbitConfig.locale) {
 const lang = locale.startsWith('es')?'es':locale.startsWith('en')?'en':'pt-BR';
 return OrbitMessages[lang]?.[key] || OrbitMessages['pt-BR'][key] || key;
}
