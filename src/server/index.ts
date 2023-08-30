import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import pingController from "./controllers/ping/pingController.js";
import auth from "./middlewares/auth.js";
import { endPointNotFound, generalErrorHandler } from "./middlewares/errors.js";
import robotsRouter from "./routers/robotsRouters.js";

const app = express();

const corsOptions = {
  origin: [
    process.env.ALLOW_PROD_ORIGIN_HOME!,
    process.env.ALLOW_PROD_ORIGIN_CREATE!,
    process.env.ALLOW_LOCAL_ORIGIN_HOME!,
    process.env.ALLOW_LOCAL_ORIGIN_CREATE!,
  ],
  methods: "GET,POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(morgan("dev"));
app.use(express.json());

app.use(cors(corsOptions));

app.get("/", pingController);

app.use("/robots", auth, robotsRouter);
app.use("/robots", robotsRouter);

app.use(endPointNotFound);
app.use(generalErrorHandler);

export default app;
