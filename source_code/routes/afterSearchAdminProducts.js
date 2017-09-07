var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function afterSearch(req , res , next){
        var admin = req.params.idAdmin;
        // product name and category and price
        if(req.body.fprice !== "" && req.body.categoryList !== "" && req.body.fproductName !== "" ) {
            Product.find({price: {$lte: parseInt(req.body.fprice)},category: req.body.categoryList, productName: { $regex : req.body.fproductName,$options:"$i"}}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }
        // product name and price
        else if(req.body.fprice !== "" && req.body.fproductName !== "" ) {
            Product.find({price: {$lte: parseInt(req.body.fprice)},productName: { $regex : req.body.fproductName,$options:"$i"}}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }
        // product name and category
        else if(req.body.fproductName !== "" && req.body.categoryList !== "" ) {
            Product.find({productName: { $regex : req.body.fproductName,$options:"$i"},category: req.body.categoryList}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }
        // price and category
        else if(req.body.fprice !== "" && req.body.categoryList !== "" ) {
            Product.find({price: {$lte: parseInt(req.body.fprice)},category: req.body.categoryList}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }
        // category
        else if(req.body.categoryList !== "") {
            Product.find({category: req.body.categoryList}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                if (req.body.categoryList == "Easter Gifts") {
                    res.render('displayAdminEasterGifts', {title: "Easter Gifts Page", data: results, userAdmin:admin});
                }
                else if (req.body.categoryList == "Notebook") {
                    res.render('displayAdminNotebook', {title: "Notebook Page", data: results, userAdmin:admin});
                }
                else if (req.body.categoryList == "Stationery") {
                    res.render('displayAdminStationery', {title: "Stationery Page", data: results, userAdmin:admin});
                }
                else if (req.body.categoryList == "Greeting Cards") {
                    res.render('displayAdminGreetingCards', {title: "Greeting Cards Page", data: results, userAdmin:admin});
                }
                else if (req.body.categoryList == "Bath & Body") {
                    res.render('displayAdminBathBody', {title: "Bath & Body Page", data: results, userAdmin:admin});
                }
                else if (req.body.categoryList == "Candles") {
                    res.render('displayAdminCandles', {title: "Candles Page", data: results, userAdmin:admin});
                }

            });
        }
        // product name
        else if(req.body.fproductName !== "") {
            // we use the $options parameter with value $i.
            Product.find({productName: { $regex : req.body.fproductName,$options:"$i"}}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }
        // price
        else if(req.body.fprice !== "") {
            Product.find({price: {$lte: parseInt(req.body.fprice)}}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }
        // show all
        else{
            Product.find({}, function (err, products) {
                if (err)
                    console.log("Error : %s ", err);

                var results = products.map(function (product) {
                    return {
                        productName: product.productName,
                        category: product.category,
                        price: product.price,
                        id: product._id,
                        user: admin
                    }
                });
                res.render('displayAdminProductsView', {title: "Products Page", data: results, userAdmin:admin});
            });
        }

    };