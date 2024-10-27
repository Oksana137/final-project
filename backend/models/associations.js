import Category from "./Category.js";
import Product from "./Product.js";
import Order from "./Order.js";
import User from "./User.js";

Category.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "categoryId",
  },
});

Product.belongsTo(Category, {
  foreignKey: { allowNull: false, name: "categoryId" },
  onDelete: "CASCADE",
});

User.hasMany(Order, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});

Order.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

User.sync();
Category.sync();
Product.sync();
Order.sync();
