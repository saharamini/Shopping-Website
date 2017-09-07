var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

var DBClient = require('./dbConnectionUser');
var User =DBClient.getModelUser();

var dateFormat = require('dateformat');


module.exports =
    function afterSearch(req , res , next) {
        var admin = req.params.admin_id;
        var orderID = req.params.orderID;
        Order.find({_id: orderID}, function (err, order) {
            if (err)
                console.log("Error : %s ", err);
            var orderDetail= order.map(function (order) {
                return {
                    customer_ID: order.customerID,
                    productName: order.productName,
                    productQuantity: order.productQuantity,
                    productPrice: order.productPrice,
                    orderDate: dateFormat(order.orderDate),
                    orderStatus: order.orderStatus == 'false' ? 'not ready for pick up' : 'ready for pick up'
                }
            });
            User.find({_id:orderDetail[0].customer_ID}, function (err, user) {
                if (err)
                    console.log("Error : %s ", err);
                var customer= user.map(function (user) {
                    return {
                        user_Firstname: user.userFirstname,
                        user_Lastname: user.userLastname,
                        user_Phone: user.userPhone,
                        user_Email: user.userEmail,
                        user_Address: user.userAddress,
                        user_City: user.userCity,
                        user_State: user.userState,
                        user_ZipCode: user.userZipCode,
                        cID: user._id,
                        product_Name: orderDetail[0].productName,
                        product_Quantity: orderDetail[0].productQuantity,
                        product_Price: orderDetail[0].productPrice,
                        order_Date: orderDetail[0].orderDate,
                        order_Status: orderDetail[0].orderStatus,
                        order_ID: orderID,
                        admin:admin

                    }
                });
                res.render('customerOrderView', {title: "Customer's Order Page", data: customer, userAdmin:admin});
            });
        });
    }