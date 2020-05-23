<div align='center'><img src='hero-frontend/src/assets/logo.svg' alt='logo' ></div>
<div align='center'><img src='hero-frontend/src/assets/preview.jpg' alt='preview' width='600px' ></div>

# :pushpin: índice

1. [Objetivo do Projeto](#dart-objetivo-do-projeto)
2. [Sobre](#page_with_curl-sobre)
3. [Tecnologias Utilizadas](#rocket-tecnologias-utilizadas)
4. [Requisitos](#gear-requisitos)
5. [Rodar o Projeto](#arrow_forward-rodar-o-projeto)
6. [Resultado](#keyboard-resultado)
7. [Redes Sociais](#man_technologist-redes-sociais)

---

## :dart: Objetivo do Projeto

O objetivo é conectar ONG's a pessoas que queiram ajudar com um valor monetário, a ONG cria um cadastro, posta os casos em que precisa de colaboração, e uma pessoa pode visualizar os casos e escolher qual ela pode ajudar.

## :page_with_curl: Sobre

O projeto foi desenvolvido na semana omniStack11 da [RocketSeat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg), com o [Diego Fernandes](https://github.com/diego3g) ministrando as aulas, esse evento sempre é bem intenso e traz muitos conhecimentos, foi desenvolvido o back-end, front-end e mobile nesse projeto, vou descrever cada um separadamente.

**Back-end**

O back-end foi feito usando o express, e o banco de dados utilizado foi o Sqlite3, o maior diferencial nesse projeto para mim foi trabalhar com a lib knex, que é um construtor de consultas SQL, ele permite trabalhar com as consultas usando funções no javaScript sem a necessidade de criar consultas SQL, e também as migrations, que é uma maneira de criar as tabelas e manter um histórico de quando elas foram criadas, alteradas, é como um controle de versões para as tabelas, essas foram as principais novidades pra mim na parte do back-end.

**Front-end**

No frontend dessa aplicação não houve grandes desafios, o que mais gostei foi que o layout ficou muito bonito, a prototipagem desse projeto está disponível para ser visualizada aqui em [Resultado](#keyboard-resultado), foi bem interessante o uso da biblioteca react-icons, que reúne os ícones de vários sites, inclusive do material-design, e tem uma configuração que foi feita nas settings do vs-code que foi algo que ajuda bastante a trabalhar com o react, quando vc cria uma tag no html, o vs-code completa pra vc, ja no jsx isso não acontece, mas tem como ativar isso, assim se vc escrever h1 no jsx ele vai sugerir uma tag, isso agiliza muito no dia a dia, vou deixar as instruções para a configuração.

* primeiro passo, apertar Ctrl + Alt + P abrirá um modal
* segundo passo, buscar por settings (Open settings JSON)
* terceiro passo, adicionar essas duas linhas dentro do arquivo

``` 
    "emmet.syntaxProfiles": { "javascript": "jsx" },
    "emmet.includeLanguages": { "javascript": "javascriptreact" },
```

## :rocket: Tecnologias Utilizadas

### Back-end

* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* **Banco de dados:** [Sqlite3](https://www.sqlite.org/index.html)
* **Cliente REST:** [Insomnia](https://insomnia.rest/)

**Dependências**

* [cors](https://www.npmjs.com/package/cors)
* [express](https://expressjs.com/)
* [knex](http://knexjs.org/)
* [sqlite3](https://www.sqlite.org/index.html)

### Front-end

* [React.js](https://pt-br.reactjs.org/)
* [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
* [JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

**Dependências**

* [axios](https://github.com/axios/axios)
* [react-icons](https://react-icons.github.io/react-icons/)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

## :gear: Requisitos

* [Git](https://git-scm.com/) (Para clonar, opcional)
* [Node.js](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/) (É instalado junto com o Node)

## :arrow_forward: Rodar o Projeto

* Primeiro passo, clone ou baixe o projeto em sua maquina
* Este repositório possui 3 projetos, hero-backend, hero-frontend e hero-mobile, você precisa iniciar os 3 individualmente. 

**hero-backend**

* Primeiro abra a pasta hero-backend no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidor com o comando `npm start` 
* O servidor estará disponível na porta **3003**, http://localhost:3003/ 

**hero-frontend**

* Agora abra a pasta hero-frontend no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidor com o comando `npm start` 
* Uma aba vai se abrir no navegador, caso não ocorra, navegue para http://localhost:3000/ 

**hero-mobile**

* Em construção...

## :keyboard: Resultado

:bookmark: **Layout do projeto no Figma:** [Click Aqui](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=0%3A1)

![](https://media.giphy.com/media/XeT2UtXAHOkhKEN6lI/giphy.gif)

## :man_technologist: Redes Sociais

* [instagram](https://www.instagram.com/devsp011/)
* [Linkedin](https://www.linkedin.com/in/vitor-sampaio-4532451a7/)

---

<h5 align='center' >Feito com :purple_heart: por <a href="https://github.com/devsp011" target="_blank">DevSp</a> </h5>
