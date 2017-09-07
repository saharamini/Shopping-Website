var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function displayCustomers(req , res , next){
        var userID = req.params.id;
        User.find({userType:'customer'}, function(err , customers){
            if(err)
                console.log("Error : %s ",err);

            var results = customers.map(function (customer){
                return {
                    userFirstname: customer.userFirstname,
                    userLastname: customer.userLastname,
                    userPhone: customer.userPhone,
                    userEmail: customer.userEmail,
                    userCity: customer.userCity,
                    userState: customer.userState,
                    id: customer._id,
                    user: userID
                }
            });
            res.render('displayCustomersView', {title:"Customers Page", data:results, user:userID});
        });
    };