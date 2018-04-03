var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;