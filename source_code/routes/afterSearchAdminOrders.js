var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

var dateFormat = require('dateformat');


module.exports =
    function afterSearch(req , res , next){
        var admin = req.params.idAdmin;
        // date and radio button
        if((req.body.dateFrom !== "" && req.body.dateTo !== "") && req.body.status !== undefined){
            Order.find({orderDate: {
                    $gte: new Date(req.body.dateFrom),
                    $lte: new Date(req.body.dateTo)
                },
                orderStatus:req.body.status='notReady'?'false':'true'}, function (err, orders) {
                if (err)
                    console.log("Error : %s ", err);
                if (!orders)
                    return res.render('404');
                var orderResults = orders.map(function (order) {
                    return {
                        productID: order.productID,
                        productName: order.productName,
                        productQuantity: order.productQuantity,
                        productPrice: order.productPrice,
                        orderDate: dateFormat(order.orderDate),
                        orderStatus: order.orderStatus == 'false' ? 'not ready for pick up' : 'ready for pick up',
                        orderID: order._id,
                        admin_id: admin
                    }
                });
                res.render('displaySearchResults', {
                    title: "Orders Page",
                    dataOrder: orderResults,
                    userAdmin: admin
                });

            });
        }
        // date
        else if(req.body.dateFrom !== "" && req.body.dateTo !== "") {
            Order.find({
                orderDate: {
                    $gte: new Date(req.body.dateFrom),
                    $lte: new Date(req.body.dateTo)
                }
            }, function (err, orders) {
                if (err)
                    console.log("Error : %s ", err);
                if (!orders)
                    return res.render('404');

                var orderResults = orders.map(function (order) {
                    return {
                        productID: order.productID,
                        productName: order.productName,
                        productQuantity: order.productQuantity,
                        productPrice: order.productPrice,
                        orderDate: dateFormat(order.orderDate),
                        orderStatus: order.orderStatus == 'false' ? 'not ready for pick up' : 'ready for pick up',
                        orderID: order._id,
                        admin_id: admin
                    }

                });
                res.render('displaySearchResults', {
                    title: "Orders Page",
                    dataOrder: orderResults,
                    userAdmin: admin
                });

            });
        }
        // radio button
        else if(req.body.status !== undefined) {
            if (req.body.status == "ready") {
                Order.find({orderStatus: "true"}, function (err, orders) {
                    if (err)
                        console.log("Error : %s ", err);
                    var results = orders.map(function (order) {
                        return {
                            productName: order.productName,
                            productQuantity: order.productQuantity,
                            productPrice: order.productPrice,
                            orderDate: dateFormat(order.orderDate),
                            orderStatus: order.orderStatus == 'false' ? 'not ready for pick up' : 'ready for pick up',
                            orderID: order._id,
                            admin_id: admin
                        }
                    });
                    res.render('adminOrderView', {title: "Orders Page", data: results, userAdmin:admin});
                });
            }
            else if (req.body.status == "notReady") {
                Order.find({orderStatus: "false"}, function (err, orders) {
                    if (err)
                        console.log("Error : %s ", err);
                    var results = orders.map(function (order) {
                        return {
                            productName: order.productName,
                            productQuantity: order.productQuantity,
                            productPrice: order.productPrice,
                            orderDate: dateFormat(order.orderDate),
                            orderStatus: order.orderStatus == 'false' ? 'not ready for pick up' : 'ready for pick up',
                            orderID: order._id,
                            admin_id: admin
                        }
                    });
                    res.render('adminOrderView', {title: "Orders Page", data: results, userAdmin:admin});
                });
            }
        }

        // show all
        else{
            Order.find({}, function (err, orders) {
                if (err)
                    console.log("Error : %s ", err);

                var results = orders.map(function (order) {
                    return {
                        productName: order.productName,
                        productQuantity: order.productQuantity,
                        productPrice: order.productPrice,
                        orderDate:  dateFormat(order.orderDate),
                        orderStatus:order.orderStatus == 'false'?'not ready for pick up':'ready for pick up',
                        orderID: order._id,
                        admin_id: admin
                    }
                });
                res.render('adminOrderView', {title: "Orders Page", data: results, userAdmin:admin});
            });
        }

    };