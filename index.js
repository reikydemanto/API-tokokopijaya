const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3001;
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("select * from mahasiswa", (error, result) => {
    response(200, result, "SUCCES", res);
  });
});
app.post("/", (req, res) => {
  response(200, "ini data", "ini pesan post", res);
});
app.put("/", (req, res) => {
  response(200, "ini data", "ini pesan put", res);
});
app.delete("/", (req, res) => {
  response(200, "ini data", "ini pesan delete", res);
});

app.get("/", (req, res) => {
  const sql = "Select * From Mahasiswa";
  db.query(sql, (error, result) => {
    response(200, result, "get data from mahasiswa", res);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
