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
    restaurant.menu_items.push(req.body);
    restaurant.save();
    res.status(200).json(restaurant);

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
} 

export const create_new_restaurant = async (req, res)=>{
  try {
   
    var rest = req.body;
    rest.createdAt = new Date();    
    rest = new Restaurant(rest)
    res.status(200).json(rest);
    rest.save()
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
} 



export const getRestaurantById = async (req, res)=>{
  try {
    // console.log(req.body);
    const {id} = req.params
    let restaurant = await Restaurant.findById(id);
    res.status(200).json(restaurant);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
} 