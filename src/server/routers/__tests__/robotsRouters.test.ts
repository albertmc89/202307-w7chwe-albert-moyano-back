import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import app from "../..";
import { connectToDataBase } from "../../../database/connectToDataBase.js";
import Robot from "../../../database/models/Robot.js";
import { type RobotStructure } from "../../../types";
import { mockRobot1, mockRobot2, mockRobots } from "../../mocks/mockRobots.js";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectToDataBase(server.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

afterEach(async () => {
  await Robot.deleteMany();
});

describe("Given a GET '/robots' endpoint", () => {
  beforeEach(async () => {
    await Robot.create(mockRobot1);
    await Robot.create(mockRobot2);
  });

  describe("When it receives a request", () => {
    test("Then it should respond with status 200 and robots 'Chronodroid' and 'Quantabot'", async () => {
      const expectedStatusCode = 200;
      const path = "/robots";

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as { robots: RobotStructure[] };

      mockRobots.forEach(({ name }, robotPosisiton) => {
        expect(responseBody.robots[robotPosisiton]).toHaveProperty(
          "name",
          name
        );
      });
    });
  });
});
