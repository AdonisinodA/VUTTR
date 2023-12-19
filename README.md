# VUTTR API

# Scripts
## Test
```npm t```

## Test cov
```npm run dev:cov```

## Build
```npm run build```

## Start (código do build)
 ```npm run start```

## Dev
 ```npm run dev```

# Rotas

## GET /tools?tag=suaTag
### Buscar todas as ferramentas de uma determinada TAG

## GET /tools
### Buscar todas as ferramentas

## POST /tools
### Inserir uma nova ferramenta
### exemplo body
```
{
"description":"teste descricao",
"link": "www.google.com.br",
"title": "tool title",
"tag":["teste", "teste1", "teste2"]}
```
## DELETE /tools/:id
### deletar uma ferramenta

# Primeiros passos

## Configure as variáveis de ambiente

### exemplo:
```
ENVIRONMENT = dev 
DATABASE_URI = mongodb://localhost:27017/bancoTeste
```

> A variável ENVIRONMENT tem duas opções

> dev e test.

#### Usando test
- Não precisa subir subir o banco (será utilizado arquivos json como banco)

#### Usando dev
- É necessário subir o banco para testar ou utilizar o servidor


## Suba o container
```docker-compose up -d```

## Suba o servidor localmente
```npm run dev```

# Curl teste

## GET TOOLS
```curl http://localhost:3000/tools?tag=node```

## POST TOOLS 
```curl -X POST http://localhost:3000/tools -H "Content-Type: application/json" -d '{"description":"teste descricao","id":4, "link": "www.google.com.br", "title": "tool title", "tag":["teste", "teste1", "teste2"]}'```

## DELETE TOOLS
```curl -X DELETE http://localhost:3000/tools/1```

