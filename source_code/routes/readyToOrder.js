var DB = require('./dbConnection.js');
var Product = DB.getModel();

// handle form submission
module.exports =
    function addToBag(req , res , next){

        var clientID = req.params.id;
        var totalPrice = 0; // total price

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
        req.session.productList.map(function (item) {
            totalPrice = totalPrice + (item.price * item.quantity);
        });
        res.render('readyToOrderView', { title: 'Checkout Page', productInfo: results, client_ID: clientID, total:totalPrice});

    };









