import { useEffect, useState } from "react";
import { fetchOrders } from "../units/network";
import OrderRow from "../components/OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const options = {
      signal: controller.signal,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    fetchOrders(options).then((data) => setOrders(data));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="p-12">
      {orders &&
        orders.map((order) => <OrderRow key={order.id} order={order} />)}
    </div>
  );
};

export default Orders;