<h1>Rotas da api</h1>:

<h3>Usuário:</h3>

- [x] Criação do usuário: POST host/users

- [x] Sessão de um usuário: POST host/users/session


<h3>Produtos:</h3>

- [x] Criação de produtos: POST host/products

- [x] Update de quantidade de produtos: POST host/products/update-quantity

- [x] Listagem de produtos: GET host/products

- [x] Listagem de um produto especifico: GET host/products/:id

- [x] Listagem de produtos com estoque disponivel: GET host/products/available (para mobile)


<h3>Orders:</h3>

- [x] Criação de orders: POST host/orders

- [x] Listagem de orders: GET host/orders

- [x] Listagem de um pedido especifico: GET host/orders/:id

- [x] Listagem de pedidos com o status aberto: GET host/orders/open (para tela lista de pedidos)

- [x] Listagem de pedidos com o status fechado: GET host/orders/closed (para tela lista de pedidos com o status fechado)

- [x] Criar funcionalidade para mudar o status(FECHAR) de um pedido: PUT host/orders/change-status/:id

- [x] Fazer com que a listagem de produtos e criação de pedidos não precise de autenticação

- [ ] Fazer com que a listagem de pedidos mostre o nome do produto.