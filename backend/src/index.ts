import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import connectDB from "./db/mongo-connect";
import authenticate from "./middleware/authenticate";
import authorize from "./middleware/authorize";
import logger from "./middleware/logger";
import passportConfig from "./middleware/passport-config";
import authRouter from "./routes/auth-router";
import usersRouter from "./routes/users-router";
import clientsRouter from "./routes/clients-router";
import Right from "./types/Right";
import epxertRouter from "./routes/expert-router";

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(passportConfig.initialize());

app.use("/api/auth", authRouter);

app.use(authenticate);
app.use("/api/users", authorize([Right.ADMIN]), usersRouter);
app.use("/api/clients", authorize([Right.CLIENT]), clientsRouter);
app.use("/api/backoffice", authorize([Right.EXPERT]), epxertRouter);

app.on("error", (error) => {
  console.error(error);
});

app.use((err: Error, req: Request, res: Response, next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running at: http://localhost:${PORT}`);
});
