import express from "express";
import morgan from "morgan";
import pingController from "../controllers/ping/pingController";
import { endPointNotFound, generalErrorHandler } from "./middlewares/error";

const app = express();

app.use(morgan("dev"));

app.use("/", pingController);

app.use(endPointNotFound);
app.use(generalErrorHandler);

export default app;
