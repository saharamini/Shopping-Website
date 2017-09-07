var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function loginUser(req , res , next){
        var id = req.params.id;
        User.findById(id, function(err , user){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!user)
                return res.render('404');
            var results = {
                userFirstname: user.userFirstname,
                userLastname: user.userLastname,
                id: user._id
            }
            res.render('displayLoginAdminView', {title: "Welcome " + results.userFirstname + " " + results.userLastname + " - Admin Page", data: results});
        });
    };