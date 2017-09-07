var DB = require('./dbConnection.js');
var Product = DB.getModel();

// handle form submission
module.exports =
    function addToBag(req , res , next){
        var productQuantity = req.params.productQuantity;
        var productID = req.params.productID;

        // find product name
        Product.findOne({_id:productID},function (err, product){
            var productname = product.productName;
            var productPrice = product.price;

            // check session
            if (req.session.productList === undefined) {
                req.session.productList = [];
            }

            var data = {id:productID, quantity:productQuantity, price:productPrice, name:productname};
            req.session.productList.push(data);
            var results = req.session.productList.map(function (item){
                return {
                    product_ID: item.id,
                    product_Quantity: item.quantity,
                    product_Price:(item.price * item.quantity) ,
                    product_Name:item.name
                }
            });

            res.render('addToBagView', { title: 'Shopping Bag Page', productInfo: results});
        });
    };









