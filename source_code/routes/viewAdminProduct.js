var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function editCourse(req , res , next){
        var id = req.params.idProduct;
        Product.findById(id, function (err, product){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!product)
                return res.render('404');
            res.render('aProductViewAdmin',
                {title: product.productName,
                    data: {
                        category: product.category,
                        description: product.description ,
                        price: product.price,
                        quantity: product.quantity,
                        imageURL: product.imageURL,
                        id: product._id
                    }
                });
        });
    };