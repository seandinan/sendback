import { AJAX_RESPONSE, AJAX_STATUS, AJAX_LABEL } from './AjaxResponseTypes';

export default class SendBack {
	#logger;
	#silentMode;
	constructor(config = {}){
		this.#logger = config.hasOwnProperty('logger') ? config.logger : console;
		this.#silentMode = config.hasOwnProperty('silentMode') ? config.silentMode : false;
	}

	config = (config) => {
		const setConfig = (key) => {
			if (config.hasOwnProperty(key)) this[`#${key}`] = config[key];
		};
		setConfig('logger');
		setConfig('silentMode');
	}

	success = (res, data = {}) => {
		// Everything is good to go.
		if (res.headersSent === false){
			const response = formatResponseMessage(data);
			res.status(AJAX_STATUS.SUCCESS).send(response);
		}
	};

	unauthorized = (res, err, message, data = {}) => {
		// e.g. not logged in or invalid JWT.
		if (err) this.logger.error(err);
		if (res.headersSent === false){
			const response = formatResponseMessage(data, null, AJAX_RESPONSE.UNAUTHORIZED, message);
			res.status(AJAX_STATUS.UNAUTHORIZED).send(response);
		}
	};

	methodNotAllowed = (res, err, message, data = {}) => {
		// e.g. trying to PUT to a download endpoint.
		if (err) this.logger.error(err);
		if (res.headersSent === false){
			const response = formatResponseMessage(data, null, AJAX_RESPONSE.METHOD_NOT_ALLOWED, message);
			res.status(AJAX_STATUS.METHOD_NOT_ALLOWED).send(response);
		}
	};

	invalidContent = (res, err, message, data = {}) => {
		// Invalid body content... missing fields etc.
		if (err) this.logger.error(err);
		if (res.headersSent === false){
			const response = formatResponseMessage(data, AJAX_RESPONSE.INVALID_CONTENT, message);
			res.status(AJAX_STATUS.INVALID_CONTENT).send(response);
		}
	};

	unavailable = (res, err, message, data = {}) => {
		// something timed out or isn't working like maybe AWS or RDS.
		if (err) this.logger.error(err);
		if (res.headersSent === false){
			const response = formatResponseMessage(data, null, AJAX_RESPONSE.UNAVAILABLE, message);
			res.status(AJAX_STATUS.UNAVAILABLE).send(response);
		}
	};

	serverError = (res, err, message, data = {}) => {
		// catch-all for server errors.
		if (err) this.logger.error(err);
		if (res.headersSent === false){
			const response = formatResponseMessage(data, null, AJAX_RESPONSE.SERVER_ERROR, message)
			res.status(AJAX_STATUS.SERVER_ERROR).send(response);
		}
	};
}

function formatResponseMessage(data, errorType, errorMessage){
	const status = AJAX_STATUS.hasOwnProperty(errorType) ? AJAX_STATUS[errorType] : null;
	const type   = AJAX_LABEL.hasOwnProperty(errorType) ? AJAX_LABEL[errorType] : null;
	const message = errorMessage || null;
	return { data, error: { type, status, message } };
}

