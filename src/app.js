import cors from "cors";
import express from "express";
import { globalErrorHandler, routeNotFoundHandler } from "./middlewares/index";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Kola and Kruse cooked this🧑🏾‍🍳");
});

app.use(routeNotFoundHandler);
app.use(globalErrorHandler);
