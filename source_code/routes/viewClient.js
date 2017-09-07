var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function displayClient(req , res , next){
        var userID = req.params.idAdmin;
        var clientID = req.params.idClient;
        User.findById(clientID, function(err , client){
            if(err)
                console.log("Error : %s ",err);
            if (!client)
                return res.render('404');
            var result = {
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
                userPassword: client.userPassword
            }
            res.render('aClientView', {title: result.userFirstname + " " + result.userLastname, data:result, idAdmin:userID});
        });
    };