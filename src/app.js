import cors from "cors";
import express from "express";
import { globalErrorHandler, routeNotFoundHandler } from "./middlewares/index";
import { meetingRoute } from "./routes/meeting";
import { tutorRoute } from "./routes/tutor";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Kola and Kruse cooked this🧑🏾‍🍳");
});

app.use("/api/v1/meetings", meetingRoute);
app.use("/api/v1/tutors", tutorRoute);

app.use(routeNotFoundHandler);
app.use(globalErrorHandler);
