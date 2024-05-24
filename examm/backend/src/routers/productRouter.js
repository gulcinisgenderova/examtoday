import express from "express";
import {
  createProd,
  deleteProd,
  getAllProd,
  getProdId,
  updatePost,
} from "../controllers/productController.js";

export const productrouter = express.Router();

productrouter.get("/", getAllProd);

productrouter.get("/", getProdId);

productrouter.post("/", createProd);

productrouter.put("/user", updatePost);

productrouter.delete("/user", deleteProd);
