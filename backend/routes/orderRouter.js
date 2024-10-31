import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  getOrders,
  getOrderByID,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.js";

const orderRouter = express.Router();

orderRouter.route("/").get(verifyToken, getOrders).post(createOrder);
orderRouter
  .route("/:id")
  .get(getOrderByID)
  .put(updateOrder)
  .delete(deleteOrder);

export default orderRouter;
