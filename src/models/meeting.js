import mongoose from "mongoose";

/**
 * schema declarations for a meeting
 */
const meetingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export const Meeting = mongoose.model("meetings", meetingSchema);
