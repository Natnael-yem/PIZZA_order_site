import express from 'express';
import { createMenu, getMenus, deleteMenu } from '../controllers/menuController.js';

const router = express.Router(); 

router.post('/menus', createMenu);

router.get('/menus', getMenus);

// Route to delete a menu item by ID
router.delete('/menus/:id', deleteMenu);

export default router;
