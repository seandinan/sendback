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

	// Everything is good to go.
	success = (res, data = {}) => sendResponse('SUCCESS', res, data);

	// e.g. not logged in or invalid JWT.
	unauthorized = (res, errorMessage) => sendResponse('UNAUTHORIZED', res, errorMessage);

	// e.g. trying to PUT to a download endpoint.
	methodNotAllowed = (res, errorMessage) => sendResponse('METHOD_NOT_ALLOWED', res, errorMessage);

	// Invalid body content... missing fields etc.
	invalidContent = (res, errorMessage) => sendResponse('INVALID_CONTENT', res, errorMessage);

	// something timed out or isn't working.
	unavailable = (res, errorMessage) => sendResponse('UNAVAILABLE', res, errorMessage);

	// catch-all for server errors.
	serverError = (res, errorMessage) => sendResponse('SERVER_ERROR', res, errorMessage);
}

function sendResponse(responseType, res, data){
	if (res.headersSent === false){
		res.statusMessage = AJAX_RESPONSE[responseType];
		res.status(AJAX_STATUS[responseType]);
		res.send({ data });
	}
}

