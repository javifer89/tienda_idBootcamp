const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  // select * from products (así sería en SQL)
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getById = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        res.json(product);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const findAndUpdate = async (req, res) => {
try {
  const { productId } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
  // añadimos el objeto new para que nos devuelva el objeto modificado, si no lo añadieramos, nos devolveria el objeto PREVIO a la modificación
  res.json(updatedProduct);
} catch (error) {
res.json({fatal: error.message })
}
};

const findAndDelete = async (req, res) => {
try {
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(productId);
  res.json(deletedProduct);
} catch (error) {
res.json({fatal:error.message})
}
};

module.exports = {
  getProducts,
  addProduct,
  getById,
  findAndUpdate,
  findAndDelete
};
