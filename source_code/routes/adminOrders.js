var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

var dateFormat = require('dateformat');

module.exports =
    function displayOrders(req , res , next){
        var adminID = req.params.id;
        Order.find({}, function(err , products){
            if(err)
                console.log("Error : %s ",err);

            var results = products.map(function (product){
                return {
                    productID: product.productID,
                    productName: product.productName,
                    productQuantity: product.productQuantity,
                    productPrice: product.productPrice,
                    orderDate:  dateFormat(product.orderDate),
                    orderStatus:product.orderStatus == 'false'?'not ready for pick up':'ready for pick up',
                    orderID:product._id,
                    admin_id: adminID
                }
            });
            res.render('adminOrderView', {title:"Orders Page", data:results, userAdmin:adminID});
            // sort base on date
        }).sort({orderDate: -1});
    };