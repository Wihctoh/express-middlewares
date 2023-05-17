const express = require("express");
const { Service } = require("../service/user.service");
const { isValidUserId, isValidUserData } = require("../helper/validation");

const service = new Service();

class Controller {
  constructor() {
    this.router = express.Router();
    this.initRoute();
  }

  initRoute() {
    this.router.get("/", (req, res) => {
      try {
        const data = service.getAllUser();

        res.status(200).send(data);
      } catch (error) {
        res.status(404).send(error.message);
      }
    });

    this.router.delete("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const data = service.deleteUser(id);

        res.status(200).send(data);
      } catch (error) {
        res.status(404).send(error.message);
      }
    });

    this.router.get("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const data = service.getUserById(id);

        res.status(200).send(data);
      } catch (error) {
        res.status(404).send(error.message);
      }
    });

    this.router.put("/:id", isValidUserId, isValidUserData, (req, res) => {
      try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = service.updateUser(id, name, surname, email, pwd);

        res.status(200).send(data);
      } catch (error) {
        res.status(404).send(error.message);
      }
    });

    this.router.patch("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const clientObj = req.body;
        const data = service.patchUser(id, clientObj);

        res.status(200).send(data);
      } catch (error) {
        res.status(404).send(error.message);
      }
    });
  }
}

module.exports = Controller;
