import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize Express
const app = express();

// connect db
await connectDB();

//MiddleWaress
app.use(cors());

//Routes
app.get("/", (req, res) => res.send("API WORKING"));
app.post("/clerk", express.json(), clerkWebhooks);

//port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//
