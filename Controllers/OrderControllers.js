import Restaurant from "../Schemas/RestaurantSchema.js";
import Order from "../Schemas/OrderSchema.js";
import moment from 'moment-timezone';



export const create_new_order = async (req, res) =>{
   
    try {
     
      var order = req.body;
      order = new Order(order);
      var now = new Date()
      // order.created_at = moment.tz(now, "Europe/Berlin").format();
      order.ordered_at = moment.tz(now, "Europe/Berlin").format();
      order.save();
      res.status(200).json(order);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export const get_orders_for_restaurant= async (req, res) =>{
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  
 
    try {
      var now = new Date()
       let month = months[now.getMonth()];
      var dateString = month + " " + now.getDate() + ", " + now.getFullYear() + " 11:25:00" 
      var date = new Date(dateString)
      const {resId} = req.params;
      const orders = await Order.find({restaurant_id: resId, ordered_at: {$gte: date}});
      // const orders = await Order.find({restaurant_id: resId});
      orders.reverse()
      res.status(200).json(orders);
      console.log(date);
    
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export const update_order_status = async (req, res) =>{
   
  try {
     
    const {orderId,status} = req.params
    var order = await Order.findById(orderId);

    order.status = status; 

    order.save();
   
    res.status(200).json(order);
    


  } catch (error) {
      console.log(error);
      res.status(400).json(error);
  }
}