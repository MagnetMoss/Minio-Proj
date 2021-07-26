// Change these variables only
const databaseName = "movie_reviews_db";
const independentPW = "password"
console.log(`Connected to database: ${databaseName}`);

// Once those variables are changed, instantiate this connection via:
//      const dbconfig = require('./config/dbconfig');
//      const database = dbconfig.database;

module.exports = {
    database : {
        host: 'localhost',
        user: 'root',
        password: independentPW,
        database: databaseName
    }
};

// then add this line (uncommented) to your gitignore:
//      config/