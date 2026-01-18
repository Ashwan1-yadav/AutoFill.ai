import express from "express";
import { mapForm} from "../controllers/map.controller.js";

const router = express.Router();

router.post("/", mapForm);

router.get("/", (_, res) => {
  res.send("Map route working");
});

export default router;
