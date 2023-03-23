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