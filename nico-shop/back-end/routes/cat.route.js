const express = require("express");

const router = express.Router();
const cat = require("../controllers/cat.controller.js");

router.get("/cat", cat.getAll);
router.post("/cat", cat.create);
router.delete("/cat/:id", cat.delete);
router.put("/cat", cat.update);

module.exports = router;