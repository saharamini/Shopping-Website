var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function afterSearch(req , res , next){
        var admin = req.params.idAdmin;
        // gender
        if(req.body.genderList !== "") {
            User.find({userGender: req.body.genderList, userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);
                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                if (req.body.genderList == "female") {
                    res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
                }
                else if (req.body.genderList == "male") {
                    res.render('displayCustomersView', {title: "Clients Page", data: results, user: admin});
                }

            });
        }
        // customer first name
        else if(req.body.fname !== "") {
            // we use the $options parameter with value $i.
            User.find({userFirstname: { $regex : req.body.fname,$options:"$i"}, userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);

                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
            });
        }
        // customer last name
        else if(req.body.lname !== "") {
            // we use the $options parameter with value $i.
            User.find({userLastname: { $regex : req.body.lname,$options:"$i"}, userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);

                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
            });
        }
        // state
        else if(req.body.fstate !== "") {
            // we use the $options parameter with value $i.
            User.find({userState: { $regex : req.body.fstate,$options:"$i"}, userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);

                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
            });
        }
        // phone
        else if(req.body.fphonenumber !== "") {
            User.find({userPhone: parseInt(req.body.fphonenumber), userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);

                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
            });
        }
        // zip code
        else if(req.body.fzipcode !== "") {
            User.find({userZipCode: parseInt(req.body.fzipcode), userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);

                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
            });
        }
        // show all customer
        else{
            User.find({userType:'customer'}, function (err, users) {
                if (err)
                    console.log("Error : %s ", err);

                var results = users.map(function (client) {
                    return {
                        userFirstname: client.userFirstname,
                        userLastname: client.userLastname,
                        userPhone: client.userPhone,
                        userEmail: client.userEmail,
                        userCity: client.userCity,
                        userState: client.userState,
                        id: client._id,
                        user: admin
                    }
                });
                res.render('displayCustomersView', {title: "Clients Page", data: results, user:admin});
            });
        }

    };