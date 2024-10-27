import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) throw new ErrorResponse("Please login", 401);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.uid = decoded.uid;
  next();
};

export default verifyToken;
