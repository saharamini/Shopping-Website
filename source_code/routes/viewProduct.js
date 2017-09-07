var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function editCourse(req , res , next){
        var id = req.params.id;
        Product.findById(id, function (err, product){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!product)
                return res.render('404');
            var disableButton = false;
            if (product.quantity === 0) disableButton = true;
            res.render('aProductView',
                {title: product.productName,
                    data: {
                        category: product.category,
                        description: product.description ,
                        price: product.price,
                        quantity: product.quantity,
                        imageURL: product.imageURL,
                        id: product._id,
                        disable: disableButton
                    }
                });
        });
    };