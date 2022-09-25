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
async function find(req, res) {
  const meetings = await Meeting.find();
  return res.json(meetings);
}

async function update(req, res, next) {
  // fetch the meeting
  const meeting = await Meeting.findById(req.params.id);

  // if meeting does not exist, error
  if (!meeting) {
    return next(404, "This meeting does not exist");
  }

  // if meeting exist, check it it has ended
  if (!meeting.endDate) {
    // if not ended, end it
    meeting.endDate = req.body.endDate;
    await meeting.save();
  }

  return res.send(meeting);
}

export const meetingController = {
  create,
  find,
  update,
};
