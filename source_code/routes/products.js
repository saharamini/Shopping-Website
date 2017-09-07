
var DB = require('./dbConnection.js');
var Product = DB.getModel();

module.exports =
    function display(req , res , next){
        Product.find({}, function(err , products) {
            if (err)
                console.log("Error : %s ", err);
            var productsList = products.map(function (product) {
                return {
                    productName: product.productName,
                    category: product.category,
                    price: product.price,
                    quantity: product.quantity,
                    id: product._id
                }
            });
            res.format({
                'application/json': function() {
                    res.json(products);
                },
                'application/xml': function () {
                    var productsXml = '<?xml version="1.0"?>\n<products>\n' +
                        productsList.map(function(p){
                            return '\t<product id=\"' + p.id + '">'
                                +'\n\t\t<name>'+ p.productName + '</name>'
                                +'\n\t\t<category>'+p.category+'</category>\n\t'
                                +'\t<price>'+p.price+'</price>\n\t'
                                +'\t<quantity>'+p.quantity+'</quantity>'
                                + '\n\t</product>';
                        }).join('\n')+'\n</products>\n';
                    res.type('application/xml');
                    res.send(productsXml);
                },
                'text/html': function() {
                    var productsHtml = '<ul>\n' +
                        productsList.map(function(p){
                            return ' <li>' + p.id + ' - ' +
                                p.productName + ' - '+
                                p.category+' - '+'' +
                                p.price + ' - '+
                                p.quantity + '</li>';
                        }).join('\n') + '\n</ul>\n';

                    res.type('text/html');
                    res.send(productsHtml);
                },

                'text/plain': function() {
                    var productsText =
                        productsList.map(function(p){
                            return p.id + ': ' + p.productName+', '+p.category+', '+p.price+', '+p.quantity;
                        }).join('\n') + '\n';

                    res.type('text/plain');
                    res.send(productsText);
                },

                'default': function() {
                    res.status(404);
                    res.send("<b>404 - Not Found</b>");
                }
            });
        });
    };