import { useContext, useEffect, useState } from "react";
import { getProductsInCart } from "../units/storage";
import { createOrder } from "../units/network";
import { CartContext } from "../contexts/CartContext";
import CartRow from "../components/CartRow";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const { cartQuantities, setCartQuantities } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getProductsInCart());
  }, []);

  const placeOrderHandle = () => {
    const controller = new AbortController();

    const products = cart.map((item) => ({
      id: item.id,
      quantity: item.amount,
    }));

    const options = {
      signal: controller.signal,
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products,
        total: 200,
      }),
    };

    createOrder(options)
      .then(() => {
        localStorage.setItem("cart", JSON.stringify([]));
        setCart(null);
        setCartQuantities(0);
        navigate("/orders");
      })
      .catch((res) => {
        if (res.status === 401) {
          navigate("/login");
        }
      });

    return () => {
      controller.abort();
    };
  };

  return (
    cartQuantities > 0 && (
      <div className="overflow-x-auto max-w-7xl m-auto p-8">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((product) => (
                <CartRow
                  key={product.id} 
                  product={product}
                  cartQuantities={cartQuantities}
                  setCartQuantities={setCartQuantities}
                />
              ))}
          </tbody>
        </table>
        <div className="float-right m-4">
          <button className="btn btn-wide" onClick={placeOrderHandle}>
            Place order
          </button>
        </div>
      </div>
    )
  );
};

export default Cart;
