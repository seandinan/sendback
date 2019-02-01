export const AJAX_RESPONSE = Object.freeze({
	SUCCESS           : 'SUCCESS',
	UNAUTHORIZED      : 'UNAUTHORIZED',
	METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
	INVALID_CONTENT   : 'INVALID_CONTENT',
	UNAVAILABLE       : 'UNAVAILABLE',
	SERVER_ERROR      : 'SERVER_ERROR',
});

export const AJAX_STATUS = Object.freeze({
	SUCCESS           : 200,
	UNAUTHORIZED      : 401,
	METHOD_NOT_ALLOWED: 405,
	INVALID_CONTENT   : 422,
	UNAVAILABLE       : 503,
	SERVER_ERROR      : 500,
});

export const AJAX_LABEL = Object.freeze({
	SUCCESS           : 'Success',
	UNAUTHORIZED      : 'Unauthorized',
	METHOD_NOT_ALLOWED: 'Method Not Allowed',
	INVALID_CONTENT   : 'Invalid Content',
	UNAVAILABLE       : 'Unavailable',
	SERVER_ERROR      : 'Server Error',
});
