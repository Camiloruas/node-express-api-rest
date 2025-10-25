# Comandos Úteis do Sequelize-CLI

Este arquivo é um guia de referência rápida para os comandos mais comuns do `sequelize-cli`, útil para quando você está aprendendo.

---

## 1. Inicializar o Projeto

Este comando cria a estrutura inicial do Sequelize em seu projeto (pastas `config`, `models`, `migrations`, `seeders`).

```bash
npx sequelize-cli init
```

---

## 2. Criar uma Migration

Cria um novo arquivo de migração em branco na pasta `migrations`. Sempre dê um nome descritivo.

```bash
npx sequelize-cli migration:create --name=nome-descritivo-da-migration
```

**Exemplo:**
```bash
npx sequelize-cli migration:create --name=create-table-alunos
```

---

## 3. Gerar um Model e sua Migration

Este é um dos comandos mais úteis. Ele cria o arquivo do `Model` na pasta `models` e também o arquivo de `Migration` correspondente para criar a tabela.

```bash
npx sequelize-cli model:generate --name NomeDoModel --attributes nomeDoAtributo:tipo,outroAtributo:tipo
```

**Exemplo Prático (criando um model `Foto`):**
```bash
npx sequelize-cli model:generate --name Foto --attributes originalname:string,filename:string,aluno_id:integer
```
*   `--name`: O nome do Model (use CamelCase, singular).
*   `--attributes`: Uma lista de colunas e seus tipos (`string`, `integer`, `boolean`, `date`, etc.).

---

## 4. Executar Migrations

Aplica todas as migrações pendentes (arquivos na pasta `migrations` que ainda não foram executados).

```bash
npx sequelize-cli db:migrate
```

--- 

## 5. Reverter Migrations

Desfaz a última migração que foi executada.

```bash
npx sequelize-cli db:migrate:undo
```

Para desfazer **todas** as migrações:
```bash
npx sequelize-cli db:migrate:undo:all
```

---

## 6. Criar um Seeder

Cria um novo arquivo de "seeder" para popular o banco de dados com dados de teste.

```bash
npx sequelize-cli seed:generate --name=nome-do-seeder
```

**Exemplo:**
```bash
npx sequelize-cli seed:generate --name=popular-tabela-alunos
```

---

## 7. Executar Seeders

Insere os dados de todos os arquivos de seed no banco de dados.

```bash
npx sequelize-cli db:seed:all
```

---

## 8. Gerenciar o Banco de Dados

**Criar o banco de dados** (usa as configurações do `config/config.json`):
```bash
npx sequelize-cli db:create
```

**Apagar o banco de dados** (CUIDADO: isso deleta tudo!):
```bash
npx sequelize-cli db:drop
```
