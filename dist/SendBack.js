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

  _defineProperty(this, "defineResponse", function (name, statusCode, statusMessage) {
    if (_this[name]) console.warn("Response '".concat(name, "' is already defined and will be overwritten."));

    _this[name] = function (res) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      sendFormattedResponse(res, data, statusCode, statusMessage || name);
    };
  });

  _defineProperty(this, "success", function (res) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return sendResponse(res, data, 'SUCCESS');
  });

  _defineProperty(this, "unauthorized", function (res, errorMessage) {
    return sendResponse(res, errorMessage, 'UNAUTHORIZED');
  });

  _defineProperty(this, "methodNotAllowed", function (res, errorMessage) {
    return sendResponse(res, errorMessage, 'METHOD_NOT_ALLOWED');
  });

  _defineProperty(this, "invalidContent", function (res, errorMessage) {
    return sendResponse(res, errorMessage, 'INVALID_CONTENT');
  });

  _defineProperty(this, "unavailable", function (res, errorMessage) {
    return sendResponse(res, errorMessage, 'UNAVAILABLE');
  });

  _defineProperty(this, "serverError", function (res, errorMessage) {
    return sendResponse(res, errorMessage, 'SERVER_ERROR');
  });
};

exports.default = SendBack;

function sendResponse(res, data, responseType) {
  sendFormattedResponse(res, data, _AjaxResponseTypes.AJAX_STATUS[responseType], _AjaxResponseTypes.AJAX_RESPONSE[responseType]);
}

function sendFormattedResponse(res, data, status, statusMessage) {
  if (!res.headersSent) {
    res.statusMessage = statusMessage;
    res.status(status);
    res.send({
      data: data
    });
  }
}