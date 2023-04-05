import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import Restaurant from "./Schemas/RestaurantSchema.js";
import restaurantRouter from "./Routes/RestaurantsRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";
const app = express();
dotenv.config()
const server = http.createServer(app);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
const connectDb = async ()=>{
    try {
      mongoose.connect(process.env.MONGODB)
    } catch (error) {
        throw(error);
    }
}



app.use("/restaurants",restaurantRouter);
app.use("/order", orderRouter);
app.get("/", async (req, res)=>{
    //  const rests = await Restaurant.find()
        
    //     const rest = new Restaurant({
    //         name: "Sushibar",
    //         categories: ["sushi", "asian", "soup"],
    //         createdAt: new Date(),
    //         deliveryPrice: "3.99",
    //         deliveryTime: "40-50"

    //     })
        // res.json(rest);
        // rest.save()
        res.send("hello to my app")
      
})
server.listen(process.env.PORT || 5000, ()=>{
    connectDb()
    console.log("server runing on port 5000");
})