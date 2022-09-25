import cors from "cors";
import express from "express";
import { globalErrorHandler, routeNotFoundHandler } from "./middlewares/index";
import { attendeeRoute } from "./routes/attendees";
import { meetingRoute } from "./routes/meetings";
import { tutorRoute } from "./routes/tutors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/v1", (req, res) => {
  res.send("Kola and Kruse cooked this🧑🏾‍🍳");
});

app.use("/api/v1/meetings", meetingRoute);
app.use("/api/v1/tutors", tutorRoute);
app.use("/api/v1/attendees", attendeeRoute);

app.use(routeNotFoundHandler);
app.use(globalErrorHandler);
