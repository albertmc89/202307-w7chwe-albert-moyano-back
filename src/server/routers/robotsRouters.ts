import cors from "cors";
import express from "express";
import { getRobotsController } from "../controllers/robotsControllers.js";

const robotsRouter = express.Router();

const optionsGet = {
  origin: [
    "https://202307-w7chwe-albert-moyano-front.netlify.app/",
    "http://localhost:4007",
  ],
  methods: "GET",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

robotsRouter.get("/", cors(optionsGet), getRobotsController);

export default robotsRouter;
