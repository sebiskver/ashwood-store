import express from "express";
import { Category, validate } from "../models/category";
import auth from "../middleware/auth";
import admin from "../middleware/admin";

const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find().select("name");
  res.status(200).send(categories);
});

router.post("/", auth, admin, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = new Category({ name: req.body.name });
  await category.save();

  res.status(200).send(category);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const category = await Category.findByIdAndRemove({ _id: req.params.id });

  res.status(200).send(category);
});

export default router;
