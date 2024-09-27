import express from 'express';
import { createCustomer, getCustomers } from '../controllers/customerController.js';

const router = express.Router(); 

router.post('/users', createCustomer);

router.get('/users', getCustomers);


export default router;