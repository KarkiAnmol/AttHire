module.exports = (catchAsyncErrorFunction)=>(req,res,next)=>{
    Promise.resolve(catchAsyncErrorFunction(req,res,next)).catch(next);
};


