var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

module.exports =
    function loginUser(req , res , next){
        User.findOne({userID:req.body.uname, userPassword:req.body.psw}, function(err , user){
            if(err)
                console.log("Error Selecting : %s ", err);
            if(user !== null){
                var results = {
                    userType: user.userType,
                    id:user._id
                }

                if(results.userType == "admin")
                    res.redirect("/login/admin/"+results.id);
                else
                    res.redirect("/login/customer/"+results.id);
            }
            else{

                res.render('displayLoginRegisterView', {error:true});
            }

        });
    };