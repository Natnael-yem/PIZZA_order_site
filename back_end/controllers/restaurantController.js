import Restaurant from '../models/restaurant.js';
import { validateAdmin } from '../validations/restaurantValidation.js';

export const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findAll();
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRestaurant = async (req, res) => {
  
  try {
    console.log(req.body)
    const { logo } = req.file;
    console.log(logo)
    const { admin_name, email, password, phone, location, restaurant_name } = req.body;
    const parsedData = validateAdmin({ admin_name, email, password, phone, location, restaurant_name });
    if (!logo) {
      console.log()
      return res.status(400).json({ error: 'Logo file is required' });
    };

    const restaurant = await Restaurant.create({
      ...parsedData,
      logo: logo.buffer,  
    });
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    const parsedData = validateAdmin(req.body);
    await restaurant.update(parsedData);
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    await restaurant.destroy();
    res.json({ message: 'Restaurant deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};