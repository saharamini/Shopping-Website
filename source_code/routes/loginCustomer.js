var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function loginUser(req , res , next){
        var customerId = req.params.id;
        User.findById(customerId, function(err , user){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!user)
                return res.render('404');
            var results = {
                userFirstname: user.userFirstname,
                userLastname: user.userLastname,
                username: user.userID,
                password: user.userPassword
            }

            // check session
            if (req.session.customer === undefined) {
                req.session.customer = [];
            }

            var data = {id:customerId, username:results.username, password:results.password};
            req.session.customer.push(data);


            res.render('displayLoginCustomerView', {title: "Welcome " + results.userFirstname + " " + results.userLastname, result: results, customer_ID:customerId});
        });
    };