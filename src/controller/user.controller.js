const express = require("express");
const { Service } = require("../service/user.service");
const { isValidUserId, isValidUserData } = require("../helper/validation");
const buildResponse = require("../helper/buildResponse");

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

        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.get("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const data = service.getUserById(id);

        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.post("/", isValidUserData, (req, res) => {
      try {
        const { name, surname, email, pwd } = req.body;
        const data = service.createUser(name, surname, email, pwd);

        buildResponse(res, 201, data);
      } catch (error) {
        buildResponse(res, 405, error.message);
      }
    });

    this.router.put("/:id", isValidUserId, isValidUserData, (req, res) => {
      try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = service.updateUser(id, name, surname, email, pwd);

        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.delete("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const data = service.deleteUser(id);

        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });

    this.router.patch("/:id", isValidUserId, (req, res) => {
      try {
        const { id } = req.params;
        const clientObj = req.body;
        const data = service.patchUser(id, clientObj);

        buildResponse(res, 200, data);
      } catch (error) {
        buildResponse(res, 404, error.message);
      }
    });
  }
}

module.exports = Controller;