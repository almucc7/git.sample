export class HttpError extends Error {
    statusCode;
    status;
    //statusCode: number;
    //status: string;
    constructor(message, statusCode, status) {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
        this.name = 'HtmlError';
        // this.statusCode = statusCode;
        // this.status = status;
    }
}
// const e = new Error('Error message');
