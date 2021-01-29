import express from "express";
import Categories from "../models/categoriesmodel.js";

const router = new express.Router();

router.post("/category", async (req, res) => {
  const category = new Categories(req.body);
  try {
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/categories", async (req, res) => {
  const categories = await Categories.find({});
  try {
    if (!categories.length === 0) {
      throw new Error({ error: "Category(s) not found" });
      return;
    }
    res.send(categories);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/categories/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const validUpdates = ["value", "image"];
  const isValidUpdates = updates.every((update) => {
    return validUpdates.includes(update);
  });
  if (!isValidUpdates) {
    res.status(404).send({ error: "Invalid updates" });
    return;
  }
  try {
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(category);
    if (!category) {
      return res.status(400).send();
    }
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
