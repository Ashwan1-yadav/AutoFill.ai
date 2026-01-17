import express from "express";
import cors from "cors";
import { ENV } from "./config/llm.env.js";
import mapRoute from "./routes/map.route.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use("/map", mapRoute);

app.get("/", (_, res) => {
  res.send("AutoFill.ai backend running");
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});
