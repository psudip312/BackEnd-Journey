const { log } = require("console");
const express = require("express");
const app = express();

// express vanne euta fucntion ho tyo function le kei kura return garcha so return gareko kura haru euta variable ma rakheko ho
// ani tyo return chai object hune raicha tyo object chai app ma rakhyeko cha ani tee object lai dot le call gareko tala
// app vanne object ma .get ra .listen vanne fucntion haru cha
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/todos", (req, res) => {
  let todos = ["react", "js", "css", "updatedthing", "dsf"];
  res.send(todos);
});

app.get("/api/dashboard", (req, res) => {
  let data = {
    total: 300,
    completed: 20,
  };
  console.log(res, "response");
  res.send(data);
});

// when a GET request is made to "/api/dashboard," the server responds with a JSON object containing information about the total and completed item

// mathi callback fun nata kunai vairbale ma store garaya cha nata kei esle sidai kasari tala res vanne parameter lai pathairako cha ?

app.get("/api/dashboard1", (req, res) => {
  // esma gist k vo vanda get vanne fucntion le duita parameter lirako cha euta url or path next chai callback function
  // callback function le duita kura lirako cha euta req ra arko res front end bata aako kura haru chai req huncha tara esma hamle just response matra garirako cha

  // Assume you have some data for the dashboard
  const dashboardData = {
    message: "Dashboard data retrieved successfully",
    // Add your actual dashboard data here
    // For example: widgets, charts, statistics, etc.
    // dashboardWidgets: [...],
    // charts: [...],
    // statistics: {...},
  };

  // Send a JSON response with the dashboard data  res.send(todos);
  res.status(200).json(dashboardData);
});

app.listen(8001),
  () => {
    console.log("server started");
  };
