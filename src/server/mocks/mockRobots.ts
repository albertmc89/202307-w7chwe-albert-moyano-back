import mongoose from "mongoose";
import { type RobotStructure } from "../../types";

export const mockRobots: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "Chronodroid",
    image:
      "https://img.freepik.com/premium-photo/character-design-little-robot-isolated-background-created-with-generative-ai-technology_67092-2464.jpg",
    speed: 9,
    endurance: 7,
  },
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "QuantaBot",
    image:
      "https://as1.ftcdn.net/v2/jpg/05/65/51/00/1000_F_565510061_UvmZhOGicRUkxNW0v9K2t81XInzJPiPm.jpg",
    speed: 6,
    endurance: 4,
  },
];

export const mockRobot1: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "Chronodroid",
    image:
      "https://img.freepik.com/premium-photo/character-design-little-robot-isolated-background-created-with-generative-ai-technology_67092-2464.jpg",
    speed: 9,
    endurance: 7,
  },
];

export const mockRobot2: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "QuantaBot",
    image:
      "https://as1.ftcdn.net/v2/jpg/05/65/51/00/1000_F_565510061_UvmZhOGicRUkxNW0v9K2t81XInzJPiPm.jpg",
    speed: 6,
    endurance: 4,
  },
];

export const robotCreatedMock: Omit<RobotStructure, "id"> = {
  name: "Challensito",
  image:
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/3D-Lizard-Robot-Background.jpg",
  speed: 10,
  endurance: 5,
};
