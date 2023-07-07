const User = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('products');//mediante el método populate, establece una relación entre el id obtenido y el "producto" correspondiente
      // res.json(users[2].products[0].name);// para poder acceder a usuarios, productos y sus propiedades, específicas
      
      res.json(users);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const buyProduct = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const user = await User.findById(userId);
    user.products.push(productId); //añadimos producto al usuario, pero no a la base de datos
    await user.save(); // ahora sí persiste en la base de datos
    res.json(user);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  addUser,
  buyProduct,
  getUsers,
};
