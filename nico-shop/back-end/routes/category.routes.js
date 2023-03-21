const express = require("express");

const category = require("../controllers/category.controllers.forMongo");
const router = express.Router();


router.get('/category', category.getAll);
router.get("/category/:_id", category.getOne);
router.post('/category', category.createCategory);
router.put('category/:_id', category.updateCategory);
router.delete('category/:_id', category.deleteCategory);

module.exports = router;