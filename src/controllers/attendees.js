import { Attendee, Meeting, Tutor } from "../models";
import { ApplicationError } from "../utilities";

async function create(req, res, next) {
  // get the user from the email ins req.body
  const tutor = await Tutor.findOne({ emailAddress: req.body.emailAddress });
  // if the user doensn't exist, throw error
  if (!tutor) {
    return next(new ApplicationError(404, "User not found"));
  }

  // find the meeting using the meeting id provid
  const meeting = await Meeting.findById(req.body.meetingId);

  // if meeting doesn't exist throw err
  if (!meeting) {
    return next(new ApplicationError(404, "Meeting not found"));
  }

  // if the meeting is closed, throw error
  if (meeting.endDate) {
    return next(
      new ApplicationError(
        409,
        "You can no longer mark attendance for this meeting"
      )
    );
  }

  try {
    const attendee = new Attendee({
      meeting,
      tutor,
      message: req.body.message,
    });
    await attendee.save();
    return res.json(attendee);
  } catch (err) {
    if (err.code === 11000) {
      return next(
        new ApplicationError(
          409,
          "You have already marked attendance for this meeting"
        )
      );
    }
    throw next(err);
  }
}

export const attendeeController = {
  create,
};
