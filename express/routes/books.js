import express from "express";

import {
  addBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.get("/:id", getBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);

export default router;
