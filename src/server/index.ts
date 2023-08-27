import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import pingController from "../controllers/ping/pingController.js";
import { endPointNotFound, generalErrorHandler } from "./middlewares/errors.js";
import robotsRouter from "./routers/robotsRouters.js";

const app = express();

const options = {
  origin: true,
  methods: "GET,POST",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(morgan("dev"));

app.use(cors(options));

app.use("/robots", robotsRouter);

app.use("/", pingController);

app.use(endPointNotFound);
app.use(generalErrorHandler);

export default app;
