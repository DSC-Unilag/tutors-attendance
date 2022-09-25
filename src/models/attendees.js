import mongoose from "mongoose";

const attendeesSchema = new mongoose.Schema({
  tutor: {
    type: mongoose.Schema.ObjectId,
    require: true,
    ref: "tutors",
  },
  meeting: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "meetings",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

attendeesSchema.index({ tutor: 1, meeting: 1 }, { unique: true });

export const Attendee = mongoose.model("attendees", attendeesSchema);
