# Desafios Docker
<strong> Cada desafio se encontra na pasta com mesmo nome! </strong>

## Desafio go

* Quando executar: docker run user/fullcycle, mostrar no terminal "Full Cycle Rocks!!"
* Imagem ter menos que 2MB

## Desafio NGINX com Node.js

* Proxy reverso do NGINX com chamada ao Node.js na porta 8080
* Ao acessar '/' realizar registro no banco de dados de um nome na tabela people
* Retorno da página deve ser ""Full Cycle Rocks!" + Lista de nomes cadastrada no banco de dados
* Arquivo docker compose de forma que  basta apenas rodarmos: docker-compose up -d para tudo funcionar
