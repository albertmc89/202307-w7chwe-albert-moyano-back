import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError.js";
import { generalErrorHandler } from "../errors";

const next: NextFunction = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a generalErrorHandler middleware", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a response", () => {
    const customError = new CustomError(
      "Robots not found",
      404,
      "Robots not found"
    );

    test("Then it should call its method status with code 404", () => {
      const expectedStatusCode = 404;

      generalErrorHandler(customError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should respond method json with the error 'Robots not found'", () => {
      const expectedMessage = { error: "Robots not found" };

      generalErrorHandler(customError, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });

    test("Then it should call its method status with code 500", () => {
      const expectedStatusCode = 500;
      const expectedError = new Error();

      generalErrorHandler(
        expectedError as CustomError,
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
