module.exports =
    function displaySearch(req , res , next){
        var id = req.params.idAdmin;
        res.render('displayAdminSearchOrderView', {title:"Search Orders Page", admin:id});
    };