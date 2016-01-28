var router = require('express').Router();
// first route
router.get('/', function(req, res){
   // res.send('hi again node');
    res.render('home', {
        layout: 'layout/main_layout',
        title: "Test for VOA"
    });
})

router.get('/about', function(req, res){
      res.render('about');
})


module.exports = router;