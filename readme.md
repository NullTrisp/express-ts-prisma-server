# Basic Typescript-Prisma-Mysql Express server

## Project structure

* dist (Here the compiled javascript code will go)
* prisma (Here will go the db schema models and migrations)
    - schema.prisma (This is the db schema and models)
    - migrations (Here all the migrations generated will go)
* src (Here you will have your typescript code)
    - classes (Here you can add abstract classes or interfaces)
        * CrudController.ts
    - config (Here you can add config files)
        * constants.ts
    - controllers (Here you can add your controllers)
        * index.ts
    - routes (Here all the project routes will go)
        * index.ts
    - index.ts (Here the server is lifted)

## Pre Requisites

* Node installed
* Typescript installed globally

## How to use

1. Run `npm install` in the project dir
2. create a .env file (Read ".env File")
3. Run `npx prisma db push --preview-feature`

## .env File

* DATABASE = "database_name"
* DATABASE_URL="mysql://user:password@host:port/db"

## Prisma

Prisma lets you modify the db tables in the schema.prisma file, additionally, it allows to modify the db tables directly in the db then update your schema.prisma models

* Updating models
    - af

* Updating directly in the db

##### Information taken from [medium](https://medium.com/better-programming/create-an-express-server-using-typescript-dec8a51e7f8d), [express](http://expressjs.com/) and [prisma](https://www.prisma.io/)
