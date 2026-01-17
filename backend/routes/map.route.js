import express from "express";
import { mapForm} from "../controllers/map.controller.js";

const router = express.Router();

router.post("/", mapForm);

export default router;
