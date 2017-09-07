
var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

var dateFormat = require('dateformat');

module.exports =
    function display(req , res , next){
        var id = req.params.id;
        Order.find({_id:id}, function(err , orders) {
            if (err)
                console.log("Error : %s ", err);
            var ordersList = orders.map(function (product) {
                return {
                    productID: product.productID,
                    customerID: product.customerID,
                    productName: product.productName,
                    productQuantity: product.productQuantity,
                    productPrice: product.productPrice,
                    orderDate:  dateFormat(product.orderDate),
                    orderStatus:product.orderStatus == 'false'?'not ready for pick up':'ready for pick up',
                    id: product._id
                }
            });
            res.format({
                'application/json': function() {
                    res.json(orders);
                },
                'application/xml': function () {
                    var ordersXml = '<?xml version="1.0"?>\n<orders>\n' +
                        ordersList.map(function(p){
                            return '\t<order id=\"' + p.id + '">'
                                +'\n\t\t<productID>'+ p.productID + '</productID>'
                                +'\n\t\t<productName>'+p.productName+'</productName>\n\t'
                                +'\t<customerID>'+p.customerID+'</customerID>\n\t'
                                +'\t<quantity>'+p.productQuantity+'</quantity>\n\t'
                                +'\t<price>'+p.productPrice+'</price>\n\t'
                                +'\t<date>'+p.orderDate+'</date>\n\t'
                                +'\t<status>'+p.orderStatus+'</status>'
                                + '\n\t</order>';
                        }).join('\n')+'\n</orders>\n';
                    res.type('application/xml');
                    res.send(ordersXml);
                },
                'text/html': function() {
                    var ordersHtml = '<ul>\n' +
                        ordersList.map(function(p){
                            return ' <li>' + p.id + ' - ' +
                                p.productID + ' - '+
                                p.productName+' - '+
                                p.customerID + ' - '+
                                p.productQuantity + ' - '+
                                p.productPrice + ' - '+
                                p.orderDate + ' - '+
                                p.orderStatus + '</li>';
                        }).join('\n') + '\n</ul>\n';

                    res.type('text/html');
                    res.send(ordersHtml);
                },

                'text/plain': function() {
                    var ordersText =
                        ordersList.map(function(p){
                            return p.id + ': ' +  p.productID + ', '+p.productName+', '+p.customerID+', '+p.productQuantity+', '+p.productPrice+', '+p.orderDate+', '+p.orderStatus;
                        }).join('\n') + '\n';

                    res.type('text/plain');
                    res.send(ordersText);
                },

                'default': function() {
                    res.status(404);
                    res.send("<b>404 - Not Found</b>");
                }
            });
        });
    };