const router = require("express").Router();
const usersController = require("../../controllers/users.controller");


router.post("/register", usersController.addUser);
router.get("/", usersController.getUsers);
router.put("/:userId/buy/:productId", usersController.buyProduct);


module.exports = router;
