#Rotas da api:

##Usuário:

#### - \[X] Criação do usuário: POST host/users

#### - \[X] Sessão de um usuário: POST host/users/session

##Produtos

#### - \[X] Criação de produtos: POST host/products

#### - \[X] Update de quantidade de produtos: POST host/products/update-quantity

#### - \[X] Listagem de produtos: GET host/products

#### - \[X] Listagem de um produto especifico: GET host/products/:id

#### - \[X] Listagem de produtos com estoque disponivel: GET host/products/available (para mobile)

##Orders

#### - \[X] Criação de orders: POST host/orders

#### - \[X] Listagem de orders: GET host/orders

#### - \[X] Listagem de um pedido especifico: GET host/orders/:id

#### - \[X] Listagem de pedidos com o status aberto: GET host/orders/open (para tela lista de pedidos)

#### - \[X] Listagem de pedidos com o status fechado: GET host/orders/closed (para tela lista de pedidos com o status fechado)

#### - \[X] Criar funcionalidade para mudar o status(FECHAR) de um pedido: PUT host/orders/change-status/:id

#### - \[X] Fazer com que a listagem de produtos e criação de pedidos não precise de autenticação
