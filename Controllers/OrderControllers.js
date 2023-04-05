import Restaurant from "../Schemas/RestaurantSchema.js";
import Order from "../Schemas/OrderSchema.js";




export const create_new_order = async (req, res) =>{
   
    try {
      var order = req.body;
      order = new Order(order);
      order.save();
      res.status(200).json(order);
 

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export const get_orders_for_restaurant= async (req, res) =>{
   
    try {
      const {resId} = req.params;
      const orders = await Order.find({restaurant_id: resId});
      res.status(200).json(orders);
 

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}