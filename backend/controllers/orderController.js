const Order=require("../models/orderModel");
const Product = require("../models/clotheModel");
const errorHandler=require("../utils/errorHandler");
const catchAsyncError=require("../middleware/catchAsyncError");

//create new order
exports.newOrder=catchAsyncError(async(req,res,next)=>{
const
    {
       shippingInfo,
       orderItems,
       paymentInfo,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice
    }=req.body;
const order =await Order.create({
     shippingInfo,
     orderItems,
     paymentInfo,
     itemsPrice,
     taxPrice,
     shippingPrice,
     totalPrice,
     paidAt:Date.now(),
     user:req.user._id,

});
res.status(201).json({

    success:true,
    order,
});

});
//get single order --ADMIN
exports.getSingleOrder= catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email" //populating user with  name and email which was found byusing users id itself
    );
    if(!order)
    {
        return next(new errorHandler("Order not found with this id",404));
    }
    res.status(200).json({
        success:true,
        order,
    });
});

//get logged in user order
exports.myOrders= catchAsyncError(async(req,res,next)=>{
    const orders = await Order.find({user:req.user._id});
    
    res.status(200).json({
        success:true,
        orders,
    });
});
//get all orders --ADMIN
exports.getAllOrders= catchAsyncError(async(req,res,next)=>{
    const allOrders = await Order.find();

    let totalAmount=0;
    allOrders.forEach((order)=>{
        totalAmount+=order.totalPrice;
    });

    
    res.status(200).json({
        success:true,
        totalAmount,
        allOrders,
    });
});

//update Order status  --ADMIN
exports.updateOrder= catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.param.id);

  if(order.orderStatus==="Deliverd"){
    return next(new errorHandler("You order has already been delivered",400));
  }

  order.orderItems.forEach(async(x)=>{
    await updateStock(x.product,x.quantity);
  });
  order.orderStatus =req.body.status; 
  if(req.body.status==="Delivered"){
    order.deliveredAt=Date.now();
  }
  await order.save({validateBeforeSave:false});
  res.status(200).json({
    success:true,
  });
    
  
});

async function updateStock(id,quantity){
    const product = await Product.findById(id);
    product.stock -=quantity;
    await product.save({validateBeforeSave:false});
}


//get all orders --ADMIN
exports.deleteOrder= catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id);

   await order.remove();

    if(!order){
        return next(new errorHandler("Order not found!",404));
    }
    res.status(200).json({
        success:true
    });
});
