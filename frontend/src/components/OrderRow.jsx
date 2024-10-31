import ProductOrderRow from "../components/ProductOrderRow";

const OrderRow = ({ order }) => {
  return (
    <div className="collapse collapse-arrow bg-base-200 max-w-6xl m-auto my-4">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex justify-between">
          <span>Order Nummer: {order.id}</span>
          <span>Date: {order.date}</span>
          <span>Total: {order.total}</span>
        </div>
      </div>
      <div className="collapse-content">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Line total</th>
            </tr>
          </thead>
          <tbody>
            {order.products &&
              order.products.map((product) => (
                <ProductOrderRow product={product} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderRow;
