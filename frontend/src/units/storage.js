let cart = null;

const getProductsInCart = function () {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
};

const isProductInCart = (product) => {
  getProductsInCart();
  return cart.some((item) => item.id === product.id);
};

const updateAmount = (product) => {
  const cart = getProductsInCart();

  if (!isProductInCart(product)) {
    return { ...product, amount: 0 };
  }

  const productInCart = cart.find((item) => item.id === product.id);
  return { ...product, amount: productInCart.amount };
};

const getCartQuantities = () => {
  getProductsInCart();
  return cart.reduce((total, product) => total + product.amount, 0);
};

const addProductToCart = (product) => {
  try {
    getProductsInCart();

    if (isProductInCart(product)) {
      updateProductInCart(product);
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  } catch (error) {
    console.error(
      "An error occurred while adding the product to the cart:",
      error
    );
  }
};


const updateProductInCart = (product) => {
  try {
    getProductsInCart();

    if (!isProductInCart(product, cart)) {
      console.log(`There is no product in the cart with id: ${product.id}`);
      return;
    }

    const updatedCart = cart.map((item) =>
      item.id === product.id ? product : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } catch (error) {
    console.error(
      "An error occurred while updating the product in the cart:",
      error
    );
  }
};

const deleteProductInCart = (product) => {
  try {
    getProductsInCart();

    if (!isProductInCart(product, cart)) {
      console.log(`There is no product in the cart with id: ${product.id}`);
      return;
    }

    const updatedCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } catch (error) {
    console.error(
      "An error occurred while deleting the product in the cart:",
      error
    );
  }
};

export {
  isProductInCart,
  updateAmount,
  getProductsInCart,
  getCartQuantities,
  addProductToCart,
  updateProductInCart,
  deleteProductInCart,
};
