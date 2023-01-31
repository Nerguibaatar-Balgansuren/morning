const port = 8080;
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const menuRouter = require("./routes/menu.route.js");
const catRouter = require("./routes/cat.route.js");
const { request } = require("express");

app.use(cors());
app.use(express.json());

app.use("/api", menuRouter);
app.use("/api", catRouter);

app.get("api", (req, res) => {
    res.json({ message: "Welcome Rest API" });
});

app.listen(port, () => console.log(`server is running on ${port}`));
   