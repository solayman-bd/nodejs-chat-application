const createHttpError = require("http-errors");

//404 not found
const notFoundHandler = (req, res, next) => {
  next(createHttpError(404, "Your requested content was not found!"));
};

//default error handler
const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 5000);

  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.send(res.locals.error);
  }
};
module.exports = {
  notFoundHandler,
  errorHandler,
};
