import express from "express";
import {
  addEvent,
  deleteAllEvents,
  getAllEvents,
  getEventById,
  deleteEventById,
} from "../controllers/event.controller.js";

const eventRouter = express.Router();

eventRouter.route("/createEvent").post(addEvent);
eventRouter.route("/getEvents").get(getAllEvents);
eventRouter.route("/getEvent/:id").get(getEventById);
eventRouter.route("/deleteEvent/:id").delete(deleteEventById);
eventRouter.route("/deleteEvents").delete(deleteAllEvents);

export default eventRouter;
