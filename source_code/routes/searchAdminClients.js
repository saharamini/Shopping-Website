module.exports =
    function displaySearch(req , res , next){
        var id = req.params.idAdmin;
        res.render('displayAdminSearchClientView', {title:"Search Clients Page", admin:id});
    };