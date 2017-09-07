var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function saveProduct(req , res , next){
        var user = req.params.idAdmin;
        var idClient = req.params.idClient;

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
            if(req.body.gender == "female"){client.userGender = "female"; }
            if(req.body.gender == "male"){client.userGender = "male"; }
            if(req.body.type == "customer"){client.userType = "customer"; }
            if(req.body.type == "admin"){client.userType = "admin"; }
            client.save(function (err) {
                if (err)
                    console.log("Error updating : %s ",err );
                res.redirect('/admin/'+user+'/clients');
            });
        });
    };
