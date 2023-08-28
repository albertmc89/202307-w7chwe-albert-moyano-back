import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError.js";
import Robot from "../../../database/models/Robot.js";
import { mockRobots } from "../../mocks/mockRobots.js";
import { getRobotsController } from "../robotsControllers.js";

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

Robot.find = jest.fn().mockReturnValue({
  exec: jest.fn().mockResolvedValue(mockRobots),
});

const next: NextFunction = jest.fn();

describe("Given a getRobotsController controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its status with 200", async () => {
      const expectedStatusCode = 200;

      await getRobotsController(req as Request, res as Response, next);

      expect(res.status).toBeCalledWith(expectedStatusCode);
    });

    test("Then the method json should be called with a robot 'Chronodroid' and 'QuantaBot'", async () => {
      await getRobotsController(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobots });
    });
  });

  describe("When it receives an error", () => {
    test("Then it should call the next function with an error status 500 'Internal server error'", async () => {
      const error = new CustomError(
        "Internal server Error",
        500,
        "Internal server Error"
      );

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(error),
      });

      await getRobotsController(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
