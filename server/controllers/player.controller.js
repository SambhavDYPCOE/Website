import Player from "../models/player.model.js";

const addPlayer = async (req, res) => {
  const { name, email, phoneNo } = req.body;
  if (!name || !email || phoneNo < 1) {
    res.status(400).json({ message: "Please Provide valid details" });
    throw new Error("Please provide valid details");
  }

  const player = new Player({
    name,
    email,
    phoneNo,
  });
  await player.save();

  res.status(201).json({ player, message: "Player created successfully" });
};
const getAllPlayers = async (req, res) => {
  const players = await Player.find();
  res.status(200).json({ players, message: "Fetched Successfully" });
};
const getPlayerById = async (req, res) => {
    const _id = req.params.id;
    const player = await Player.find({ _id });
    res.status(200).json({ player, message: "Fetched Player Successfully" });
  };
  
  const deletePlayerById = async (req, res) => {
    const _id = req.params.id;
    await Player.deleteOne({ _id });
    res.status(200).json({ message: "Player Deleted Successfully" });
  };
const deleteAllPlayers = async (req, res) => {
  await Player.deleteMany();
  res.status(200).json({ message: "Player Deleted Successfully" });
};

export {
  addPlayer,
  getAllPlayers,
  deleteAllPlayers,
  getPlayerById,
  deletePlayerById,
};
