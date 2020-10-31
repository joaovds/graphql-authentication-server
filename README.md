<h1 align="center">Autenticação com GraphQL</h3>

<div align="center">

[![Assunto](https://img.shields.io/badge/Treino-GraphQL-green)]()
[![GitHub license](https://img.shields.io/github/license/joaovds/graphql-authentication-server?color=blue)](https://github.com/joaovds/graphql-authentication-server/blob/main/LICENSE)

</div>

---

> Sistema de criação e Login de usuário utilizando GraphQL

<br>

<p align="center" style="color: black">
  <a href="#sobre">Sobre</a> •
  <a href="#tecno">Tecnologias</a> •
  <a href="#instalacao">Instalação</a> •
  <a href="#howtouse">How to use</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#autor">Autor</a>
</p>

<br>

<h2 id="sobre">:point_right: Sobre</h2>
<p>
  Este é um servidor GraphQL escrito com TypeScript. O server tem as funcionalidades de cadastrar usuário, e fazer login, sendo que ambas funcionalidades retornam um token JWT de autenticação.
</p>

<h2 id="tecno">:wrench: Tecnologias</h2>

**As seguintes ferramentas foram usadas:**

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [GraphQl-yoga](https://github.com/prisma-labs/graphql-yoga)

<h2 id="instalacao">:game_die: Instalação</h2>

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as sequintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Começando

```bash
# Clone este repositório
$ git clone https://github.com/joaovds/graphql-authentication-server.git

# Acesse a pasta do projeto
$ cd graphql-authentication-server/server

# Instale as dependências
$ yarn

# Agora crie as migrations para o Banco de dados com o Prisma
$ yarn prisma migrate save --name init --experimental

# Execute a migration criada
$ yarn prisma migrate up --experimental

# E por fim, crie o cliente prisma
$ yarn prisma generate
```

Agora está tudo instalado! Basta executar o servidor e usa-lo...

```bash
# Execute o servidor
$ yarn dev

# Você deve receber está mensagem no terminal:
$ Server is running on http://localhost:4000
```

Acesse agora em seu navegador este endereço: http://localhost:4000 ... e poderá criar usuário, fazer login e listar todos os usuários cadastrados.

---

> Ex: Para criar um usuário, escreva o seguinte no GraphQL Playground:

```
mutation {
  signup(
    name: "John Lennon"
    email: "lennon@email.com"
    password: "teste123"
  ) {
    token
    user {
      id
      name
    }
  }
}
```

> Ex: Para fazer login:

```
mutation {
  login(
    email: "lennon@email.com",
    password: "teste123"
  ) {
    token
    user {
      name
      email
    }
  }
}
```

> Ex: E para listar todos os usuários:

```
{
  users {
    id
    name
    email
  }
}
```
