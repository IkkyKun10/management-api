#SETUP Project

Create .env file

```angular2html
DATABASE_URL="postgresql://postgres:&#123;yourpasswordDB}@localhost:5432/&#123;DB_NAME}?schema=public"
```

```shell
npm install

npx prisma migrate dev

npx prisma generate

tsc

node dist/main.js
```

