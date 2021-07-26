const express = require("express");
// ONLY USED TO JOIN WITH RELATIVE PATH - PROBABLY DONT NEED THIS?
const path = require("path");
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_reviews_db'
},
console.log(`Connected to the movie_reviews_db`));

app.get("/api/movies", (req, res) => {
  // GET all movies from the DB

});

app.post("/api/add-movie", (req, res) => {
  // POST request to add a movie to the Database

});

app.post("/api/update-review", (req, res) => {
  // POST request to update review
});

app.get("/api/movie/:id", (req, res) => {
  // GET movie BY ID

  // The ID of a movie in the databsea
  let selectedID = req.params

});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
