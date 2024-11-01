import HTTPError from "./HTTPError";

const fetchProducts = async (options) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products`,
      options
    );
    if (!response.ok) {
      throw new HTTPError(
        `HTTP error! Status: ${response.status}`,
        response.status
      );
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

const fetchProductsByCategory = async (options, categoryId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/category/${categoryId}`,
      options
    );
    if (!response.ok) {
      throw new HTTPError(
        `HTTP error! Status: ${response.status}`,
        response.status
      );
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products by category:", error.message);
    throw error;
  }
};

const fetchCategories = async (options) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/categories`,
      options
    );
    if (!response.ok) {
      throw new HTTPError(
        `HTTP error! Status: ${response.status}`,
        response.status
      );
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    throw error;
  }
};

const fetchOrders = async (options) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/orders`,
      options
    );
    if (!response.ok) {
      throw new HTTPError(
        `HTTP error! Status: ${response.status}`,
        response.status
      );
    }
    const orders = await response.json();
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    throw error;
  }
};

const registrate = async (regData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regData),
      }
    );

    if (!response.ok) {
      throw new Error("Registration failed!");
    }

    const data = await response.json();
    console.log("Registration successful:", data);
    return true;
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    throw error;
  }
};

const authorize = async (authData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      throw new Error("Authorization failed!");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return true;
  } catch (error) {
    console.error("Error occurred during authorization:", error.message);
    throw error;
  }
};

export {
  fetchProducts,
  fetchProductsByCategory,
  fetchCategories,
  fetchOrders,
  registrate,
  authorize,
};
