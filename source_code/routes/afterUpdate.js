var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function saveProduct(req , res , next){

        var idClient = req.params.idCustomer;

        User.findById(idClient, function (err, client){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!client){ return res.render('404');}

            client.userFirstname= req.body.fname;
            client.userLastname= req.body.lname;
            client.userID = req.body.username;
            client.userPhone = req.body.phone;
            client.userEmail = req.body.email;
            client.userAddress = req.body.address;
            client.userCity = req.body.city;
            client.userState = req.body.state;
            client.userZipCode = req.body.zipCode;
            client.userPassword = req.body.password;

            client.save(function (err) {
                if (err)
                    console.log("Error updating : %s ",err );
                res.redirect('/login/customer/'+idClient);
            });
        });
    };
