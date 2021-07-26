const expri = require("express");
const routes = require("path");
const db = require(`./db/db.json`);
const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/send.html"))
);

app.get("/paths", (req, res) =>
  res.sendFile(path.join(__dirname, "public/paths.html"))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
