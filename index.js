const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3001;
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/:outlet", (req, res) => {
  const outlet = req.params.outlet;
  const sqlPertama = `select * from outlet where NAMA_OUTLET != '${outlet}'`;
  db.query(sqlPertama, (error, result) => {
    response(200, result, "SUCCES", res);
  });
});

app.get("/pertama/:outlet", (req, res) => {
  const outlet = req.params.outlet;
  const sql = `SELECT * FROM outlet WHERE NAMA_OUTLET = '${outlet}'`;
  db.query(sql, (error, result) => {
    response(200, result, "SUCCES", res);
  });
});

app.get("/menu/:outlet", (req, res) => {
  const outlet = req.params.outlet;
  const sql = `SELECT * from outlet,memiliki,menu,kategori_menu WHERE memiliki.NAMA_OUTLET = '${outlet}' AND outlet.NAMA_OUTLET = memiliki.NAMA_OUTLET AND memiliki.NAMA_MENU = menu.NAMA_MENU and menu.NAMA_KATEGORI = kategori_menu.NAMA_KATEGORI ORDER BY kategori_menu.URUTAN ASC , menu.URUTAN ASC`;
  db.query(sql, (error, result) => {
    response(200, result, "SUCCES", res);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
