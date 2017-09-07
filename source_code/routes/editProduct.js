var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function editProduct(req , res , next){
        var user = req.params.idAdmin;
        var id = req.params.idProduct;
        Product.findById(id, function (err, product){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!product)
                return res.render('404');
            res.render('editProductView',
                {title:"Edit " + product.productName,
                    data: {
                        id: product._id,
                        productName: product.productName,
                        category: product.category,
                        description: product.description ,
                        price: product.price,
                        quantity: product.quantity,
                        imageURL: product.imageURL
                    },
                    adminID: user
                });
        });
    };

