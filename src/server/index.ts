import express from "express";
import pingController from "../controllers/ping/pingController";

const app = express();

app.use("/", pingController);

export default app;
