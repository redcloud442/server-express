// Importing the Express module
import express, { Request, Response } from "express";
import v1 from "./v1/index.ts";
// Initializing the main router
const router = express.Router();

/**
 * @desc   Root route of the API
 * @route  GET /
 * @access Public
 * @returns A JSON message confirming that the API route was hit
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "You hit the API route",
  });
});

/**
 * @desc   Version 1 API routes
 * @route  /v1
 * @access Public
 * @remarks Additional versions like /v2 can be added as needed
 */
router.use("/v1", v1);

export default router;
