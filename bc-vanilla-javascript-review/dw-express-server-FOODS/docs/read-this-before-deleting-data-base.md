# Procedure to create a new SQLite database

Step1

- delete the dev.db file.

Step2

- right click on the backend folder and open a new integrated terminal.

Step3

- create a new database with the following terminal command

```javascript
npx prisma migrate dev --name init
```

- running this command will also generate the prisma client automatically.

- Run the following command to create the prisma client.

```javascript
npx prisma generate
```

- Then you must populate the database with the following command.

```javascript
npm node ./seedDatabase.mjs
```
