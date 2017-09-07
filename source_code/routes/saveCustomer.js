var DB = require('./dbConnectionUser.js');
var Customer = DB.getModelUser();

module.exports =
    function saveCustomer(req , res , next){

        var customer = new Customer({
            userFirstname: req.body.fname,
            userLastname: req.body.lname,
            userID: req.body.username,
            userPhone: req.body.phone,
            userEmail: req.body.email,
            userAddress: req.body.address,
            userCity: req.body.city,
            userState: req.body.state,
            userZipCode: req.body.zipCode,
            userGender: req.body.genderList,
            userPassword: req.body.password,
            userType: 'customer'
        });

        customer.save(function (err){
            if(err)
                console.log("Error : %s ",err);
            res.redirect('/loginRegisterView');
        });

    };
