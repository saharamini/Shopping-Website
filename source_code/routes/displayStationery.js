var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function displayStationery(req , res , next){
        Product.find({category: 'Stationery'}, function(err , products){
            if(err)
                console.log("Error : %s ",err);

            var results = products.map(function (product){
                return {
                    productName: product.productName,
                    category: product.category,
                    price: product.price,
                    id: product._id
                }
            });
            res.render('displayStationery', {title:"Stationery", data:results});
        });
    };