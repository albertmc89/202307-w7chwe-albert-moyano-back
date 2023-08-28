import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import Robot from "../../../database/models/Robot";
import { type RobotStructure } from "../../../types";
import { robotCreatedMock } from "../../mocks/mockRobots";
import { addRobot } from "../robotsControllers";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given an addRobot controller", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a new Robot, a response and a next function", () => {
    Robot.create = jest.fn().mockResolvedValue(robotCreatedMock);

    test("Then it should repond with status 201", async () => {
      const expectedStatus = 201;

      await addRobot(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });

  test("Then it should respond with the new Robot created", async () => {
    await addRobot(
      req as Request<
        Record<string, unknown>,
        Record<string, unknown>,
        RobotStructure
      >,
      res as Response,
      next
    );

    expect(res.json).toHaveBeenCalledWith({ robot: robotCreatedMock });
  });

  describe("When it receives a request with not the correct form robot, aand a response and a next function", () => {
    test("Then it should respond with an error", async () => {
      const error = new Error("error");
      const customError = new CustomError(
        "Could not create the robot",
        404,
        error.message
      );

      Robot.create = jest.fn().mockRejectedValue(error);

      await addRobot(
        req as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        res as Response,
        next
      );

      expect(next).toHaveBeenCalledWith(customError);
    });
  });
});
