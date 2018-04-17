// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var url = "http://autumn-resonance-1298.getsandbox.com"

// Routes
// =============================================================
app.use(`/${url}/products`, require('./routes/products'));
app.use(`/${url}/inventory`, require('./routes/inventory'));



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
