# Visão Geral do Projeto

Aplicação front-end consumindo a API online [pokeapi](https://pokeapi.co/). O sistema deve listar todos pokemons, pesquisar e consultar.


![FireShot Capture 026 - Pokedex - localhost](https://user-images.githubusercontent.com/61437530/212144440-8ff363eb-db99-4b59-9db9-fa8a1533292c.png)



![FireShot Capture 027 - Pokedex - localhost](https://user-images.githubusercontent.com/61437530/212144435-cb5e39f7-0a86-4d6c-8b0e-4556e9519c1c.png)

### Tecnologias

- Angular
- TypeScript
- HTML5
- SCSS

### Clonando o Repositório

Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código. Mas antes de clonar o repositório é importante que realize um **fork**, ou seja, criar uma cópia do mesmo para o seu github. Para isso basta subir a página e clicar no botão de mesmo nome e aguardar alguns minutos. Depois basta clicar em **clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:

```
git clone <url-do-repositorio>
```

### Instalando as Dependências

Para instalar as dependências do projeto basta abrir o **Prompt de Comando do Node.js** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:

```
npm install
```

## Servidor de Desenvolvimento

Basicamente você deverá escrever seu código e enquanto você efetua alterações no arquivo é necessário deixar o comando abaixo rodando:

```
ng serve --open
```

O código irá rodar o plugin **serve**, dessa forma gerando um servidor para o desenvolvimento (`http://localhost:4200`) sendo assim toda alteração de código nos arquivos de origem irá recarregar automaticamente a página.
