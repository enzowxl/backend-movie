import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import { router } from "./routes";

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Server error",
  });
});

server.listen(3000, () => {
  console.clear();

  console.log("\x1b[32m", "[SERVER]: Started", "\x1b[0m");
});
