import express  from "express";
import { create_new_order, get_all_orders, get_order_by_id, get_orders_for_restaurant, update_order_status } from "../Controllers/OrderControllers.js";

const router = express.Router();


router.post("/create_new_order", create_new_order);
router.get("/get_orders_for_restaurant/:resId", get_orders_for_restaurant);
router.get("/get_order_by_id/:id", get_order_by_id);
router.get("/get_all_orders", get_all_orders);
router.post("/update_order_status/:orderId/:status", update_order_status);


export default router;