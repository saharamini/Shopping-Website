
var _ = require('underscore');
module.exports =
    function addToBag(req , res , next) {

        var customerID = req.params.customerID;

        // check session
        if (req.session.customer === undefined) {
            req.session.customer = [];
        }
        // remove duplicated customer id
        req.session.customer = _.uniq(req.session.customer, 'id');

        // index of the item that wants to be removed
        var index = req.session.customer.map(function (item){return item.id;}).indexOf(customerID);

        // remove from list
        req.session.customer.splice(index, 1);

        res.redirect('/loginRegisterView');
    }