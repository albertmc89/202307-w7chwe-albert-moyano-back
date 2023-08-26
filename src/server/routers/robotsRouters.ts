import cors from "cors";
import express from "express";
import { getRobotsController } from "../../controllers/robotsControllers.js";

const robotsRouter = express.Router();

const options = {
  origin: true,
  methods: "GET,POST",
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
};

robotsRouter.get("/", cors(options), getRobotsController);

export default robotsRouter;
