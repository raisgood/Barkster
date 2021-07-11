"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosEndpoints = _interopRequireDefault(require("axiosEndpoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axiosEndpoints["default"].create({
  baseURL: 'https://barkster.herokuapp.com/'
});

var _default = instance;
exports["default"] = _default;