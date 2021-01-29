import mongoose from "mongoose";

export default mongoose.connect(
  "mongodb://127.0.0.1:27017/luku",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connection established");
  }
);
