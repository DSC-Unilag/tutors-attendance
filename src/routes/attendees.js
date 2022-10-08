import express from "express";
import { attendeeMiddleware } from "../middlewares";
import { attendeeController } from "../controllers";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const attendeeRoute = express.Router();

attendeeRoute.post("/", attendeeMiddleware.create, attendeeController.create);
