import express  from "express";
import { create_new_order } from "../Controllers/OrderControllers.js";

const router = express.Router();


router.post("/create_new_order", create_new_order);


export default router;