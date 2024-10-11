export class HttpError extends Error {
    statusCode;
    context;
    constructor(message, statusCode, context = null) {
        super(message);
        this.statusCode = statusCode;
        this.context = context;
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
