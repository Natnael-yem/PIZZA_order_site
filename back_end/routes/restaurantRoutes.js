import express from 'express';
import { createRestaurant, getRestaurant } from '../controllers/restaurantController.js';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Change this to your desired directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original file name
    },
});
const upload = multer({ storage: storage });

const router = express.Router(); 

router.post('/restaurant', upload.single('logo'), createRestaurant);

router.get('/restaurant', getRestaurant);


export default router;