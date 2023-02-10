import express from "express";
import {
  addContact,
  deleteAllContacts,
  getAllContacts,
} from "../controllers/contact.controller.js";

const contactRouter = express.Router();

contactRouter.route("/create").post(addContact);
contactRouter.route("/get").get(getAllContacts);
contactRouter.route("/delete").delete(deleteAllContacts);

export default contactRouter;
