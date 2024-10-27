import express from "express";
import {
  getOrders,
  getOrderByID,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.js";

const orderRouter = express.Router();

orderRouter.route("/").get(getOrders).post(createOrder);
orderRouter
  .route("/:id")
  .get(getOrderByID)
  .put(updateOrder)
  .delete(deleteOrder);

export default orderRouter;
