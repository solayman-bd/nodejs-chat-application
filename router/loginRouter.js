//external import
const express = require("express");
//internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const loginRouter = express.Router();

//login page

loginRouter.get("/", decorateHtmlResponse("Login"), getLogin);
module.exports = loginRouter;
