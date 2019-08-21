"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var port = process.env.PORT || 50001;
var app = (0, _express["default"])();

_dotenv["default"].config();

app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../dist')));
app.listen(port, function () {
  console.log("app is running in port ".concat(port));
  app.get('*', function (req, res) {
    res.sendFile(_path["default"].resolve(__dirname, '../dist/index.html'));
  });
});