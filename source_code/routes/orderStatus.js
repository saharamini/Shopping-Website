var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

var dateFormat = require('dateformat');

module.exports =
    function displayStatus(req , res , next){

        var clientID = req.params.idCustomer;

        Order.find({customerID:clientID}, function(err , products){
            if(err)
                console.log("Error : %s ",err);

            var results = products.map(function (product){
                return {
                    productID: product.productID,
                    productName: product.productName,
                    productQuantity: product.productQuantity,
                    productPrice: product.productPrice,
                    orderDate:  dateFormat(product.orderDate),
                    orderStatus:product.orderStatus == 'false'?'not ready for pick up':'ready for pick up'
                }
            });
            res.render('orderStatusView', {title:"Order Status Page", data:results, customer_ID:clientID});
        }).sort({orderDate:-1}); // use to sort date
    };