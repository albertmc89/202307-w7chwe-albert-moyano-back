import express from "express";
import pingController from "../../controllers/ping/pingController.js";

const robotsRouter = express.Router();

robotsRouter.get("/", pingController);

export default robotsRouter;
