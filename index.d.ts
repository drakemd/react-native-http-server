declare module 'react-native-http-server' {

    export enum statusCode{
        ACCEPTED ='ACCEPTED',
        BAD_REQUEST ='BAD_REQUEST',
        CREATED = 'CREATED',
        FORBIDDEN = 'FORBIDDEN',
        INTERNAL_ERROR = 'INTERNAL_ERROR',
        METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
        NO_CONTENT = 'NO_CONTENT',
        NOT_FOUND = 'NOT_FOUND',
        NOT_MODIFIED = 'NOT_MODIFIED',
        OK = 'OK',
        PARTIAL_CONTENT = 'PARTIAL_CONTENT',
        RANGE_NOT_SATISFIABLE = 'RANGE_NOT_SATISFIABLE',
        REDIRECT ='REDIRECT',
        UNAUTHORIZED = 'UNAUTHORIZED'
    }

    function create(options: any, callback: any): void
    function start(): void
    function stop(): void

    export {
        create,
        start,
        stop
    }
}