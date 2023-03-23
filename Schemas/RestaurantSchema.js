import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    deliveryPrice: String,
    categories: [String],
    deliveryTime: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})


export default mongoose.model("Restaurant", restaurantSchema);