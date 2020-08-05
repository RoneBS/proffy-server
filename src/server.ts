import express from 'express';

const app = express();

app.use(express.json());

// localhost:3333/users

app.get("/", (request, response) => {
    return response.json([{message: 'Hello World'}]);
});

app.listen(3333);