const { request, response } = require("express");
const express = require("express");
const json = require("body-parser");
const cors = require("cors");

const port = 8008;
const app = express();

app.use(cors());
app.use(json());

app.get("/api", (request, response) => {
    response.json({ message: "API" });
    console.log(" got API")
});

app.get("/products", (req, res) => {
    if (!products) res.json({ status: false, message: "not found" });
    if (products.length == 0) res.json({ status: true, message: "empty" });

    res.json({ status: true, result: products });

});

app.get("/products", (req, res) => {
    const { id } = req.query;

    if (!id) res.json({ status: false, message: "param id not found" });

    const newArr = products.filter((e) => e.id == id);

    if (newArr.length == 0) res.json({ status: true, message: "id not found" });

    res.json({ status: true, result: newArr[0] });

});

