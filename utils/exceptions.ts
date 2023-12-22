export class BaseException extends Error {
    code: number = 500;
    constructor(msg: string) {
        super(msg);
    }
}

export class UnAuthorizedException extends BaseException {
    code: number = 401;
}

export class ServerErrorException extends BaseException {
    code: number = 500;
}