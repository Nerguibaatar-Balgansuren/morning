const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controllers.forMongo.js");
const auth = require("../middleware/auth");

router.get("/users", auth,users.getAll);
router.post("/users", users.register);
router.delete("/users/:id", users.delete);
router.put("/users", auth,users.update);
router.post("/users/login", users.login);

module.exports = router;