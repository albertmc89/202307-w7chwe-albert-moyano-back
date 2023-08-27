import debug from "debug";
import "dotenv/config";
import { connectToDataBase } from "./database/connectToDataBase.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4009;
const mongoDbUrl = process.env.MONGO_URL;

try {
  await connectToDataBase(mongoDbUrl!);

  startServer(+port);

  debug("Connected to database");
} catch (error) {
  debug("Error connecting to database");
  debug((error as Error).message);

  process.exit(1);
}
