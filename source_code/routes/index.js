var express = require('express');
var router = express.Router();

// other modules

// display home page
var displayHomepage = require("./displayHomepage");
// display products page
var displayProducts = require("./displayProducts");

// display a product (view button)
var viewProduct = require("./viewProduct");

// display Greeting Cards category
var displayGreetingCards = require("./displayGreetingCards");
// display Notebook category
var displayNotebook = require("./displayNotebook");
// display Stationery category
var displayStationery = require("./displayStationery");
// display Easter Gifts category
var displayEasterGifts = require("./displayEasterGifts");
// display Bath and Body category
var displayBathBody = require("./displayBathBody");
// display Candles category
var displayCandles = require("./displayCandles");

// display search page
var displaySearch = require("./displaySearch");
// display search result
var afterSearch = require("./afterSearch");

// display login and registration page
var loginRegisterView = require("./loginRegisterView");
// display create an account page
var createNewAccount = require("./createNewAccount");

// check if a user log in as an admin or a customer
var login = require("./login");

// display admin page
var loginAdmin = require("./loginAdmin");



// Admin page
var adminClients = require("./adminClients");
var adminProducts = require("./adminProducts");
var adminSearch = require("./adminSearch");
var adminOrders = require("./adminOrders");

// edit a product
var editProduct = require("./editProduct");
// save a product's changes after edit
var saveProduct = require("./saveProduct");

// add customer
var saveCustomer = require("./saveCustomer");

// delete a product
var deleteProduct = require("./deleteProduct");

// display add a product page
var addProduct = require("./addProduct");
// save a new product
var addProductPost = require("./addProductPost");

// view a product (view button) - Admin
var viewAdminProduct = require("./viewAdminProduct");

// view a client (view button)
var viewClient = require("./viewClient");

// edit a client
var editClient = require("./editClient");
// save a client's changes after edit
var saveClient = require("./saveClient");

// delete a client
var deleteClient = require("./deleteClient");

// display search clients
var searchAdminClients = require("./searchAdminClients");
// display search clients result
var afterSearchAdminClients = require("./afterSearchAdminClients");

// display search products
var searchAdminProducts = require("./searchAdminProducts");
// display search products result
var afterSearchAdminProducts = require("./afterSearchAdminProducts");

// display search orders
var searchAdminOrders = require("./searchAdminOrders");
var afterSearchAdminOrders = require("./afterSearchAdminOrders");

var sendOrder = require("./sendOrder");

var readyForPickUp = require("./readyForPickUp");

var notReadyForPickUp = require("./notReadyForPickUp");
//------------------------------------------------------------------------- Add To Bag
var addToBag = require('./addToBag');

var removeBag = require('./removeBag');

var shoppingBag = require('./shoppingBag');

//------------------------------------------------------------------------- Customer
// display customer page
var loginCustomer = require("./loginCustomer");

var readyToOrder = require("./readyToOrder");

var orderStatus = require("./orderStatus");

var updateProfile = require("./updateProfile");

var afterUpdate = require("./afterUpdate");

var logoutClient = require("./logoutClient");

// view status details
var viewStatusDetail =require("./viewStatusDetail");

//-------------------------------------------------------------------- XML and JSON format

var products = require("./products");
var customers = require("./customers");
var orders = require("./orders");
var customerLastFirstName = require("./customerLastFirstName");
var customerID = require("./customerID");
var orderID = require("./orderID");
var productName = require("./productName");
var productID = require("./productID");

//----------------------------------------------------------------------------------------------------------------------
// router specs
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

// ---------------------------------------------------------------------------------------------------------------------

// display home page
router.get('/home', displayHomepage);

// display products page
router.get('/products', displayProducts);

// display search page
router.get('/search', displaySearch);
// display search result
router.post('/search/products', afterSearch);

// display a product (view button)
router.get('/products/view/:id', viewProduct);

