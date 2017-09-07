
module.exports =  function loginUser(req , res , next) {

    // check session
    if (req.session.customer === undefined) {
        req.session.customer = [];
    }

    if(req.session.customer.length > 0) {
        // get user ID
        res.redirect('/login/customer/'+req.session.customer[0].id);
    }
    else{
        res.render('displayLoginRegisterView', {title: "Sign In or Create an Account"});
    }

}
