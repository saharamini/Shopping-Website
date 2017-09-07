
module.exports =
	function displayHomepage(req , res , next){
      res.render('displayHomepageView', {title:"Home Page"});
};
