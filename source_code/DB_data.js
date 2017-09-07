var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var credentials = require("./credentials.js");

var dbUrl = 'mongodb://' + credentials.host + ':27017/' + credentials.database;

var connection = mongoose.createConnection(dbUrl);

var ProductDb = require('./product_Db.js');
var UserDb = require('./user_Db.js');

var Product = ProductDb.getModel(connection);
var User = UserDb.getModel(connection);

connection.on("open", function(){
	
	// create and save document objects
	var product;

	product = new Product({
        productName: 'Fresh Linen Small',
        category: 'Candles',
        description: 'Freshen up any space with this amazing candle. Scents of fresh crisp linen combine with a touch of soft musk and ocean breeze for a clean, fresh fragrance.' ,
        price: 7.95,
        quantity: 10,
        imageURL:'/images/FreshLinenSmall.jpg'
	}); 
	product.save();

    product = new Product({
        productName: 'Hello Panda',
        category: 'Notebook',
        description: 'An adorable panda greets you from the cover of this darling cloth covered notebook. A fun lime green elastic band keeps your thoughts and notes secure.' ,
        price: 9.95,
        quantity: 5,
        imageURL:'/images/HelloPanda.jpg'
    });
    product.save();

    product = new Product({
        productName: 'Hummingbird Boxed',
        category: 'Stationery',
        description: 'A majestic hummingbird is accented with purple glitter on this sweet note card that is sure to brighten anyone day!' ,
        price: 10.95,
        quantity: 15,
        imageURL:'/images/HummingbirdBoxed.jpg'
    });
    product.save();

    product = new Product({
        productName: 'Easter Joy Dessert Plates',
        category: 'Easter Gifts',
        description: 'Host your Easter gathering with these cute paper plates that feature a bunny soaring above a mountain of Easter eggs. Perfect for appetizers or dessert.' ,
        price: 4.95,
        quantity: 2,
        imageURL:'/images/EasterJoyDessertPlates.jpg'
    });
    product.save();

    product = new Product({
        productName: 'Dream Bubble Bath',
        category: 'Bath & Body',
        description: 'Surround yourself in luxury with this indulging bubble bath. The delicious white tea and honeysuckle scents leave you feeling clean and fresh.' ,
        price: 49.00,
        quantity: 2,
        imageURL:'/images/DreamBubbleBath.jpg'
    });
    product.save();

    product = new Product({
        productName: 'Taylor Swift Lollipop Birthday Card',
        category: 'Greeting Cards',
        description: 'Wish her the sweetest birthday with this fun card from our Taylor Swift collection. A lollipop is created out of felt and has a fun pink and orange swirl that is sure to stand out at any celebration.' ,
        price: 7.95,
        quantity: 33,
        imageURL:'/images/TaylorSwiftLollipop.jpg'
    });
    product.save();

    product = new Product({
        productName: 'Handmade Cardigan & Bowtie Birthday Card',
        category: 'Greeting Cards',
        description: 'Hand them this handsome birthday card. Real fabric creates a gray cardigan, button-down shirt and bow tie on this well-dressed, hip card.' ,
        price: 8.95,
        quantity: 55,
        imageURL:'/images/HandmadeCardigan.jpg'
    });
    product.save();

    var user;

    user = new User({
        userFirstname: 'John',
        userLastname: 'Smith',
        userID: 'jsmith' ,
        userPhone: 6127319831,
        userEmail: 'john.smith@gmail.com',
        userAddress: '123 Main St.',
        userCity: 'Boston',
        userState: 'MA',
        userZipCode: 02215,
        userGender: 'male',
        userPassword: '12345',
        userType: 'customer'
    });
    user.save();

    user = new User({
        userFirstname: 'Sara',
        userLastname: 'Smith',
        userID: 'ssmith' ,
        userPhone: 6127319831,
        userEmail: 'sara.smith@gmail.com',
        userAddress: '123 Main St.',
        userCity: 'Boston',
        userState: 'MA',
        userZipCode: 02215,
        userGender: 'female',
        userPassword: '12345',
        userType: 'customer'
    });
    user.save();

    user = new User({
        userFirstname: 'David',
        userLastname: 'Dao',
        userID: 'ddao' ,
        userPhone: 6127319831,
        userEmail: 'david.dao@gmail.com',
        userAddress: '254 Main St.',
        userCity: 'Allston',
        userState: 'MA',
        userZipCode: 02134,
        userGender: 'male',
        userPassword: '12345',
        userType: 'customer'
    });
    user.save();

    user = new User({
        userFirstname: 'Sahar',
        userLastname: 'Amini',
        userID: 'samini' ,
        userPhone: 6127319833,
        userEmail: 'samini@bu.edu',
        userAddress: '808 Commonwealth Ave.',
        userCity: 'Boston',
        userState: 'MA',
        userZipCode: 02215,
        userGender: 'female',
        userPassword: '12345',
        userType: 'admin'
    });
    user.save();

});







