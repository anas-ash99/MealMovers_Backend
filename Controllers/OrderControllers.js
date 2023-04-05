import Restaurant from "../Schemas/RestaurantSchema.js";
import Order from "../Schemas/OrderSchema.js";




export const create_new_order = async (req, res) =>{
   
    try {
      var order = req.body;
      order = new Order(order);
      order.save();
      console.log(order);
      res.status(200).json(order);
 

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}