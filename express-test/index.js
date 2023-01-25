const { request, response } = require("express");
const express = require("express");
const cors = require("cors");

const port = 8000;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
    const { id } = request.query;
    response.json({ status: true, result: [{id: 1, name: "Hello" }] });
    response.send("Hello  Server");
    console.log("")
});

app.get("/add", (request, response) => {
    const { a, b } = request.query;

    let result = Number(a) + Number(b);
    response.json({ value: result });
});

app.get("/subtract", (request, response) => {
    const { a, b } = request.query;

    let result = Number(a) - Number(b);
    response.json({ value: result });
});

app.get("/multiply", (request, response) => {
    const { a, b } = request.query;

    let result = Number(a) * Number(b);
    response.json({ value: result });
});

app.get("/divide", (request, response) => {
    const { a, b } = request.query;

    let result = Number(a) / Number(b);
    response.json({ value: result });
});

app.listen(port, () => {
    `Server is running at localhost:${port}`;
    console.log(`Server is running at localhost:${port}`);
});