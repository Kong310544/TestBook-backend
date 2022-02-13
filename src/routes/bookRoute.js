const express = require('express');
const app = express.Router();
const bookController = require('../controllers/bookController');
const auth = require("../middleware/auth");

app.post("/",auth, bookController.addBook);
app.get("/",auth, bookController.getBooks);
app.put("/:id",auth, bookController.updateBook);
app.delete("/:id",auth, bookController.deleteBook);
app.get("/:id",auth, bookController.getBookById);



module.exports = app;

