var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function displayGreetingCards(req , res , next){
        Product.find({category: 'Greeting Cards'}, function(err , products){
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
            res.render('displayGreetingCards', {title:"Greeting Cards Page", data:results});
        });
    };