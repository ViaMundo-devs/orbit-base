# Orbit — Base modular v2.0 (DEMONSTRAÇÃO)

Projeto reorganizado a partir da demonstração corrigida fornecida anteriormente. Mantém as funcionalidades demonstrativas existentes e inclui calendário mensal visual, com troca de meses e tarefas sincronizadas com a lista do navegador.

## Publicar no Netlify
1. Extraia este ZIP.
2. Publique **a pasta que contém `index.html`, `src/` e `assets/`** usando Deploy manually no Netlify.
3. Abra a URL e selecione Cliente/Admin. Atualize com Ctrl+Shift+R se necessário.

Não há npm, build, variáveis de ambiente, IA ou banco de dados nesta etapa.

## Como modificar
- Central: `src/pages/client/dashboard.js`
- Calendário: `src/pages/client/calendar.js` e `assets/css/styles.css`
- Catálogo: `src/data/seed.js` (padrão) + `src/pages/client/catalog.js` + `src/pages/admin/catalog.js`
- Desbrave: `src/pages/client/desbrave.js`
- Administração: `src/pages/admin/`
- Regras de cliques: `src/core/actions.js`
- Formulários: `src/ui/modals.js` + `src/events/handlers.js`
- Configuração de países: `src/config/markets.js`
- Traduções: `src/i18n/translator.js` (alicerce; telas ainda em pt-BR)
- Arquitetura de memória: `src/features/memory/README.md`

**Atenção:** todos os arquivos `src/` são usados diretamente pelo navegador. Não publique somente o HTML e a pasta CSS. A versão anterior tinha 3 arquivos; esta utiliza múltiplos scripts clássicos, cujo carregamento é ordenado no `index.html`.

## Limites
- Usa localStorage `orbit_demo_v1` para manter compatibilidade com os dados locais da demo anterior no mesmo domínio.
- Não há login, servidor, sincronização entre dispositivos, IA, pagamentos ou segurança de produção.
- A vitrine antiga foi preservada para não quebrar a demonstração; o catálogo consolidado em 6 soluções será uma etapa futura.
- Calendário compartilha tarefas existentes; fusos, recorrência, convidados, sincronização externa e atualização entre dispositivos são trabalhos futuros.
- Sugestão: faça backup de dados locais de teste antes de publicar; `Restaurar demonstração` apaga alterações da demo.

Consulte `docs/ARQUITETURA.md`.
