import debug from "debug";
import "dotenv/config";
import { connectToDataBase } from "./database/connectToDataBase.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGO_URL;

startServer(+port);

try {
  await connectToDataBase(mongoDbUrl!);

  debug("Connected to database");
} catch (error) {
  debug("Error connecting to database");
  debug((error as Error).message);

  process.exit(1);
}
