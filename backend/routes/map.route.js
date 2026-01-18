import express from "express";
import multer from "multer";
import "dotenv/config";
import { mapForm } from "../controllers/map.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/process", upload.single("image"), mapForm);

router.get("/", (_, res) => {
  res.send("Map route working");
});

export default router;
