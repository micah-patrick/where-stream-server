if (process.env.USER || process.env.USERNAME) require("dotenv").config();
const express = require("express");
const cors = require("cors");


const sourcesRouter = require("./sources/sources.router");
const showsRouter = require("./shows/shows.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/sources", sourcesRouter);
app.use("/shows", showsRouter);





// Not found handler
app.use((request, _response, next) => {
    next({ status: 404, message: `Not found: ${request.originalUrl}` });
  });
  
  // Error handler
  app.use((error, _request, response, _next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    response.status(status).json({ error: message });
  });

module.exports = app;
