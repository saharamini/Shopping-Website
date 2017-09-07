var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function deleteProduct(req , res , next){
        var user = req.params.idAdmin;
        var id = req.params.idProduct;
        Product.remove({_id:id}, function (err, product){
            if(err)
                console.log("Error Selecting : %s ", err);
            res.redirect('/admin/'+user+'/products');
        });
    };