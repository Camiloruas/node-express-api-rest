# API REST com Node.js e Express

##  Sobre o Projeto

Este projeto é uma API RESTful construída com Node.js, Express e Sequelize. Ele fornece uma base sólida para a criação de aplicativos web, com funcionalidades de autenticação, manipulação de dados de usuários e alunos, e upload de arquivos.

---

##  Principais Funcionalidades

- **Autenticação de Usuário:** Sistema completo de registro e login com tokens JWT para segurança.
- **Gerenciamento de Alunos:** Operações CRUD (Criar, Ler, Atualizar, Deletar) para os dados dos alunos.
- **Upload de Fotos:** Funcionalidade para upload de fotos de perfil dos alunos.
- **Estrutura Organizada:** O código é modular e bem estruturado, seguindo as melhores práticas do mercado.

---

##  Tecnologias Utilizadas

### **Backend**

- **[Node.js](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[Sequelize](https://sequelize.org/)**
- **[MariaDB](https://mariadb.org/)** (ou outro banco de dados SQL de sua preferência)
- **[JSON Web Tokens (JWT)](https://jwt.io/)**
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**
- **[Multer](https://www.npmjs.com/package/multer)**

### **Ferramentas de Desenvolvimento**

- **[Nodemon](https://nodemon.io/)**
- **[Sucrase](https://sucrase.io/)**
- **[ESLint](https://eslint.org/)**
- **[Sequelize-CLI](https://www.npmjs.com/package/sequelize-cli)**

---

##  Testes dos Endpoints

Todos os endpoints da API foram testados utilizando o cliente REST **[Insomnia](https://insomnia.rest/)**. O Insomnia é uma ferramenta poderosa que facilita o teste e a depuração de APIs, garantindo que todos os recursos funcionem conforme o esperado.

---

##  Como Executar o Projeto

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- **[Git](https://git-scm.com)**
- **[Node.js](https://nodejs.org/en/)**
- Um gerenciador de pacotes, como **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**
- Um banco de dados **[MariaDB](https://mariadb.org/)** (ou similar)

### **Instalação**

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Camiloruas/node-express-api-rest.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd node-express-api-rest
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**

    - Crie um arquivo `.env` na raiz do projeto.
    - Preencha as variáveis com as informações do seu banco de dados e outras configurações necessárias (como `DATABASE_URL`, `TOKEN_SECRET`, etc.).

5.  **Execute as migrations do banco de dados:**

    ```bash
    npm run sequelize db:migrate
    ```

### **Executando a Aplicação**

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
npm run dev
```

O servidor estará disponível no endereço `http://localhost:3001` (ou a porta que você configurou).

---

##  Link da Aplicação Online

[**Em breve estarei disponibilizando o link!**]

---

##  Como Contribuir

Sua contribuição é muito bem-vinda! Se você tem sugestões para melhorar este projeto, por favor, siga os passos abaixo:

1.  **Faça um fork do projeto.**
2.  **Crie uma nova branch:**

    ```bash
    git checkout -b feature/sua-feature
    ```

3.  **Faça suas alterações e commit:**

    ```bash
    git commit -m "feat: adiciona sua feature"
    ```

4.  **Envie para a sua branch:**

    ```bash
    git push origin feature/sua-feature
    ```

5.  **Abra um Pull Request.**

---

##  Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por [Camilo Ruas](https://github.com/Camiloruas)
### Teste de Conexão 2025-10-26 22:21:22
