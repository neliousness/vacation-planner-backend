import * as Hapi from "@hapi/hapi";
import { loadRoutes } from "./router.js";
import * as dotenv from "dotenv";
import llmPlugin from "../plugins/llm-plugin.js";
const port = process.env.PORT || 8080;
const server = Hapi.server({
  port,
  routes: {
    cors: true,
  },
});

export default async function setup() {
  const env = process.env.NODE_ENV || "dev";
  try {
    dotenv.config({
      path: `${process.cwd()}/${env}.env`,
    });

    server.events.on("log", (event, tag) => {
      console.log(event);
    });

    await server.register([llmPlugin]);

    await loadRoutes(server);

    await server.start();

    server.log("info", `Server running http://localhost:${port}`);
  } catch (error) {
    console.error(`Error starting server: ${error}`);
    throw error;
  }
}

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection", err);
  process.exit(1);
});
