# GitHub Blog Ignite

Este é um projeto que consiste no desenvolvimento de uma aplicação que utiliza a API do GitHub para buscar issues de um repositório, exibindo-as como um blog. A aplicação permite listar e filtrar todas as issues do repositório, bem como exibir um post completo.

## Funcionalidades

- Listagem do perfil do usuário: exibe informações do usuário, como imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.

- Listagem e filtragem de issues: exibe um resumo do conteúdo de cada issue do repositório, permitindo filtrar as issues de acordo com critérios de busca.

- Visualização de post completo: ao selecionar uma issue, é possível visualizar o conteúdo completo do post.

## API's do GitHub

O projeto utiliza as seguintes API's do GitHub:

- **GitHub Users API**: utilizada para buscar os dados do usuário do GitHub. Para fazer a requisição, é necessário realizar uma chamada para `api.github.com/users/${username}`. Para mais informações, consulte a [documentação da GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user).

- **GitHub Search API**: essa API é responsável por realizar a busca por issues do repositório criado. É utilizada tanto para a listagem quanto para o filtro por busca. Para mais informações, consulte a [documentação da GitHub Search API](https://docs.github.com/pt/rest/search).

## Instalação e execução

Siga as instruções abaixo para instalar e executar o projeto:

1. Faça o clone deste repositório.

2. Navegue até a pasta do projeto.

3. Execute o comando `npm install` para instalar as dependências.

4. Para executar o projeto em modo de desenvolvimento, utilize o comando `npm run dev`.

5. Para fazer o build do projeto, utilize o comando `npm run build`.

6. Para executar o linting do código, utilize o comando `npm run lint`.

7. Para visualizar o projeto em modo de preview, utilize o comando `npm run preview`.

## Dependências

O projeto utiliza as seguintes dependências:

- **@emotion/react**: "^11.11.0"
- **@emotion/styled**: "^11.11.0"
- **@hookform/resolvers**: "^2.9.7"
- **@mui/material**: "^5.13.2"
- **axios**: "^0.27.2"
- **dotenv**: "^16.0.3"
- **phosphor-react**: "^1.4.1"
- **react**: "^18.2.0"
- **react-dom**: "^18.2.0"
- **react-hook-form**: "^7.34.0"
- **react-router-dom**: "^6.11.2"
- **scheduler**: "^0.23.0"
- **styled-components**: "^5.3.5"
- **use-context-selector**: "^1.4.1"
- **zod**: "^3.17.10"

## Dependências de desenvolvimento

O projeto utiliza as seguintes dependências de desenvolvimento:

- **@rocketseat/eslint-config**: "^1.1.3"
- **@types/node**: "^20.2.3"
- **@types/react**: "^18.0.15"
- **@types/react-dom**: "^18.0.6"
- **@types/styled-components**: "^5.1.25"
- **@vitejs/plugin-react**: "^2.0.0"
- **eslint**: "^8.20.0"
- **json-server**: "^0.17.0"
- **react-error-overlay**: "^6.0.9"
- **typescript**: "^4.6.4"
- **vite**: "^3.0.0"

---

Esse é o README do projeto GitHub Blog Ignite. Espero que as informações sejam úteis para a compreensão e execução do projeto. Em caso de dúvidas, consulte a documentação das dependências e as APIs do GitHub mencionadas.
