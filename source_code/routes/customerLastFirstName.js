
var DB = require('./dbConnectionUser');
var User = DB.getModelUser();

module.exports =
    function display(req , res , next){
    var lastname = req.params.lname;
    var firstname = req.params.fname;
        User.find({userFirstname:{ $regex : firstname,$options:"$i"}, userLastname:{ $regex : lastname,$options:"$i"}}, function(err , customers) {
            if (err)
                console.log("Error : %s ", err);
            var customersList = customers.map(function (client) {
                return {
                    id: client._id,
                    userFirstname: client.userFirstname,
                    userLastname: client.userLastname,
                    userID: client.userID ,
                    userPhone: client.userPhone,
                    userEmail: client.userEmail,
                    userAddress: client.userAddress,
                    userCity: client.userCity,
                    userState: client.userState,
                    userZipCode: client.userZipCode,
                    userGender: client.userGender,
                    userPassword: client.userPassword,
                    userType: client.userType
                }
            });
            res.format({
                'application/json': function() {
                    res.json(customers);
                },
                'application/xml': function () {
                    var customersXml = '<?xml version="1.0"?>\n<customers>\n' +
                        customersList.map(function(p){
                            return '\t<customer id=\"' + p.id + '">'
                                +'\n\t\t<firstName>'+ p.userFirstname + '</firstName>'
                                +'\n\t\t<lastName>'+p.userLastname+'</lastName>\n\t'
                                +'\t<username>'+p.userID+'</username>\n\t'
                                +'\t<password>'+p.userPassword+'</password>\n\t'
                                +'\t<phone>'+p.userPhone+'</phone>\n\t'
                                +'\t<email>'+p.userEmail+'</email>\n\t'
                                +'\t<address>'+p.userAddress+'</address>\n\t'
                                +'\t<city>'+p.userCity+'</city>\n\t'
                                +'\t<state>'+p.userState+'</state>\n\t'
                                +'\t<zipCode>'+p.userZipCode+'</zipCode>\n\t'
                                +'\t<type>'+p.userType+'</type>'
                                + '\n\t</customer>';
                        }).join('\n')+'\n</customers>\n';
                    res.type('application/xml');
                    res.send(customersXml);
                },
                'text/html': function() {
                    var customersHtml = '<ul>\n' +
                        customersList.map(function(p){
                            return ' <li>' + p.id + ' - ' +
                                p.userFirstname + ' - ' +
                                p.userLastname+' - ' +
                                p.userID+' - ' +
                                p.userPassword+' - '+
                                p.userPhone+' - '+
                                p.userEmail+' - '+
                                p.userAddress+' - '+
                                p.userCity+' - '+
                                p.userState+' - '+
                                p.userZipCode+' - '+
                                p.userType
                                + '</li>';
                        }).join('\n') + '\n</ul>\n';

                    res.type('text/html');
                    res.send(customersHtml);
                },

                'text/plain': function() {
                    var customersText =
                        customersList.map(function(p){
                            return p.id + ': ' + p.userFirstname + ' - ' +
                                p.userLastname+', ' +
                                p.userID+', ' +
                                p.userPassword+', '+
                                p.userPhone+', '+
                                p.userEmail+', '+
                                p.userAddress+', '+
                                p.userCity+', '+
                                p.userState+', '+
                                p.userZipCode+', '+
                                p.userType;
                        }).join('\n') + '\n';

                    res.type('text/plain');
                    res.send(customersText);
                },

                'default': function() {
                    res.status(404);
                    res.send("<b>404 - Not Found</b>");
                }
            });
        });
    };