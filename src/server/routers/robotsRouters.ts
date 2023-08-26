import express from "express";
import { getRobotsController } from "../../controllers/robotsControllers.js";

const robotsRouter = express.Router();

robotsRouter.get("/", getRobotsController);

export default robotsRouter;
