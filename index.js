import express from "express";
import cors from "cors";
import sliderRouter from "./routes/sliderroutes.js";
import productsRouter from "./routes/productsroutes.js";
import categoriesRouter from "./routes/categoriesroute.js";
import usersRouter from "./routes/usersRoute.js";
import "./db.js";

//Configure app
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());
app.use(sliderRouter);
app.use(productsRouter);
app.use(categoriesRouter);
app.use(usersRouter);

// listener
app.listen(PORT, console.log(`App is running on port ${PORT}`));
