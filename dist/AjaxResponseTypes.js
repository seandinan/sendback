"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AJAX_LABEL = exports.AJAX_STATUS = exports.AJAX_RESPONSE = void 0;
var AJAX_RESPONSE = Object.freeze({
  SUCCESS: 'SUCCESS',
  UNAUTHORIZED: 'UNAUTHORIZED',
  METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
  INVALID_CONTENT: 'INVALID_CONTENT',
  UNAVAILABLE: 'UNAVAILABLE',
  SERVER_ERROR: 'SERVER_ERROR'
});
exports.AJAX_RESPONSE = AJAX_RESPONSE;
var AJAX_STATUS = Object.freeze({
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  METHOD_NOT_ALLOWED: 405,
  INVALID_CONTENT: 422,
  UNAVAILABLE: 503,
  SERVER_ERROR: 500
});
exports.AJAX_STATUS = AJAX_STATUS;
var AJAX_LABEL = Object.freeze({
  SUCCESS: 'Success',
  UNAUTHORIZED: 'Unauthorized',
  METHOD_NOT_ALLOWED: 'Method Not Allowed',
  INVALID_CONTENT: 'Invalid Content',
  UNAVAILABLE: 'Unavailable',
  SERVER_ERROR: 'Server Error'
});
exports.AJAX_LABEL = AJAX_LABEL;