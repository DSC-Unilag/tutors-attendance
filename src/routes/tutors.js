import express from "express";
import { tutorController } from "../controllers/tutors";
import { tutorMiddleware } from "../middlewares";

export const tutorRoute = express.Router();

tutorRoute.post("/", tutorMiddleware.create, tutorController.create);
