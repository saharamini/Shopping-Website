var mongoose = require('mongoose');
var credentials = require("../credentials.js");

var dbUrl = 'mongodb://' + credentials.host + ':27017/' + credentials.database;

var connection = null;
var model = null;

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

    getModelOrder: function getModel() {
        if (connection == null) {
            console.log("Creating Order connection and model...");
            connection = mongoose.createConnection(dbUrl);
            model = connection.model("OrderModel", orderSchema);
        };
        return model;
    }
};

























