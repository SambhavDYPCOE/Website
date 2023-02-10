import Event from "../models/event.model.js";

const addEvent = async (req, res) => {
  const {
    title,
    shortHeading,
    eventType,
    description,
    team,
    prizes,
    rules,
    contactPerson,
    contactNumber,
    fees,
  } = req.body;
  if (
    !title ||
    !shortHeading ||
    !eventType ||
    !description ||
    !team ||
    !prizes ||
    !rules ||
    !contactPerson ||
    !contactNumber ||
    fees < 1
  ) {
    res.status(400).json({ message: "Please Provide valid details" });
    // throw new Error("Please provide valid details");
  }
  const imageBuffer = req.files?.[0]?.buffer ? req.files?.[0]?.buffer : null;

  const event = new Event({
    title,
    shortHeading,
    eventType,
    description,
    team,
    prizes,
    rules,
    contactPerson,
    contactNumber,
    fees,
    image: imageBuffer,
  });
  await event.save();

  res.status(201).json({ event, message: "Event created successfully" });
};

const getAllEvents = async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  const finalEvents = events.map((event) => {
    if (event.image) {
      let buffer = Buffer.from(event.image);
      let base64Image = buffer.toString("base64");

      const {
        _id,
        title,
        shortHeading,
        eventType,
        description,
        team,
        prizes,
        rules,
        contactPerson,
        contactNumber,
        fees,
      } = event;

      return {
        image: base64Image,
        _id,
        title,
        shortHeading,
        eventType,
        description,
        team,
        prizes,
        rules,
        contactPerson,
        contactNumber,
        fees,
      };
    } else {
      return event;
    }
  });
  res
    .status(201)
    .json({ events: finalEvents, message: "Fetched Events Successfully" });
};

const getEventById = async (req, res) => {
  const _id = req.params.id;
  const event = await Event.find({ _id }).populate("player").exec();
  res.status(200).json({ event, message: "Fetched Event Successfully" });
};

const deleteEventById = async (req, res) => {
  const _id = req.params.id;
  await Event.deleteOne({ _id });
  res.status(200).json({ message: "Event Deleted Successfully" });
};

const deleteAllEvents = async (req, res) => {
  await Event.deleteMany();
  res.status(200).json({ message: "Events Deleted Successfully" });
};

export {
  addEvent,
  getAllEvents,
  getEventById,
  deleteEventById,
  deleteAllEvents,
};
