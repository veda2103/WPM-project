var express = require('express');
var router = express.Router();
var homePageController = function(req,res){
    res.render('index', {title: 'Welcome to AI-B class'});
};
router.get('/', homePageController);
module.exports = router;