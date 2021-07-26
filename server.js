const express = require("express");
const mysql = require('mysql2');
// ONLY USED TO JOIN WITH RELATIVE PATH - PROBABLY DONT NEED THIS?
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_reviews_db'
},
console.log(`Connected to the movie_reviews_db`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/movies", (req, res) => {
  // GET all movies from the DB

});

app.post("/api/add-movie", (req, res) => {
  // POST request to add a movie to the Database
  const { movie_name } = req.body
  
  database.query('INSERT INTO movies (movie_name) VALUES (?);',[movie_name], (err,result,fields) => {
    if(err) console.log(err);
  });

  res.send(movie_name + 'has been added to the database.');

});

app.post("/api/update-review", (req, res) => {
  // POST request to update review
});

app.delete("/api/movie/:id", (req, res) => {
  // GET movie BY ID
  // The ID of a movie in the databse
  let selectedID = req.params.id;
  database.query('DELETE FROM movies WHERE id=?',[selectedID], (err, result, fields) => {
    if(err) console.log(err);
  });
  res.send('Movie Deleted');
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
