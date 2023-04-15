import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    deliveryPrice: String,
    categories: [String],
    deliveryTime: String,
    image_url: {
        type: String,
        default: ""
    },
    menu_items:[{
        name: String,
        price:String,
        description: String,
        imageUrl:{
            default: "",
            type: String
        },
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
})


export default mongoose.model("Restaurant", restaurantSchema);