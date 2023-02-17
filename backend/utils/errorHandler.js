class ErrorHandler extends Error{ //Error is node's default class
    constructor(message,statusCode){
        //Since ErrorHandler is a derived class of Error base class we need super() keyword to get access to 'this' keyword
        super(message) ; //passing the recieved message from constructor to super
        this.statusCode= statusCode;
        Error.captureStackTrace(this,this.constructor); //Creates a .stack property on this object, which when accessed returns a string representing the location in the code at which Error.captureStackTrace() was called.
    }
}
module.exports =ErrorHandler;