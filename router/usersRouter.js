//external import
const express = require("express");

//internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const usersRouter = express.Router();

//login page

usersRouter.get("/", decorateHtmlResponse("Users"), getUsers);
module.exports = usersRouter;
