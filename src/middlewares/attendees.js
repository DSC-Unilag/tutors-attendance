import joi from "joi";
import joiObjectId from "joi-objectid";
import { parseJoiError } from "../utilities";

joi.objectId = joiObjectId(joi);

/**
 * middleware for validating payload for marking attendance
 * @param {*} req
 * @param {*} res
 */
async function create(req, res, next) {
  const schema = joi.object().keys({
    emailAddress: joi.string().email().required(),
    meetingId: joi.objectId().required(),
    message: joi.string(),
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

export const attendeeMiddleware = {
  create,
};
