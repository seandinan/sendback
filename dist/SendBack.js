"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AjaxResponseTypes = require("./AjaxResponseTypes");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SendBack = function SendBack() {
  var _this = this;

  var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, SendBack);

  _defineProperty(this, "config", function (config) {
    var setConfig = function setConfig(key) {
      if (config.hasOwnProperty(key)) _this["#".concat(key)] = config[key];
    };

    console.warn('config is not currently available');
  });

  _defineProperty(this, "success", function (res) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return sendResponse('SUCCESS', res, data);
  });

  _defineProperty(this, "unauthorized", function (res, errorMessage) {
    return sendResponse('UNAUTHORIZED', res, errorMessage);
  });

  _defineProperty(this, "methodNotAllowed", function (res, errorMessage) {
    return sendResponse('METHOD_NOT_ALLOWED', res, errorMessage);
  });

  _defineProperty(this, "invalidContent", function (res, errorMessage) {
    return sendResponse('INVALID_CONTENT', res, errorMessage);
  });

  _defineProperty(this, "unavailable", function (res, errorMessage) {
    return sendResponse('UNAVAILABLE', res, errorMessage);
  });

  _defineProperty(this, "serverError", function (res, errorMessage) {
    return sendResponse('SERVER_ERROR', res, errorMessage);
  });
};

exports.default = SendBack;

function sendResponse(responseType, res, data) {
  if (res.headersSent === false) {
    res.statusMessage = _AjaxResponseTypes.AJAX_RESPONSE[responseType];
    res.status(_AjaxResponseTypes.AJAX_STATUS[responseType]);
    res.send({
      data: data
    });
  }
}