const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    product: String,
    brand: String,
    flavor: String,
    weightOz: Number,
    inStock: {
        type: Boolean,
        default: true
    },
    onSale: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model("Inventory", inventorySchema);
