var DB = require('./dbConnection.js');
var Product = DB.getModel();

// handle form submission
module.exports =
    function addToBag(req , res , next){
        // check session
        if (req.session.productList === undefined) {
            req.session.productList = [];
        }
        var results = req.session.productList.map(function (item){
            return {
                product_ID: item.id,
                product_Quantity: item.quantity,
                product_Price:(item.price * item.quantity) ,
                product_Name:item.name
            }
        });
        res.render('shoppingBagView', { title: 'Shopping Bag Page', productInfo: results});

    };









