const express = require("express");
const mysql = require('mysql2');
// ONLY USED TO JOIN WITH RELATIVE PATH - PROBABLY DONT NEED THIS?
const path = require("path");

// Separate DB Config file
const dbconfig = require('./config/dbconfig');
const database = mysql.createConnection(dbconfig.database);

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/movies", (req, res) => {
  // GET all movies from the DB
  database.query('SELECT * FROM movies',(err,results,fields) => {
    if(err) console.log(err);
    res.send(results);
  });
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
  const { movie_id, review } = req.body;

  if (req.body && movie_id && review && typeof review === 'string' ) {
    // POST DEBUGGER
    console.log(`${req.method} request: Attempting to update review ID = "${movie_id}"`);

    // UPDATE reviews SET review = "${review}" WHERE id = ${movie_id}

    database.query(`UPDATE reviews SET review = ? WHERE id = ?`,[review, movie_id] , (err, results) => {
      if(err){
        console.log(err);
        res.send(err);
      }
      else {
        console.log( results );
        res.send(`Update successful!`);
      }
    });
  } else {
    res.send('Error updating review: parameters set incorrectly');
  }

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
