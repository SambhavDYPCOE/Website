import express from "express";
import {
  addPlayer,
  deleteAllPlayers,
  getAllPlayers,
  getPlayerById,
  deletePlayerById,
} from "../controllers/player.controller.js";

const playerRouter = express.Router();

playerRouter.route("/createPlayer").post(addPlayer);
playerRouter.route("/getPlayers").get(getAllPlayers);
playerRouter.route("/getPlayer/:id").get(getPlayerById);
playerRouter.route("/deletePlayer/:id").delete(deletePlayerById);
playerRouter.route("/deletePlayers").delete(deleteAllPlayers);

export default playerRouter;
