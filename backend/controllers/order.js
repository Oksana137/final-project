import Order from "../models/Order.js";
import ErrorReponse from "../utils/ErrorResponse.js";

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      throw new ErrorReponse("Order not found.", 404);
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const { products, total } = req.body;
    if (!products || !total) {
      throw new ErrorReponse("Products and total are required!", 400);
    }
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { products, total } = req.body;
    if (!products || !total) {
      throw new ErrorReponse("Products and total are required!", 400);
    }
    const order = await Order.findByPk(id);
    if (!order) throw new ErrorReponse("Order not found", 404);
    const updatedOrder = await order.update(req.body);
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) throw new ErrorReponse("Order not found", 404);
    await order.destroy();
    res.status(200).json({ message: `Order deleted, id: ${id}` });
  } catch (error) {
    next(error);
  }
};
