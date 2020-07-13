"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { handleJoke } = require("./handlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set("view engine", "ejs")

  // endpoints
  .get("/joke/:type/", async (req, res) => {
    const type = req.params.type;
    const types = ["dad", "tronald","geek"]
    try {
      if (types.includes(type)) {
        res.status(200).json({
          status: 200,
          joke: await handleJoke(type)
        });
      } else {
        throw {
          status: 404,
          joke: 'Unrecognized type of joke'
        }
      }

    } catch(err) {
      res.status(404).json(err);
    }

  })

  .listen(8000, () => console.log(`Listening on port 8000`));
