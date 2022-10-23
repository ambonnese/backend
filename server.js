const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  database: "nelayan",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database is connected..");

  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    const users = JSON.parse(JSON.stringify(result));
    console.log("hasil database -> ", users);
    app.get("/users", (req, res) => {
      res.send(users);
    });
  });
});

// app.get("/", (req, res) => {
//     req.send("Route is open for your request...")
// })

app.listen(8000, () => {
  console.log("Server is running on port 8000 ...");
});
