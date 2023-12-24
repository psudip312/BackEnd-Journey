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

// 3 schema banaune kina? cause aba euta db cha lets say /* db:ecnommmerce-server

// products vanne table ma {name:"shirt "}
// {title:"pant"}
// aba font end user lai garo huncha name line ki title line vanera.. so sabbai eutai banauna ko lagi schema banaune
// 4 aba product .create le chai database ma data halna lai help garcha
// aba data ta pass vayo tara sabbai data static matra vayo pathairakhnu parayo so esle dynamic para le patahunu paryo i mean uta front end devellper le body bata patahko data haru eta catch garera patahunu paryo ra esko lagi chai global middleware use garnu parcha which is app.use(express.json())
// then aba products ko get garnu lai app.get("/api/products", (req, res) => {
//   let products = Product.find();
//   console.log(products);
//   res.send(products);
// });
// eti part use huncha tara data aaunu process ta database ma hit hanera pharkaunu honi esko matalb k vane time lagne kura honi so that means async await vayo so mathi ko part suru  ma chaldaina only hamle tesma async await use garyo vane chai chalcha
// app.get("/api/products", async function (req, res) {
//   let products = await Product.find();
//   // mathi ko part samma ma data aaucha ani matra tala jancha
//   console.log(products);
//   res.send(products);
// });
// also most imprtant part is that tala hamle dherai api banairako huncah lets say get ko api esto cha
// app.get("/api/products", async function (req, res) {
//   let products = await Product.find();
//   // mathi ko part samma ma data aaucha ani matra tala jancha
//   console.log(products);
//   res.send(products);
// });
// ani kahele kai human eroor huncah lets say mathi Productt vayo re Product ko satto esle garda whole api haru nai cahldaina i mean post req ko api ni chaldaina so jahele better approach vaneko always write in try and catch
// app.get("/api/products", async function (req, res) {
//   try {
//     let products = await Product.find();
//     // mathi ko part samma ma data aaucha ani matra tala jancha
//     console.log(products);
//     res.send(products);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ msg: "server error" });
//   }
// });
// also send fucntion ma string ni patauna milcha also array anda also object too
// database ma data store garnu vanda agadi schema haru banaunu parcha
// 5 next things is products haru jasle ni halna pairako cha esko lagi euta authentication ni hunnu paryo
// so make middleware
// */

// 1step to make api is you need exxpress
// why cause it provide such stuffs

// now api banauna ko lagi express le certain function haru dincha like app ()
// here tala get vanne fucntion ma agadi ko parameter le path lincha ra second parameter ma req ra res automatically nai aaucha

// middleware a fucntion which has access to req and res

const checkAuthentication = (req, res, next) => {
  console.log("checking");
  let loggenIn = true;
  if (loggenIn) {
    next();

    // edi loggenIn cha vane next matlab arko function call garne i mean tala ko function call garne
  } else {
    res.status(401).send({
      msg: "unauthenticated ....",
    });
  }
};

// 6 so eti ko flow ko ho vane middleware bich ma basera kam garcha before

app.use(express.json());

// global middleware ra yo sabbai api ko routes ko lagi kam garcha

app.use(checkAuthentication);

app.get("/api/products", async function (req, res) {
  try {
    let products = await Product.find();
    // mathi ko part samma ma data aaucha ani matra tala jancha
    console.log(products);
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "server error" });
  }
});

// product create garne api

app.post("/api/products", (req, res) => {
  console.log(req.body);
  Product.create({ title: req.body.title, price: req.body.price });
  res.send("product created");
});

app.listen(3000, () => {
  console.log("server started");
});
