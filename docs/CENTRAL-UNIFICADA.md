# Orbit 2.1 — Central unificada

## Implementado nesta versão (somente demonstração)

- Central lê o estado compartilhado de `state.tasks`, `state.subscriptions`, `state.leads`, `state.requests` e `state.notifications`.
- Tarefas criadas na Central aparecem no calendário, e a conclusão em qualquer tela se reflete nas duas.
- Ação rápida de contato comercial respeita a existência da assinatura simulada do CRM.
- Fluxo **Simular lançamento** registra um projeto temporário em `state.launches`, cria quatro tarefas em datas relativas e as exibe no calendário.
- Projeto permanece na Central mesmo após conclusão das tarefas.
- Recomendações do Desbrave usam regras locais explícitas; não são análises de IA.
- Atalhos para soluções ativas, catálogo e Desbrave, evitando navegar desnecessariamente.

## Arquivos alterados

- `src/features/workspace/central.js` — modelo agregador e pequenos componentes HTML.
- `src/pages/client/dashboard.js` — layout da Central.
- `src/ui/modals.js` — formulário do lançamento.
- `src/events/handlers.js` — salva o projeto e as tarefas.
- `src/core/actions.js` — abre o formulário.
- `assets/css/styles.css` — estilos responsivos.
- `index.html` — carrega o agregador antes da Central.

## Limitações intencionais

A aplicação ainda usa `localStorage` no mesmo navegador, não possui autenticação, multiempresa real, IA, pagamentos ou integração com calendário externo. O formulário de lançamento é um **ensaio de fluxo**, não um serviço contratado. Não use dados reais/sensíveis.

## Para evoluir sem retrabalho

A futura implementação deverá substituir `state.launches` e `state.tasks` por entidades persistidas com `organization_id`, autorização por empresa, `source_type`, `source_id`, trilha de auditoria, fuso horário, idioma e controle de retenção. O agregador da Central deve consumir APIs tipadas, sem atribuir a si mesmo a propriedade dos dados de cada módulo.

## Teste manual rápido

1. Abrir `#cliente/dashboard`. Deve carregar a Central sem tela branca.
2. Clicar `+ Nova tarefa`, salvar e conferir na Central e em `#cliente/calendario`.
3. Marcar tarefa como concluída no calendário e conferir redução de pendências na Central.
4. Clicar `Simular lançamento`, informar produto/data e salvar. Devem aparecer resumo e quatro tarefas no calendário.
5. Abrir `+ Contato comercial` (CRM contratado na demonstração) e conferir registro dentro do CRM e resumo na Central.
6. Alternar para administrador e verificar que as telas existentes continuam abrindo.
7. Publicar via GitHub → Netlify. Verificar deploy publicado e recarregar com `Ctrl+Shift+R`.
