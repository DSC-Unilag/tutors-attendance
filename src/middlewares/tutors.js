import joi from "joi";
import { parseJoiError } from "../utilities";

async function create(req, res, next) {
  const schema = joi.object().keys({
    tutors: joi
      .array()
      .items(
        joi.object().keys({
          emailAddress: joi.string().email().required().lowercase(),
          name: joi.string().lowercase().required(),
        })
      )
      .min(1)
      .required(),
  });
  try {
    req.body = await schema.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    next();
  } catch (err) {
    const errors = parseJoiError(err);
    res.status(422).json({ errors });
  }
}

export const tutorMiddleware = {
  create,
};
