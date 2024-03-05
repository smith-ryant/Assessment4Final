// Importing necessary modules
const express = require("express");
const cors = require("cors");
const app = express();
// Using JSON middleware to parse incoming requests with JSON payloads
app.use(cors());
app.use(express.json());
// serving static files from the "static" directory
app.use(express.static(__dirname + "/static"));

const { getCompliment } = require("./controller");
app.get("/api/compliment", getCompliment);

const { getFortune } = require("./controller");
app.get("/api/fortune", getFortune);

// Real Estate Viewer
// Importing functions from the controller.js file
const {
  getHouses,
  createHouse,
  deleteHouse,
  updateHouse,
} = require("./controller.js");
// Defining route for the home page
app.get("/", (req, res) => {
  // Sending the "index.html" file as the response
  res.sendFile("static/index.html", { root: __dirname });
});
// Defining route to get all houses
app.get(`/api/houses`, getHouses);
//defining route to create a new house
app.post(`/api/houses`, createHouse);
// Defining route to update a house price by its ID
app.delete(`/api/houses/:id`, deleteHouse);
// Defining route to update a house price by its ID
app.put(`/api/houses/:id`, updateHouse);
// Running the server and listening of port 4000
app.listen(4000, () => console.log("Server running on 4000"));
