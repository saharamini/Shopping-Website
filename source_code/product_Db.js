var mongoose = require('mongoose');
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
    getModel: function getModel(connection) {
        return connection.model("ProductModel", productSchema);
    }
}
