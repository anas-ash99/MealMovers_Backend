import express from "express";
import { addMenuItem, getAllRestaurants } from "../Controllers/RestaurantController.js";

const router = express.Router();


router.get("/get_all_restaurants", getAllRestaurants);
router.post("/add_menu_item", addMenuItem);


export default router;