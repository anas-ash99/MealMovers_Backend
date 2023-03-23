import express from "express";
import { getAllRestaurants } from "../Controllers/RestaurantController.js";

const router = express.Router();


router.get("/get_all_restaurants", getAllRestaurants);


export default router;