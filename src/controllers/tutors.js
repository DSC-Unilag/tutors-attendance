import { Tutor } from "../models";

async function create(req, res, next) {
  let tutors = await Tutor.find();
  tutors = new Set(tutors.map((t) => t.emailAddress));

  let incomingTutors = [];

  for (const incomingTutor of req.body.tutors) {
    if (tutors.has(incomingTutor.emailAddress)) continue;
    incomingTutors.push(incomingTutor);
  }

  try {
    incomingTutors = await Tutor.insertMany(incomingTutors);
    return res.json(incomingTutors);
  } catch (err) {
    return next(err);
  }
}
export const tutorController = {
  create,
};
