# Basic Typescript-Prisma-Mysql Express server

This is the basic structure of a Express project using Typescript, Prisma (with Mysql) adapter, CORS and JWT.

## Project structure

* dist (Here the compiled javascript code will go)
* prisma (Here will go the db schema models and migrations)
    - schema.prisma (This is the db schema and models)
    - migrations (Here all the migrations generated will go)
* src (Here you will have your typescript code)
    - classes (Here you can add abstract classes or interfaces)
        * CrudController.ts
    - config (Here you can add config files)
        * jwt
            - services.ts (Here goes the jwt funtions)
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
* TOKEN_SECRET="very-large-string"

## Prisma

Prisma lets you modify the db tables in the schema.prisma file, additionally, it allows to modify the db tables directly in the db then update your schema.prisma models

* Updating models
    - [Syntax]()

* Updating directly in the db

##### Information adapted from [medium(ts-server)](https://medium.com/better-programming/create-an-express-server-using-typescript-dec8a51e7f8d), [medium(CORS)](https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b), [express](http://expressjs.com/), [prisma](https://www.prisma.io/) and [DigitalOcean(jwt)](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
