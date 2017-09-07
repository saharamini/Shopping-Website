var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

module.exports =
    function displayOrders(req , res , next){
        var adminID = req.params.adminID;
        var orderID = req.params.orderID;

        Order.findById(orderID, function(err , product){
            if(err)
                console.log("Error : %s ",err);
            if (!product){ return res.render('404');}

            product.orderStatus ='true';

            product.save(function (err) {
                if (err)
                    console.log("Error updating : %s ", err);
            });
            res.redirect('/admin/'+adminID+'/orders');
        });

    };