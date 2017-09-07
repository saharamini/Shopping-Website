var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function saveProduct(req , res , next){
        var user = req.params.idAdmin;
        var product = new Product({
            productName: req.body.pname,
            category: req.body.category,
            description:  req.body.description,
            price:  req.body.price,
            quantity:  req.body.quantity,
            imageURL:  "/images/"+ req.body.pic

        });

        product.save(function (err) {
            if (err)
                console.log("Error : %s ", err);
            res.redirect('/admin/'+user+'/products');
        });
    };

