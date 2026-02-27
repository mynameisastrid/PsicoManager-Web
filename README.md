O PsicoManager é uma aplicação web progressiva (PWA) desenvolvida para a gestão clínica de profissionais de psicologia. O sistema foca no controle de sessões, acompanhamento financeiro de pacientes ativos e arquivados, e sincronização de dados em nuvem utilizando arquitetura Serverless.

1. Funcionalidades Principais
Gestão de Pacientes: Cadastro com definição de modalidade de contrato (Pacote Mensal ou Sessão Avulsa).

Controle de Sessões: Histórico dinâmico com marcação de status (Pendente, Realizada, Falta).

Dashboard Financeiro: Cálculo automático de receita projetada vs. receita garantida baseada no status das sessões.

Calendário Integrado: Visualização mensal automatizada conforme o dia e horário fixo de cada paciente.

Gestão de Alta: Sistema de arquivamento que preserva o histórico financeiro sem manter o paciente na agenda ativa.

Sincronização Cloud: Integração nativa com Supabase para persistência de dados e autenticação.

2. Tecnologias Utilizadas
Frontend: HTML5, CSS3 (Variáveis CSS, Flexbox, Grid) e JavaScript Vanilla.

Backend as a Service (BaaS): .

Banco de Dados: PostgreSQL (via Supabase).

Segurança: Row Level Security (RLS) para isolamento de dados por usuário.

3. Arquitetura de Dados
A aplicação utiliza um modelo de persistência centralizado em um único objeto JSONB para garantir flexibilidade e baixa latência em operações de leitura/escrita.

Tabela: psico_data

Colunas:

user_id: UUID (Chave primária, vinculada à autenticação).

data_json: Objeto contendo o array de pacientes e o dicionário de sessões.

4. Instalação e Configuração
Para executar este projeto, é necessário configurar uma instância no Supabase.

Passo 1: Configuração do Banco de Dados
No painel do Supabase, execute o seguinte script no SQL Editor:

Passo 2: Configuração da Aplicação
Clone este repositório ou baixe o arquivo HTML.

Ao abrir a aplicação pela primeira vez, insira a URL do Projeto e a Public API Key fornecidas pelo painel do Supabase.

Crie uma conta ou realize login para iniciar a sincronização.

5. Segurança e Privacidade
Autenticação: Gerenciada pelo Supabase Auth.

Isolamento: A política de RLS garante que nenhum usuário tenha acesso aos dados de outro, mesmo que possuam as credenciais de API.

Backup: A aplicação oferece funcionalidade de exportação local (JSON) para contingência de dados.

6. Licença
Este projeto é de uso administrativo. Verifique as regulamentações locais de proteção de dados de saúde (como a LGPD no Brasil) ao hospedar dados de pacientes em ambientes de nuvem.
