import express from "express";
import {
  createExample,
  getExamples,
} from "../../controllers/exampleController.ts";
const router = express.Router();

// TODO: Add middlewares
// router.use(someMiddleware);

// TODO: Add controllers
router.get("/", getExamples);

router.post("/", createExample);

export default router;
