var mongoose = require('mongoose');
var credentials = require("../credentials.js");

var dbUrl = 'mongodb://' + credentials.host + ':27017/' + credentials.database;

var connection = null;
var model = null;

var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var productSchema = new Schema({
    productName: String,
    category: String,
    description: String ,
    price: Number,
    quantity: Number,
    imageURL: String
    },{ versionKey: false }
);


module.exports = {
	getModel: function getModel() {
		if (connection == null) {
			console.log("Creating Product connection and model...");
			connection = mongoose.createConnection(dbUrl);
			model = connection.model("ProductModel", productSchema);
		};
		return model;
	},

};

























