import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


const Customer = sequelize.define('Customer', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Customer;
