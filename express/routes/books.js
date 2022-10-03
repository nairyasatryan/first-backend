import express from "express";

import {
  addBook,
  getBooks,
 
  deleteBook,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);

export default router;
