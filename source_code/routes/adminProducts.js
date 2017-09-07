var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function displayProduct(req , res , next){
        var UserID = req.params.id;
        Product.find({}, function(err , products){
            if(err)
                console.log("Error : %s ",err);

            var results = products.map(function (product){
                return {
                    productName: product.productName,
                    category: product.category,
                    id: product._id,
                    price: product.price,
                    user: UserID
                }
            });
            res.render('displayAdminProductsView', {title:"Products Page", data:results, userAdmin:UserID});
        });
    };