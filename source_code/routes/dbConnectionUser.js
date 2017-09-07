var mongoose = require('mongoose');
var credentials = require("../credentials.js");

var dbUrl = 'mongodb://' + credentials.host + ':27017/' + credentials.database;

var connection = null;
var model = null;

var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var userSchema = new Schema({
        userFirstname: String,
        userLastname: String,
        userID: String ,
        userPhone: Number,
        userEmail: String,
        userAddress: String,
        userCity: String,
        userState: String,
        userZipCode: Number,
        userGender: String,
        userPassword: String,
        userType: String
    },{ versionKey: false }
);

module.exports = {

    getModelUser: function getModel() {
        if (connection == null) {
            console.log("Creating User connection and model...");
            connection = mongoose.createConnection(dbUrl);
            model = connection.model("UserModel", userSchema);
        };
        return model;
    }
};

























