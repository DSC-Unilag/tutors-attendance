import express from "express";
import { attendeeMiddleware } from "../middlewares";
import { attendeeController } from "../controllers";

export const attendeeRoute = express.Router();

attendeeRoute.post("/", attendeeMiddleware.create, attendeeController.create);
