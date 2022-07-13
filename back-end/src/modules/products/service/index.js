const productsModel = require('../model/index.js');

const ProductsGetAllS = async () => {
  const productsAll = await productsModel.ProductsGetAllM();

  if (!productsAll | null) {
    return { status: 404, message: "Products not found" };
  }
  return productsAll;
};

module.exports = { ProductsGetAllS };