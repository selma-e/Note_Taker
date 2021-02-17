//Dependencies
const express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//To use multiple static asset directories, I am using middleware function for the public folder
app.use(express.static("public"));

// Routes
// app.use("/api/notes", require("./routes/apiRoutes"));
// app.use("/", require("./routes/htmlRoute"));

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
