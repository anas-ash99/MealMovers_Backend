import Restaurant from "../Schemas/RestaurantSchema.js";


export const getAllRestaurants = async (req, res) =>{
    try {
      const restaurants = await Restaurant.find();
      res.status(200).json(restaurants);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export const addMenuItem = async (req, res)=>{
  try {
    // console.log(req.body);
    const item = req.body
    let restaurant = await Restaurant.findById(item.resId);
    restaurant.menu_item.push(req.body);
    restaurant.save();
    res.status(200).json(restaurant);

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
} 