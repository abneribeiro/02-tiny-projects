

 Contexto
Construa um e-commerce de roupas e tênis. O projeto será dividido em:
- Frontend: Desenvolvido com Next.js para renderização do lado do servidor (SSR) e geração estática (SSG), utilizando Tailwind CSS para estilização e shadcn/ui para componentes UI modernos e acessíveis.
- Backend: Desenvolvido com Node.js e Express para fornecer uma API RESTful.
- Banco de Dados: Utilizando PostgreSQL para armazenar dados estruturados, com instruções SQL puras (sem ORM).

 Requisitos Funcionais

 1. Produtos
- Cadastro de Produtos:
  - Nome, descrição, preço, categoria (roupas, tênis), imagens (suporte para upload), tamanhos, cores e estoque.
- Filtragem e Ordenação:
  - Filtros por preço, categoria, tamanho, cor, etc.
  - Ordenação por preço, nome, data de cadastro.
- Página de Detalhes do Produto:
  - Exibir informações completas do produto, galeria de imagens e opções de compra.

 2. Usuários
- Cadastro e Login:
  - Cadastro com e-mail e senha.
  - Login com e-mail/senha ou Google OAuth.
- Perfil do Usuário:
  - Informações pessoais (nome, e-mail) e endereço de entrega.
  - Histórico de pedidos.
- Autenticação:
  - Proteção de rotas no frontend e backend.
  - Uso de JWT (JSON Web Tokens) para autenticação.

 3. Carrinho de Compras
- Adicionar/Remover Produtos:
  - Adicionar produtos ao carrinho com quantidade e opções (tamanho, cor).
  - Remover produtos do carrinho.
- Calcular Total:
  - Calcular o total do carrinho com base nos produtos adicionados.

 4. Pedidos
- Finalização de Pedido:
  - Opções de pagamento (simulação com Stripe ou PayPal).
  - Endereço de entrega.
- Atualização de Estoque:
  - Reduzir o estoque dos produtos após a compra.
- Status do Pedido:
  - Acompanhamento do status (ex.: "pendente", "enviado", "entregue").

 5. Painel Administrativo
- Gerenciamento de Produtos:
  - Adicionar, editar e excluir produtos.
  - Upload de imagens para os produtos.
- Gerenciamento de Usuários:
  - Visualizar e gerenciar usuários.
- Gerenciamento de Pedidos:
  - Visualizar e atualizar o status dos pedidos.

 6. Upload de Imagens
- Backend:
  - Suporte para upload de imagens usando Multer ou Cloudinary.
- Frontend:
  - Interface para upload de imagens no painel administrativo.

 7. Testes
- Backend:
  - Implementar testes unitários e de integração para as funções e rotas da API.
  - Usar Jest e Supertest para testes.

---

 Requisitos Não Funcionais

 1. Segurança
- Proteção contra ataques comuns (ex.: SQL injection, XSS, CSRF).
- Hash de senhas usando bcrypt.
- Validação de dados no backend e frontend.

 2. Performance
- Otimização para carregamento rápido de páginas (ex.: lazy loading de imagens).
- Uso de cache para consultas frequentes ao banco de dados.
- Boas práticas de SEO para páginas de produtos e categorias.

 3. Escalabilidade
- Estrutura de código modular e bem organizada.
- Uso de boas práticas para facilitar a manutenção e expansão do projeto.



 Tecnologias e Ferramentas

 Frontend
- Next.js: Para renderização do lado do servidor (SSR) e geração estática (SSG).
- Tailwind CSS: Para estilização rápida e responsiva.
- shadcn/ui: Para componentes UI modernos e acessíveis.
- Google OAuth: Para login com Google.

 Backend
- Node.js/Express: Para criar a API RESTful.
- PostgreSQL: Para armazenar dados estruturados.
- Multer/Cloudinary: Para upload de imagens.
- Jest/Supertest: Para testes unitários e de integração.

 Testes no Backend
