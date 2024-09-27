import Customer from '../models/customer.js';
import { validateCustomer } from '../validations/customerValidation.js';

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const parsedData = validateCustomer(req.body);
    const customer = await Customer.create(parsedData);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    const parsedData = validateCustomer(req.body);
    await customer.update(parsedData);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    await customer.destroy();
    res.json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};