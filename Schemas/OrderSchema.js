import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({

    resturant_id:String,
    customer_name:String,
    orderPrice: String,
    deliveryTime: String,
    paymentStatus:String,
    status:String,
    type:String,
    address:{
       name:String,
       streetName: String,
       city:String,
       houseNumber:String,
       instruction:String,
       zipCode:String,
       phoneNumber:String
    },
    created_at: {
        type: Date,
        default: new Date()
    }

})


export default mongoose.model("Order", orderSchema);