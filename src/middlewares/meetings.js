import joi from "joi";
import joiObjectId from "joi-objectid";
import { parseJoiError } from "../utilities";

joi.objectId = joiObjectId(joi);

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

export async function update(req, res, next) {
  const paramsSchema = joi.object().keys({
    id: joi.objectId().required(),
  });
  const bodySchema = joi.object().keys({
    endDate: joi.date().optional().default(new Date()),
    password: joi.string().required(),
  });
  try {
    req.body = await bodySchema.validateAsync(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    req.params = await paramsSchema.validateAsync(req.params, {
      abortEarly: false,
      stripUnknown: true,
    });

    next();
  } catch (err) {
    const errors = parseJoiError(err);
    res.status(422).json({ errors });
  }
}

export const meetingMiddleware = {
  create,
  update,
};
