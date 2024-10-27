const fetchProducts = async (options) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return false;
  }
};

const fetchProductsByCategory = async (options, categoryName) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return false;
  }
};

const fetchCategories = async (options) => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories",
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return false;
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

    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful:", data);
      return true;
    } else {
      const errorData = await response.json();
      console.error("Registration failed:", errorData);
      return false;
    }
  } catch (error) {
    console.error("Error occurred during registration:", error);
    return false;
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

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return true;
    } else {
      const errorData = await response.json();
      console.error("Authorization failed:", errorData);
      return false;
    }
  } catch (error) {
    console.error("Error occurred during authorization:", error);
    return false;
  }
};

export {
  fetchProducts,
  fetchProductsByCategory,
  fetchCategories,
  registrate,
  authorize,
};
