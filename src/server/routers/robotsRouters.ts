import cors from "cors";
import express from "express";
import { getRobotsController } from "../../controllers/robotsControllers.js";

const robotsRouter = express.Router();

const optionsGet = {
  origin: true,
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

robotsRouter.get("/", cors(optionsGet), getRobotsController);

export default robotsRouter;
