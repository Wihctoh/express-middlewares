const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
} = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const data = getAllUser();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const data = getUserById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = createUser(name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;

    const data = updateUser(id, name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = { router };
