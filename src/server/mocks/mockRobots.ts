import mongoose from "mongoose";
import { type RobotStructure } from "../../types";

export const mockRobots: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "Chronodroid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg",
    speed: 9,
    endurance: 7,
  },
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "QuantaBot",
    image:
      "https://w7.pngwing.com/pngs/847/520/png-transparent-robot-action-toy-figures-character-action-fiction-robot-electronics-fictional-character-action-film.png",
    speed: 6,
    endurance: 4,
  },
];

export const mockRobot1: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "Chronodroid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg",
    speed: 9,
    endurance: 7,
  },
];

export const mockRobot2: RobotStructure[] = [
  {
    id: new mongoose.Types.ObjectId().toString(),
    name: "QuantaBot",
    image:
      "https://w7.pngwing.com/pngs/847/520/png-transparent-robot-action-toy-figures-character-action-fiction-robot-electronics-fictional-character-action-film.png",
    speed: 6,
    endurance: 4,
  },
];
