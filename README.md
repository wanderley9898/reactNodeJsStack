# reactNodeJsStack
Descrição de fluxo de trabalho e ferramentas usadas na stack node js

## Extensões necessárias no vscode
ESLint
PostCSS Language Support
Prisma
Tailwind CSS IntelliSense

## Backend
### Lista de ferramentas usadas
fastify :
prisma
banco de dados
typescript
#### iniciando o Projeto
Iniciando o arquivo package.json onde tera as informações sobre o projeto e todas as dependências necessárias no projeto
```shell
npm init -y
``` 
para usar typescript 
```shell
npm i typescript -D
```
para fazer o typescript entender que esta em um projeto node e entender algumas variáveis do node como a variável process e alguns imports
```shell
npm i @types/node -D
```
para criar o arquivo de configuração tsconfig.json onde fica as configurações do typescript 
```shell
npx tsc --init
```
trocar target em tsconfig.json para es2020
ajuda a ter menos compilação de código no por ser uma config  pois o node ja reconhece mais códigos atuais sem necessidade de o typescript compilar 

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
para facilitar a padronização do projeto instalar o ESLint
```shell
npm i eslint -D
```
se vc quer personalizar a padronização do projeto pode rodo o comando abaixo ele gera o arquivo .eslintrc.json onde se pode fazer isso
```shell
npx eslint --init
```
Pessoalmente gosto de utilizar os padrões da rocketseat
```shell
npm i @rocketseat/eslint-config -D
``` 
agora crie um arquivo na raiz do projeto .eslintrc.json e configurar como no exemplo depois disso ele aponta todos os erros de padrão no projeto
```shell
{
  "extends": [
    "@rocketseat/eslint-config/node"
  ]
}
```
caso seja um projeto grade vc pode adicionar a seguinte linha no package.json
```shell
  "dev": "tsx watch src/server.ts",
+ "lint": "eslint src --ext .ts --fix"
```
então se quiser padronizar o projeto use o comando
```shell
npm run lint
```

#### setup fastify
Link para documentação do fastify (https://www.fastify.io/docs/latest/)

instalar fastify
```shell
npm i fastify
```

```shell
npm i @fastify/cors
```

#### setup Prisma
```shell
npm i prisma -D
```

```shell
npx prisma init --datasource-provider SQLite  
```

```shell
npm i @prisma/client
```

versionamento do bd
```shell
npx prisma migrate dev
```
comando para abrir ferramenta integrada de gerenciamento do bd do prisma, muito util para testes de bd no backend
```shell
npx prisma studio
```
### validação de dados para a requisição do front
zod utilizado para validação de dados
```shell
npm i zod
```
### Geração de diagramas  
caso tenha queira gerar diagramas automaticamente 
```shell
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```
adicionar config no schema.prisma
```shell
generator erd {
  provider = "prisma-erd-generator"
}
```
gera o diagrama de relacionamento do bd
```shell
npx prisma generate
```

# Frontend
# Lista de ferramentas usadas

# iniciando 
documentação do nextjs (https://nextjs.org/docs)
```shell
npx create-next-app@latest web-todo --use-npm
```

Para utilizar os padrões da rocketseat
```shell
npm i @rocketseat/eslint-config -D
``` 
agora no arquivo .eslintrc.json e configurar como no exemplo, depois disso ele aponta todos os erros de padrão no projeto
```shell
{
  "extends": [ "next/core-web-vitals", "@rocketseat/eslint-config/react"]
}
```

```shell
npm i prettier-plugin-tailwindcss -D
```
agora crie um arquivo prettier.config.js adicionar a seguinte configuração
```shell
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```

## pacotes de ícones
link para a documentação do lucide (https://lucide.dev/)
```shell
npm i lucide-react
```

### check

```shell 
npm i short-unique-id
```

```shell
npm i axios
```
autenticação de sessão 
```shell
npm i @fastify/jwt
```

## Mobile
reactNative utilizamos o expo link para documentação (https://docs.expo.dev)
para inicia projeto 
```shell
npx create-expo-app my-app
```
caso queira usar typescript no projeto troque a extensão do arquivo app.js para app.tsx e inicie o projeto o expo reconhece o typescript e baixara as ferramentas necessárias
```shell
npm run start
```
para usar a estilização do tailwind no mobile podemos instalar o nativewind (https://www.nativewind.dev/quick-starts/expo)
```shell
npm i nativewind
```
```shell
npm i tailwindcss -D
```
Executar ```shell npx tailwindcss init ``` para criar um tailwind.config.js arquivo

Adicione os caminhos a todos os seus arquivos de componentes em seu arquivo tailwind.config.js. Lembre-se de substituir <custom directory> pelo nome real do seu diretório, por exemplo screens. costumo usar um diretório com o nome app assim como e feito na web. então crie um diretório app no projeto e substitua <custom directory> por app
```shell
// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Modifique seu babel.config.js
```shell
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```
se o projeto utiliza typescript modifique o arquivo tsconfig.json
```shell
{
  "compilerOptions": {
+   "types": [
+     "nativewind/types"
    ]
  },
  "extends": "expo/tsconfig.base"
}
```

```shell
npm i eslint @rocketseat/eslint-config -D
```
crie o arquivo .eslint.json e adicione
```shell
{
  "extends": [
    "@rocketseat/eslint-config/react"
  ] 
}
```

```shell
npm i prettier-plugin-tailwindcss -D
```
agora crie um arquivo prettier.config.js adicionar a seguinte configuração
```shell
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```
configuração de fonts
https://github.com/expo/google-fonts

trabalhar com svg https://github.com/software-mansion/react-native-svg e o https://github.com/kristerkari/react-native-svg-transformer

```shell
npx expo install react-native-svg                                   ```                                                                        ```shell
 npm i -D react-native-svg-transformer   
 ```
https://expo.github.io/router/docs/
 ```shell
 npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
 ```
 Em seguida, exclua o ponto de entrada em seu package.jsonou substitua-o por index.jsser explícito:
```
{
  "main": "index.js"
}
```
Crie um novo arquivo index.jsna raiz do seu projeto. Se já existir, substitua-o pelo seguinte:

import "expo-router/entry";

Adicione um link direto schemee habilite metroa web em seu app.json(ou app.config.js):

{
  "expo": {
    "scheme": "myapp",

    "web": {
      "bundler": "metro"
    }
  }
}