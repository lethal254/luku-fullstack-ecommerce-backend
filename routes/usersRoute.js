import express from "express";
import Users from "../models/usersmodel.js";

const router = new express.Router();

router.post("/signup", async (req, res) => {
  try {
    const user = new Users(req.body);
    if (!user) {
      res.status(400).send();
      return;
    }
    const token = await user.generateAuthToken();

    await user.save();
    res.send({ token, user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await Users.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    if (!user) {
      throw new Error("User not found");
    }
    res.send({ token, user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
