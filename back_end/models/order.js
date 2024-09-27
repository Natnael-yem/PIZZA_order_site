import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Menu from './menu.js';
import Customer from './customer.js';

const Order = sequelize.define('Orders', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'delivered', 'ready'),
    allowNull: false,
    defaultValue: 'pending',
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Foreign keys for Menu (Pizza) and Customer
  pizzaId: {
    type: DataTypes.UUID,
    references: {
      model: Menu,
      key: 'id',
    },
    allowNull: false,
  },
  customerPhone: {
    type: DataTypes.FLOAT,
    references: {
      model: Customer,
      key: 'phone',
    },
    allowNull: false,
  }
});

export default Order;

