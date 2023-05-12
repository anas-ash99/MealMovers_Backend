import express from "express";
import { addMenuItem, create_new_restaurant, getAllRestaurants, getRestaurantById } from "../Controllers/RestaurantController.js";

const router = express.Router();


router.get("/get_all_restaurants", getAllRestaurants);
router.get("/get_restaurant_by_id/:id", getRestaurantById);
router.post("/add_menu_item", addMenuItem);
router.post("/create_new_restaurant", create_new_restaurant);


export default router;