var DB = require('./dbConnectionUser.js');
var User = DB.getModelUser();

var DBOrder = require('./dbConnectionOrder.js');
var Order = DBOrder.getModelOrder();

module.exports =
    function deleteUser(req , res , next){
        var admin = req.params.idAdmin;
        var id = req.params.idClient;
        // remove all orders from this customer
        Order.remove({ customerID:id },function (err, orders) {
            if (err)
                console.log("Error Selecting : %s ", err);
        });

        User.remove({_id:id}, function (err, user){
            if(err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/admin/'+admin+'/clients');
        });
    };