import mongoose from "mongoose";
import { Schema } from "mongoose";

const EventModel = new Schema(
  {
    poster: {
      type: Buffer,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortHeading: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prizes: [
      {
        type: String,
      },
    ],
    rules: [
      {
        type: String,
      },
    ],
    team: {
      type: String,
    },
    fees: {
      type: String,
    },
    contactPerson: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    player: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventModel);

export default Event;
