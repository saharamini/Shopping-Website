var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function saveProduct(req , res , next){
        var user = req.params.idAdmin;
        var id = req.params.idProduct;

        Product.findById(id, function (err, product){
            if(err)
                console.log("Error Selecting : %s ", err);
            if (!product){ return res.render('404');}

            product.productName= req.body.pname;
            if(req.body.category == "Greeting Cards"){product.category= "Greeting Cards"; }
            if(req.body.category == "Notebook"){product.category= "Notebook"; }
            if(req.body.category == "Stationery"){product.category= "Stationery"; }
            if(req.body.category == "Easter Gifts"){product.category= "Easter Gifts"; }
            if(req.body.category == "Bath & Body"){product.category= "Bath & Body";}
            if(req.body.category == "Candles"){product.category= "Candles"; }
            product.description=  req.body.description ;
            product.price=  req.body.price;
            product.quantity=  req.body.quantity;
            console.log(req.body.pic);
            if(req.body.pic !== "")
                product.imageURL=  "/images/"+ req.body.pic;

            product.save(function (err) {
                if (err)
                    console.log("Error updating : %s ",err );
                res.redirect('/admin/'+user+'/products');
            });
        });
    };
