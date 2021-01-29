import express from "express";
import Products from "../models/productsmodel.js";

const router = new express.Router();

router.post("/product", async (req, res) => {
  const product = new Products(req.body);
  try {
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/products", async (req, res) => {
  const match = {};
  if (req.query.category) {
    match.category = req.query.category;
  }

  const products = await Products.find(match);
  try {
    if (!products.length === 0) {
      throw new Error({ error: "Product(s) not found" });
      return;
    }
    res.send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
