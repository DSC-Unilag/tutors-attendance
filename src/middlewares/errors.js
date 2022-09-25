/* eslint-disable no-unused-vars */

import { ApplicationError } from "../utilities";

export function routeNotFoundHandler(req, res, next) {
  return next(
    new ApplicationError(404, `Baba this route ${req.path} no dey this app 💀`),
  );
}

export function globalErrorHandler(err, req, res, next) {
  if (err instanceof ApplicationError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res
    .status(500)
    .send("Whoops, our server don ment on this one. No vex boss");
}
