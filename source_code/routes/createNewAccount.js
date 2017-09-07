module.exports =
    function addCustomer(req , res , next){
        res.render('addCustomerView', {title:"Create an Account"});
    };
