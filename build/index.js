"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
_dotenv["default"].config({
  path: "./config/.env"
}).parsed;
var port = process.env.PORT || 8080;
var db = process.env.DATABASE_URI;

// conect to database
_mongoose["default"].set("strictQuery", true);
_mongoose["default"].connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB connected");
})["catch"](function (err) {
  return console.log(err);
});
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});