// prodcut api vanaune eta

const express = require("express");

const app = express();

// now hamle eha express vanne fucntion call garese tesle bhitra bhitra Object haru return garirako huncha
// like get or post ani aru aru function esle object ko rup ma return garirako huncha

// now aba server start garna ko lagi listen function huncah

app.listen(8000, () => {
  console.log("server started");
});

app.get("/api/test", (req, res) => {
  res.send("Test Successful");
});

app.get("/api/dashboard", (req, res) => {
  console.log(req);
  let loggedIn = false;
  if (!loggedIn) {
    return res.status(401).send({ msg: "unauthicated" });
  }
  res.send("Dashboard Data");
});

// protected routes

app.use(express.json());

app.post("/api/orders", (req, res) => {
  console.log("req.body", req.body);
  res.send("createorder");
});

// etikai data haru jadaina frontend bata pathako eslai access garna ko lagi global midddlewaare vanaunu parcha

// -------------------------------------
// middleware
// testo function ho jasle req ra res dubai lai access garna paucha ra modify garna sakcha
// or req ra res check garne lai middleware vanincha ani tesma kam garne

const checkAuthentication = (req, res) => {
  console.log("check authentication");
};

app.use(checkAuthentication);

// so  basically checkAuthentication le middle ware ko kam garirako cha ani esle pending ma rakhdincha kura haru kei hamle response lai hit garayena vane

const checkAuthenticationn = (req, res, next) => {
  console.log("check authentication");
};
checkAuthenticationn();

// next function next valid api req lai accept garcha
