# Orbit — Arquitetura modular demonstrativa

## Como funciona agora
Aplicação em HTML/CSS/JavaScript sem build. O `index.html` carrega scripts clássicos em uma ordem documentada. **As funções ainda compartilham estado global entre arquivos.** Esta é uma etapa intermediária para facilitar edições sem alterar o comportamento, não a arquitetura final de produção. Não há componentes React ou backend nesta versão.

| Pasta | Responsabilidade |
|---|---|
| `src/config` | País, idioma, moeda e timezone (configuração futura por organização) |
| `src/i18n` | Chaves de tradução iniciais; telas ainda em português |
| `src/data` | Dados fictícios e catálogo legado de agentes |
| `src/core` | Helpers, estado, navegação, ações e inicialização |
| `src/pages/client` | Telas do cliente e calendário visual |
| `src/pages/admin` | Telas da administração |
| `src/ui` | Componentes e formulários de modal |
| `src/events` | Eventos de clique, mudança e envio de formulário |
| `src/features` | Especificações de memória, oportunidades e lançamentos |
| `assets/css` | Estilos gerais e calendário |

## Próximas mudanças planejadas
1. Migrar módulos comerciais legados para seis **soluções** com recursos Normal/Plus e adicionais temporários; migrar assinaturas legadas com cuidado.
2. Transformar a Central em workspace único com ações contextuais, integrando calendário, CRM e recomendações.
3. Implementar memória empresarial **estruturada**, com fonte, confirmação, escopo e retenção.
4. Extrair o estado global em módulos ES/React e adicionar testes automatizados.
5. Implementar backend multiempresa, autenticação real, RLS e auditoria antes de dados reais.
6. Implementar preços e tradução por mercado; **somente o alicerce de configuração existe hoje**.

## Importante
Este ZIP é um protótipo com dados locais. O painel admin NÃO é seguro, e não há segregação por cliente. **Não inserir dados reais ou dados pessoais confidenciais.**
