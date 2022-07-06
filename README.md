# Nest.js, Prisma, GraphQL example

## Introduction

This project is a simple example of using Nest.js, Prisma, and GraphQL.

It is to investigate the possibility to use Prisma to replace Mongoose when using MongoDB as database.

It is because type-safety of Mongoose is week when using TypeScript.

Prisma can be used on SQL database as well.

It is also for practicing Nest.js, an OOP backend framework, and to compare it with Express.js.

## Todo

### Prisma

- [x] Single collection
- [x] One to one relationship
- [x] One to many relationship
- [ ] Many to many relationship
- [ ] Aggregation / Join table
- [ ] Filter, Sort by foreign field

### Nest.js

- [x] Simple GraphQL API server
- [ ] Middleware
- [ ] Authentication
- [ ] Queue (e.g. `@nestjs/bull`, `MQTT`, `RabbitMQ`, etc.)
- [ ] Serverless (Bundle size, cold start time)

### GraphQL

- [x] Simple query and mutation
- [ ] Multiple resolvers in one request
- [ ] Authentication
- [ ] Subscription

## Comments

### Prisma

- Well documented
- Code generation from `.prisma` schema file is a good approach to provide type-safety
- `.prisma` format is not hard to learn

### Nest.js

- Well documented
- Dependency Injection is a new concept to me. It may make unit testing easier by providing a mock dependency instance. Further investigation is needed.

### GraphQL

- It provides flexibility if frontend and backend are developed and maintained by different teams. Otherwise, it maybe an overkill.
