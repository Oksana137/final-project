import { useState } from "react";
import Counter from "./Counter";

const CartRow = ({ product, cartQuantities, setCartQuantities }) => {
  const [isInCart, setIsInCart] = useState(true);

  return (
    isInCart && (
      <tr key={product.id}>
        <td>
          <div className="card card-side">
            <figure className="w-36 h-36 shrink-0">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.price} &#36;</p>
            </div>
          </div>
        </td>
        <td>{product.description}</td>
        <td>
          <Counter
            product={product}
            cartQuantities={cartQuantities}
            setCartQuantities={setCartQuantities}
            setIsInCart={setIsInCart}
          />
        </td>
        <td>{product.amount * product.price} &#36;</td>
      </tr>
    )
  );
};

export default CartRow;
