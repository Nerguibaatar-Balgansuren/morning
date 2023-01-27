// const { request, response } = require("express");
// const express = require("express");
// const json = require("body-parser");
// const cors = require("cors");

// const port = 8008;
// const app = express();

// app.get("/api", (request, response) => {
//     response.json({ message: "API" });
//     console.log(" got API")
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

// app.get("/", (request, response) => {
//     const { id } = request.query;
//     response.json({ status: true, result: [{id: 1, name: "Hello" }] });
//     response.send("Hello  Server");
//     console.log("")
// });

const products = [
    { id: 1, productName: "Carrots", categoryId: 1, category: "Vegetables", quantity: 10, price: 1.99},
    { id: 2, productName: "Lettuce", categoryId: 1, category: "Vegetables", quantity: 10, price: 2.99},
    { id: 3, productName: "Premium", categoryId: 2, category: "Breads", quantity: 10, price: 4.99},
    { id: 4, productName: "Burger Buns", categoryId: 2, category: "Breads", quantity: 10, price: 2.99},
    { id: 5, productName: "Mince", categoryId: 3, category: "Meat", quantity: 10, price: 12.99},
    { id: 6, productName: "Mayonnaise", categoryId: 4, category: "Spreads", quantity: 10, price: 3.99},
    { id: 7, productName: "Premium Sauce", categoryId: 4, category: "Spreads", quantity: 0, price: 13.99},

];

export {products}