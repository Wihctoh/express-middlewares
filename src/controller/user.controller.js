const express = require("express");
const router = express.Router();
const {
  getAllUser,
  deleteUser,
  getUserById,
  updateUser,
  patchUser,
} = require("../service/user.service");

router.get("/", (req, res) => {
  try {
    const data = getAllUser();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteUser(id);

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

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = patchUser(id, clientObj);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
