import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});
export default mongoose.model("Categories", categoriesSchema);
