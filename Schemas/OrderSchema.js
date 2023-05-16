import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({

    restaurant_id:String,
    customer_name:String,
    customer_id:String,
    orderPrice: String,
    deliveryTime: String,
    paymentStatus:String,
    status:String,
    type:String,
    isScheduled: Boolean,
    userId:String,
    address:{
       name:String,
       streetName: String,
       city:String,
       houseNumber:String,
       instruction:String,
       zipCode:String,
       phoneNumber:String,
    },
    items:[{
        name: String,
        price:String,
        description: String,
        quantity: Number
    }],
    ordered_at: Date,
    created_at: String
})


export default mongoose.model("Order", orderSchema);