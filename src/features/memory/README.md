# Memória Empresarial — módulo planejado

Nesta versão **não existe memória de IA nem armazenamento central em servidor**. O protótipo usa localStorage.

## Contrato de dados futuro
- `organizations`: id, país, idioma, timezone, consentimentos e proprietário
- `business_facts`: id, organization_id, chave, valor, origem (`user`/`integration`/`ai_inferred`), confirmação, data de atualização, visibilidade
- `projects`: id, organization_id, tipo (`product_launch`), datas, estado, módulo de origem
- `project_facts`: project_id, campo, valor, origem, atualização
- `recommendations`: id, organization_id, projeto, motivo, fonte, ação gratuita, solução opcional, status
- `events`: id, organization_id, task_id opcional, início em UTC, fuso de exibição, origem, responsável

A IA **não deve registrar inferências como fatos confirmados**. Não armazenar indiscriminadamente conversas. Permissões, exclusão, retenção e histórico de consentimentos dependem de backend seguro.
