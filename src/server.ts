import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    const users = [
        { name: 'Rone', age: 33 },
        { name: 'Fulano', age: 30 },
    ]

    return response.json([users]);
});

// localhost:3333/users

app.listen(3333);