import express from "express";
import Slider from "../models/slidermodel.js";

const router = new express.Router();

router.post("/addslide", async (req, res) => {
  try {
    const slider = new Slider(req.body);
    await slider.save();
    res.send();
  } catch (error) {
    res.status(400).send();
  }
});
router.get("/slides", async (req, res) => {
  const slides = await Slider.find({});
  try {
    if (!slides) {
      return new Error("No slides to dsiplay");
    }
    res.send(slides);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
