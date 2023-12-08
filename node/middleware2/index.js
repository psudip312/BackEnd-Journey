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
  let loggedIn = false;
  if (!loggedIn) {
    res.send("Unauthenticated");
  }
  res.send("Dashboard Data");
});
