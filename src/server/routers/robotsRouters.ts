import cors from "cors";
import express from "express";
import {
  addRobot,
  getRobotsController,
} from "../controllers/robotsControllers.js";

const robotsRouter = express.Router();

const optionsGet = {
  origin: [
    process.env.ALLOW_PROD_ORIGIN_HOME!,
    process.env.ALLOW_PROD_ORIGIN_CREATE!,
    process.env.ALLOW_LOCAL_ORIGIN_HOME!,
    process.env.ALLOW_LOCAL_ORIGIN_CREATE!,
  ],
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const optionsPost = {
  origin: [
    process.env.ALLOW_PROD_ORIGIN_HOME!,
    process.env.ALLOW_PROD_ORIGIN_CREATE!,
    process.env.ALLOW_LOCAL_ORIGIN_HOME!,
    process.env.ALLOW_LOCAL_ORIGIN_CREATE!,
  ],
  methods: "POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

robotsRouter.get("/", cors(optionsGet), getRobotsController);

robotsRouter.post("/create", cors(optionsPost), addRobot);

export default robotsRouter;
