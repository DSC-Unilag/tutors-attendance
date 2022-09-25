import joi from "joi";
import { parseJoiError } from "../utilities";

async function create(req, res, next) {
  const schema = joi.object().keys({
    name: joi.string().required(),
    startDate: joi.date().required(),
  });
  try {
    const safeBody = await schema.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    req.body = safeBody;
    next();
  } catch (err) {
    const errors = parseJoiError(err);
    res.status(422).json({ errors });
  }
}

export const meetingMiddleware = {
  create,
};
