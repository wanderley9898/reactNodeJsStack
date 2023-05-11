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

```shell
npm i @fastify/cors
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
versionamento do bd
```shell
npx prisma migrate dev
```
```shell
npx prisma studio
```
para gerar diagramas automaticamente
```shell
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```
```shell
npx prisma generate
```

# Frontend
# Lista de ferramentas usadas

# iniciando 
```shell
npx create-next-app@latest --use-npm
```
zod utilizado para validação de dados
```shell
npm i zod
```
```shell 
npm i short-unique-id
```
```shell
npm i -D tailwindcss postcss autoprefixer
```
se o next nao gerou o arquivo tailwind.conf.js use o seguinte comando 
```shell
npx tailwindcss init -p //cria o arquivo de configuração
```

```shell
npm i axios
```