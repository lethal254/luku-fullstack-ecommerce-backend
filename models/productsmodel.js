import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model("products", productsSchema);
