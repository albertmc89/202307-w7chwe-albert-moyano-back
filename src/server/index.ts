import express from "express";
import morgan from "morgan";
import pingController from "../controllers/ping/pingController.js";
import { endPointNotFound, generalErrorHandler } from "./middlewares/errors.js";

const app = express();

app.use(morgan("dev"));

app.use("/", pingController);

app.use(endPointNotFound);
app.use(generalErrorHandler);

export default app;
