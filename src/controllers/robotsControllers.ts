import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError/CustomError";
import Robot from "../database/models/Robot";

export const getRobotsController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find().exec();

    res.status(200).json({ robots });
  } catch (error: unknown) {
    const customError = new CustomError(
      "Internal server Error",
      500,
      (error as Error).message
    );

    next(customError);
  }
};
