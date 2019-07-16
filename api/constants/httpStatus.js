exports.HTTP_STATUS = {
    OK: {
        CODE: 200,
        MESSAGE: 'The request has succeeded.'
    },
    BAD_REQUEST: {
        CODE: 400,
        MESSAGE: 'The server could not understand the request.'
    },
    UNAUTHORIZED: {
        CODE: 401,
        MESSAGE: 'The requested resource requires an authentication.'
    },
    FORBIDDEN: {
        CODE: 403,
        MESSAGE: 'The authentication failed.'
    },
    METHOD_NOT_ALLOWED: {
        CODE: 405,
        MESSAGE: 'The requested method is not allowed for the specified resoure.'
    },
    INTERNAL_SERVER_ERROR: {
        CODE: 500,
        MESSAGE: 'There was an internal server error while processing the request.'
    },
    CONFLICT: {
        CODE: 409,
        MESSAGE: 'Request could not be processed due to conflicts with existing resources.'
    },
    NOT_FOUND: {
        CODE: 404,
        MESSAGE: 'No resource found for this request.'
    }
};