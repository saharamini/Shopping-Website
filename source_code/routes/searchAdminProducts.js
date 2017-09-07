module.exports =
    function displaySearch(req , res , next){
        var id = req.params.idAdmin;
        res.render('displayAdminSearchProductView', {title:"Search Products Page", admin:id});
    };