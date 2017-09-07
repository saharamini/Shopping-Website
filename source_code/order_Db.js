var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var orderSchema = new Schema({
        customerID: String,
        productID: String,
        productName: String,
        productQuantity: Number,
        orderDate: {type: Date, default: Date.now},
        productPrice: Number,
		orderStatus: String
    },{ versionKey: false }
);

module.exports = {
    getModel: function getModel(connection) {
        return connection.model("OrderModel", orderSchema);
    }
}
