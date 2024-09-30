import express from 'express';
import bodyParser from 'body-parser';
import menuRoutes from './routes/menuRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import customerRoutes from './routes/customerRoutes.js'
import restaurantRoutes from './routes/restaurantRoutes.js'
import sequelize from './config/database.js';
import cors from 'cors';

const app =  express();
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,               
}));

app.use(bodyParser.json());


app.use('/api', menuRoutes);

app.use('/api', orderRoutes);

app.use('/api', customerRoutes);

app.use('/api', restaurantRoutes)

sequelize.sync({ alter: true })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});