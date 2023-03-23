const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controllers.forMongo.js");
const auth = require("../middleware/auth");

router.get("/users", users.getAll);
router.post("/users", users.create);
router.delete("/users/:id", users.delete);
router.put("/users", users.update);

module.exports = router;