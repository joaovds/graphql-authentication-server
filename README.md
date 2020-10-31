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
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#tecno">Tecnologias</a> •
  <a href="#instalacao">Instalação</a> •
  <a href="#comoUsar">Como usar</a> •
  <a href="#autor">Autor</a>
</p>

<br>
<h2 id="sobre">:point_right: Sobre</h2>
<p>
  Este é um servidor GraphQL escrito com TypeScript. O server tem as funcionalidades de cadastrar usuário, e fazer login, sendo que ambas funcionalidades retornam um token JWT de autenticação.
</p>

<h2 id="funcionalidades">:pushpin: Funcionalidades</h2>

- [x] Cadastro de usuário (SignUp) com retorno de Token
- [x] Login de usuário com retorno de Token
- [x] Listagem de todos os usuários cadastrados

<h2 id="tecno">:wrench: Tecnologias</h2>

**As seguintes ferramentas foram usadas:**

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [GraphQL-yoga](https://github.com/prisma-labs/graphql-yoga)

<h2 id="instalacao">:game_die: Instalação</h2>

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:
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

<h2 id="comoUsar">Como usar</h2>

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

---

<h2 id="autor">Autor</h2>

<a href="https://github.com/joaovds">
  <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/50719694?s=460&u=bb76946310cdf551631974d9acf4f55306a44db6&v=4" width="100px;" alt=""/><br />
  <sub>
    <b>João Victor</b>
  </sub>
</a>
<a href="https://github.com/joaovds" title="Meu perfil GitHub">:notes:</a>

<br>

:smiley:
<br>
<a href="https://twitter.com/joaovds07">
![Twitter](https://img.shields.io/static/v1?label=Twitter&message=@joaovds07&color=blue&style=flat&logo=twitter)
</a>
![E-mail](https://img.shields.io/static/v1?label=E-mail&message=jv782063@gmail.com&color=red&style=flat&logo=gmail)
<a href="https://www.linkedin.com/in/jo%C3%A3o-victor-da-silva-a85907189/">
![Linkedin](https://img.shields.io/static/v1?label=Linkedin&message=Jo%C3%A3o&color=darkblue&style=flat&logo=linkedin)
</a>
