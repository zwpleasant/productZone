var router = require("express").Router();
var productController = require("../controllers/productController");

// localhost/products/
router.get("/:id", productController.find);
router.post("/new", productController.create);

module.exports = router;