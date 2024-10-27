import { DataTypes, Sequelize } from "sequelize";
import Product from "./Product.js";
import sequelize from "../db/server.js";

const Order = sequelize.define(
  "Order",
  {
    // products: [
    //   {
    //     productId: {
    //       type: DataTypes.INTEGER,
    //       allowNull: false,
    //       references: { model: Product, key: "id" },
    //     },
    //     quantity: { type: DataTypes.FLOAT, allowNull: false },
    //   },
    // ],
    products: {
      type: DataTypes.JSON,
      get: function () {
        return JSON.parse(this.getDataValue("products"));
      },
      // set: function (value) {
      //   return this.setDataValue("products", JSON.stringify(value));
      // },
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Order;
