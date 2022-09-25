import { Meeting } from "../models";

/**
 * helper method for creating meetings
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function create(req, res) {
  const meeting = new Meeting(req.body);
  await meeting.save();

  return res.json(meeting);
}

/**
 * helper method for listing all meetings
 * @param {*} res
 * @param {*} res
 */
async function findAll(req, res) {
  const meetings = await Meeting.findAll();
  return res.json(meetings);
}

export const meetingController = {
  create,
  findAll,
};
