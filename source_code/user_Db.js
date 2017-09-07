var mongoose = require('mongoose');
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
    getModel: function getModel(connection) {
        return connection.model("UserModel", userSchema);
    }
}
