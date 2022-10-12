class ErrorHandler extends Error{ //Error is node's default class
    constructor(message,statusCode){
        //Since ErrorHandler is a derived class of Error base class we need super() keyword to get access to 'this' keyword
        super(message) ; //passing the recieved message from constructor to super
        this.statusCode= statusCode;
        Error.captureStackTrace(this,this.constructor);
    }
}
module.exports =ErrorHandler;