var express = require("express");

var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pizza.all(function(data) {
    var hbsObject = {
      pizza: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas", function(req, res) {
  pizza.create([
    "pizza_name", "devoured"
  ], [
    req.body.pizza_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new pizza
    res.json({ id: result.insertId });
  });
});


// Export routes for server.js to use.
module.exports = router;
