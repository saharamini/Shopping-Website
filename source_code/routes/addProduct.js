module.exports =
        function addProduct(req , res , next){
            var UserID = req.params.idAdmin;
                res.render('addProductView', {title:"Add a Product", userAdmin:UserID});
        };