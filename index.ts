// Load environment variables from .env files based on the current environment
import cors from "cors";
import "dotenv-flow/config";
import express, { Request, Response } from "express";
import morgan from "morgan";
import router from "./routes/index.ts";

const app = express();

// MIDDLEWARES

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Conditionally apply morgan for logging in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", router);
// Route handler for the root URL
app.get("/", (req: Request, res: Response) => {
  res.send(
    '<h1> Made with ❤️ by <a href="https://github.com/MettaSurendhar/">Metta Surendhar</a> </h1>'
  );
});

// Define the port for the server to listen on, defaulting to 5000
const port = process.env.PORT || 5000;

// Start the server and log a message when it's running
app.listen(port, async () => {
  console.log(`✅ Server listening on port ${port}`);
});
