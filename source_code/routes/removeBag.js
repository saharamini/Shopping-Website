
// handle form submission
module.exports =
    function addToBag(req , res , next) {

        var productID = req.params.productID;

        // check session
        if (req.session.productList === undefined) {
            req.session.productList = [];
        }
        // index of the item that wants to be removed
        var index = req.session.productList.map(function (item){return item.id;}).indexOf(productID);

        // remove from list
        req.session.productList.splice(index, 1);

        res.redirect('/shoppingBag');
    }