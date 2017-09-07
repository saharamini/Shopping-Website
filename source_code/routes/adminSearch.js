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
            var result = user._id;
            res.render('displayAdminSearchView', {title: "Search Page", data: result});
        });
    };