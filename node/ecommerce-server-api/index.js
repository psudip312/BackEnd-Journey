const express = require("express");
const Product = require("./model/Product");
const app = express();

require("./config/database");

app.get("/", () => {
  console.log("Hello World");
});

// steps
// 1. express tanne

// 2 database connect garne

// 3 schema banaune kina? cause aba euta db cha lets say /* db:ecommmerce-server

// products vanne table ma {name:"shirt "}
// {title:"pant"}
// aba font end user lai garo huncha name line ki title line vanera.. so sabbai eutai banauna ko lagi schema banaune
// */

// 1step to make api is you need exxpress
// why cause it provide such stuffs

// now api banauna ko lagi express le certain function haru dincha like app ()
// here tala get vanne fucntion ma agadi ko parameter le path lincha ra second parameter ma req ra res automatically nai aaucha

app.get("/api/products", (req, res) => {
  res.send(["fuck yourself son of a bitch"]);
});

// product create garne api

app.post("/api/products", (req, res) => {
  Product.create({ title: "shirt" });
  res.send("product created");
});

app.listen(3000, () => {
  console.log("server started");
});
