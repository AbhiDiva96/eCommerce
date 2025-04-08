# E-Commerce Backend

A no-nonsense e-commerce backend built with TypeScript and Node.js. The application runs on a Node.js server and uses Docker for a streamlined Postgres database setup with Prisma as the ORM. This project is designed for developers who want a solid starting point to build and scale a modern e-commerce backend quickly.

## Docs : 
  - [API- Doc](https://faithful-prepared-d90.notion.site/E-commerce-backend-1cfea5b5f4d08062abb8f6af081d9fbc)

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository sets up a robust backend structure for an e-commerce platform using:
- **TypeScript** for type safety and scalability.
- **Node.js** for the application runtime.
- **Postgres** as the primary database, managed through Docker for rapid and isolated development setups.
- **Prisma** as the ORM, ensuring smooth and type-safe interactions with the database.

This project is built with a forward-thinking mindset. It avoids unnecessary sugar-coating and focuses on building a maintainable, scalable codebase suitable for modern e-commerce solutions.

## Tech Stack

- **Programming Language:** TypeScript
- **Runtime:** Node.js
- **Database:** PostgreSQL (Dockerized)
- **ORM:** Prisma
- **Frontend** : React
- **Containerization:** Docker
- **Testing:** Jest
- **Deployment:** Docker

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Docker](https://www.docker.com/) (for Postgres database)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AbhiDiva96/eCommerce.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd server
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a .env file:**

   ```bash
   touch .env
   ```

5. **Configure the .env file:**

   ```bash
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ecommerce
   ```

6. **Start the application:**

   ```bash
   npm run dev
   ```

## Configuration

The application is configured to use a Postgres database. The database URL is stored in the .env file, which is used by the application to establish a connection to the database.

## Database Setup

To set up the database, follow these steps:

1. **Start the Postgres Docker container:**

   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
   ```

2. **Migrate database**

   ```bash
    npx prisma migrate dev --name init
   ```

3. **Prisma studio setup**

   ```bash
    npx prisma studio
   ```

## Running the Application

To run the application, use the following command:

```bash
npm run dev
```

