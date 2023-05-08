# reactNodeJsStack
Descrição de fluxo de trabalho e ferramentas usadas na stack node js

## guia do cavalo...
## Backend
### Lista de ferramentas usadas
fastify :
prisma
banco de dados
typescript
#### iniciando o Projeto

```shell
npm init -y
```
para usar typescript instalar
```shell
npm i typescript -D
```
setup typescript
```shell
npx tsc --init
```
trocar target em tsconfig.json para es2020
ajuda a ter menos compilação de código no por ser uma config  pois o node ja reconhece mais códigos atuais sem necessidade de o typescript compilar 

#### setup fastify
```shell
npm i fastify
```
criar pasta src e o arquivo server.ts dentro
por padrão o node nao reconhece o typescript então e necessário compilar o código para js com o comando 
```shell
npx tsc
```
ele gera um arquivo que o node reconhece para automatizar esse processo podemos instalar a dependência tsx
```shell
npm i tsx -D
```
```shell
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsx watch src/server.ts" //a opção watch habilita a compilação automática do    código sempre que louver mudanças
  },
```

#### setup Prisma
```shell
npm i prisma -D
```
```shell
npm i @prisma/client
```
```shell
npx prisma init --datasource-provider SQLite  //
```
```shell

```

# Frontend
# Lista de ferramentas usadas