//external import
const express = require("express");

//internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const inboxRouter = express.Router();

//login page

inboxRouter.get("/", decorateHtmlResponse("Inbox"), getInbox);
module.exports = inboxRouter;