// display each category
router.get('/products/GreetingCards', displayGreetingCards);
router.get('/products/Notebook', displayNotebook);
router.get('/products/Stationery', displayStationery);
router.get('/products/EasterGifts', displayEasterGifts);
router.get('/products/BathBody', displayBathBody);
router.get('/products/Candles', displayCandles);

// display login and registration page
router.get('/loginRegisterView', loginRegisterView);
// check if a user log in as an admin or a customer
router.post('/login', login);

// display admin page
router.get('/login/admin/:id', loginAdmin);

// Create an account
router.get('/createNewAccount', createNewAccount);
router.post('/customer/add', saveCustomer);

//-------------------------------------------------------------------------- Admin page
// Admin page
router.get('/admin/:id/clients', adminClients);
router.get('/admin/:id/products', adminProducts);
router.get('/admin/:id/search', adminSearch);
router.get('/admin/:id/orders', adminOrders);

// edit a product
router.get('/admin/:idAdmin/products/edit/:idProduct', editProduct);
// save a product's changes after edit
router.post('/admin/:idAdmin/products/edit/:idProduct', saveProduct);

// display add a product page
router.get('/admin/:idAdmin/addProduct', addProduct);
// save a new product
router.post('/admin/:idAdmin/add', addProductPost);

// delete a product
router.get('/admin/:idAdmin/products/delete/:idProduct', deleteProduct);

// view a product (view button) - Admin
router.get('/admin/:idAdmin/products/view/:idProduct', viewAdminProduct);

// view a client (view button)
router.get('/admin/:idAdmin/clients/view/:idClient', viewClient);

// edit a client
router.get('/admin/:idAdmin/clients/edit/:idClient', editClient);
// save a client's changes after edit
router.post('/admin/:idAdmin/clients/edit/:idClient', saveClient);

// delete a client
router.get('/admin/:idAdmin/clients/delete/:idClient', deleteClient);

// display search clients
router.get('/admin/:idAdmin/searchAdminClients', searchAdminClients);
// display search clients result
router.post('/admin/:idAdmin/search/clients', afterSearchAdminClients);
router.get('/admin/:idAdmin/search/clients', afterSearchAdminClients);

// display search products
router.get('/admin/:idAdmin/searchAdminProducts', searchAdminProducts);
// display search products result
router.post('/admin/:idAdmin/search/products', afterSearchAdminProducts);
router.get('/admin/:idAdmin/search/products', afterSearchAdminProducts);

// ready for pick up
router.get('/ready/:adminID/:orderID', readyForPickUp);

// Not ready for pick up
router.get('/notReady/:adminID/:orderID', notReadyForPickUp);

// display search orders
router.get('/admin/:idAdmin/searchAdminOrders', searchAdminOrders);
// after search orders
router.post('/admin/:idAdmin/search/orders', afterSearchAdminOrders );

// view order details
router.get('/viewStatus/:admin_id/:orderID', viewStatusDetail);

//-------------------------------------------------------------------------- Add to Bag
// not log in
router.get('/addToBag/:productID/:productQuantity', addToBag);
// remove from Bag
router.get('/remove/shoppingBag/:productID', removeBag);
// show shopping bag
router.get('/shoppingBag', shoppingBag);

//-------------------------------------------------------------------------- Customer
// display customer page
router.get('/login/customer/:id', loginCustomer);

router.get('/customer/:customerID/info', updateProfile);

router.get('/customer/:id/orders', readyToOrder);

// order status
router.get('/customer/:idCustomer/status', orderStatus);

//customer submit the order
router.get('/sendOrder/:customerID', sendOrder);

// click on update button
router.post('/customer/:idCustomer/update', afterUpdate);

// logout
router.get('/logout/:customerID', logoutClient);

//----------------------------------------------------JSON Format and XML Format


// customers
router.get('/api/customers', customers);
router.get('/api/customers/:fname/:lname', customerLastFirstName);
router.get('/api/customers/:id',customerID);

// orders
router.get('/api/orders', orders);
router.get('/api/orders/:id',orderID);

// products
router.get('/api/products', products);
router.get('/api/products/:name', productName);
router.get('/api/products/:id',productID);

module.exports = router;
