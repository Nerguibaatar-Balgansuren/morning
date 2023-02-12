const port = 8080;
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const menuRouter = require("./routes/menu.route.js");
const productsRouter = require("./routes/products.route.js");

// const catRouter = require("./routes/cat.route.js");
const usersRouter = require("./routes/users.route");
const { request } = require("express");

app.use(cors());
app.use(express.json());

app.use("/api", menuRouter);
// app.use("/api", catRouter);
app.use("/api", usersRouter);
app.use("/api", productsRouter);


app.get("api", (req, res) => {
    res.json({ message: "Welcome Rest API" });
});

app.listen(port, () => console.log(`server is running on ${port}`));
   