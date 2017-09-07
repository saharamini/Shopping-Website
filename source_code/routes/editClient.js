var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function editClient(req , res , next){
        var user = req.params.idAdmin;
        var idClient = req.params.idClient;
        User.findById(idClient, function (err, client){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!client)
                return res.render('404');
            res.render('editClientView',
                {title:"Edit " + client.userFirstname + " "+client.userLastname ,
                    data: {
                        id: client._id,
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userID: client.userID ,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userAddress: client.userAddress,
                        userCity: client.userCity,
                        userState: client.userState,
                        userZipCode: client.userZipCode,
                        userGender: client.userGender,
                        userPassword: client.userPassword,
                        userType: client.userType
                    },
                    adminID: user
                });
        });
    };

