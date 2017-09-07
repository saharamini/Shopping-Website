var DB = require('./dbConnectionOrder.js');
var Order = DB.getModelOrder();

var DBProduct = require('./dbConnection');
var Product = DBProduct.getModel();

module.exports =
    function addOrder(req , res , next){
        var clientID = req.params.customerID;
        // check session
        if (req.session.productList === undefined) {
            req.session.productList = [];
        }

        var shoppingBag = req.session.productList.map(function (item){
            return {
                product_ID: item.id,
                product_Quantity: item.quantity,
                product_Price:(item.price * item.quantity) ,
                product_Name:item.name
            }
        });

        shoppingBag.map(function(product){
            var order = new Order({
                customerID: clientID,
                productID: product.product_ID,
                productName: product.product_Name,
                productQuantity: product.product_Quantity,
                productPrice: product.product_Price,
                // false means the order is not ready for pick up
                orderStatus: 'false'
            });
            order.save(function (err) {
                if (err)
                    console.log("Error : %s ", err);
            });
            // find the product and reduce quantity
            Product.findOne({_id:product.product_ID},function (err, p) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                var currrentQ = p.quantity - product.product_Quantity;
                Product.update({_id:p._id}, { $set:{quantity:currrentQ}}).exec();
            });
        });


        res.redirect('/login/customer/'+clientID);

    };
