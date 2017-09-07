var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function displayStatus(req , res , next) {
        var clientID = req.params.customerID;

        User.findById(clientID, function (err, client){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!client)
                return res.render('404');
            res.render('updateProfileView',
                {title:"Update Profile ",
                    data: {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userID: client.userID ,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userAddress: client.userAddress,
                        userCity: client.userCity,
                        userState: client.userState,
                        userZipCode: client.userZipCode,
                        userPassword: client.userPassword,
                    },
                    customer_ID:clientID
                });
        });
    };