import express  from "express";
import { create_new_order, get_orders_for_restaurant } from "../Controllers/OrderControllers.js";

const router = express.Router();


router.post("/create_new_order", create_new_order);
router.get("/get_orders_for_restaurant/:resId", get_orders_for_restaurant)


export default router;