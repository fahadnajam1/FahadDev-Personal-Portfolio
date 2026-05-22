import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Database Connection Placeholder (No actual DB running required for tests until runtime)
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error: ", err);
    // Even if mongo fails, we might still want to listen for debugging
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (Mongo Failed)`);
    });
  });
