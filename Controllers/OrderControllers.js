import Restaurant from "../Schemas/RestaurantSchema.js";
import Order from "../Schemas/OrderSchema.js";
import moment from 'moment-timezone';



export const create_new_order = async (req, res) =>{
   
    try {
     
      var order = req.body;
      order = new Order(order);
      // order.save();
      res.status(200).json(order);
     

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export const get_orders_for_restaurant= async (req, res) =>{
   
    try {

      function toTimeZone(time, zone) {
        var format = 'YYYY/MM/DD HH:mm:ss ZZ';
        return moment(time, format).tz(zone).format(format);
    }
      var now = new Date()
      // .toLocaleString('en-US', { timeZone: "Europe/Berlin" });
      // now = toTimeZone(now, "Europe/Berlin")
      
      // now = moment.tz(now, "Europe/Berlin");

      console.log(moment.tz(now, "Europe/Berlin").format());
      var startOfToday = moment().startOf('day').format()
    
      const {resId} = req.params;
      const orders = await Order.find({restaurant_id: resId, created_at: {$gte: startOfToday}});
      res.status(200).json(orders);
      
  

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}