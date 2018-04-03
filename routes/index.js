var router = require("express").Router();
var productRouter = require("./apiRoutes");
router.use("/products", productRouter);
module.exports = router;