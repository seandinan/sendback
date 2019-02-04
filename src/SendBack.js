import { AJAX_RESPONSE, AJAX_STATUS, AJAX_LABEL } from './AjaxResponseTypes';

export default class SendBack {
	constructor(config = {}){

	}

	config = (config) => {
		const setConfig = (key) => {
			if (config.hasOwnProperty(key)) this[`#${key}`] = config[key];
		};
		console.warn('config is not currently available');
	}

	defineResponse = (name, statusCode, statusMessage) => {
		if (this[name]) console.warn(`Response '${name}' is already defined and will be overwritten.`);
		this[name] = (res, data = {}) => {
			sendFormattedResponse(res, data, statusCode, statusMessage || name);
		}
	};

	// Everything is good to go.
	success = (res, data = {}) => sendResponse(res, data, 'SUCCESS');

	// e.g. not logged in or invalid JWT.
	unauthorized = (res, errorMessage) => sendResponse(res, errorMessage, 'UNAUTHORIZED');

	// e.g. trying to PUT to a download endpoint.
	methodNotAllowed = (res, errorMessage) => sendResponse(res, errorMessage, 'METHOD_NOT_ALLOWED');

	// Invalid body content... missing fields etc.
	invalidContent = (res, errorMessage) => sendResponse(res, errorMessage, 'INVALID_CONTENT');

	// something timed out or isn't working.
	unavailable = (res, errorMessage) => sendResponse(res, errorMessage, 'UNAVAILABLE');

	// catch-all for server errors.
	serverError = (res, errorMessage) => sendResponse(res, errorMessage, 'SERVER_ERROR');
}

function sendResponse(res, data, responseType){
	sendFormattedResponse(res, data, AJAX_STATUS[responseType], AJAX_RESPONSE[responseType]);
}

function sendFormattedResponse(res, data, status, statusMessage){
	if (!res.headersSent){
		res.statusMessage = statusMessage;
		res.status(status);
		res.send({ data });
	}
}
