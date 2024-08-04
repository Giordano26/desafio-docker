# Desafios Docker

## Desafio go

* Quando executar: docker run user/fullcycle, mostrar no terminal Full Cycle Rocks!!
* Imagem ter menos que 2MB

## Desafio NGINX com Node.js

* proxy reverso do NGINX com chamada ao Node.js na porta 8080
* ao acessar '/' realizar registro no banco de dados de um nome na tabela people
* retorno da página deve ser ""Full Cycle Rocks!" + Lista de nomes cadastrada no banco de dados
* Arquivo docker compose de forma que  basta apenas rodarmos: docker-compose up -d para tudo funcionar
