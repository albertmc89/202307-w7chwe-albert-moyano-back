import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError";

export const endPointNotFound = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new CustomError("Endpoint not found", 404, "Endpoint not found"));
};

export const generalErrorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const errorMessage = error.message ?? "General error";
  const statusCode = error.statusCode ?? 500;

  res.status(statusCode).json({ error: errorMessage });
};
