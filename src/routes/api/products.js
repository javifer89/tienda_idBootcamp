const router = require("express").Router();
const productsController = require('../../controllers/products.controller');

router.get("/", productsController.getProducts);
router.get("/:productId", productsController.getById);
router.post("/", productsController.addProduct);
router.put("/:productId", productsController.findAndUpdate);
router.delete("/:productId", productsController.findAndDelete);

module.exports = router;
