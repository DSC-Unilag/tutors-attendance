import express from "express";
import { meetingController } from "../controllers";
import { meetingMiddleware } from "../middlewares";

export const meetingRoute = express.Router();

meetingRoute
  .post("/", meetingMiddleware.create, meetingController.create)
  .get("/", meetingController.find);

meetingRoute.put("/:id", meetingMiddleware.update, meetingController.update);
