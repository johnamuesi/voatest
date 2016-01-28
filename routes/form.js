var router = require('express').Router();
var Voa = require('../models/voa');

router.get('/results', function(req, res){
    
    Voa.find(function(err, voas) {
        if (err) res.send(err);

            res.json('results', {voas:voas});
         });
      
})

router.post('/form', function(req, res, next){
    var voa = new Voa();
    voa.film = req.body.film;
    voa.starwarscharacters = req.body.starwarscharacters;
    voa.reysparents = req.body.reysparents;
    voa.whoareysparents = req.body.whoareysparents;
    
    voa.save(function(err){
         if(err) return next(err);
        
       // res.json({messge: "voa test submitted"}); 
        return res.redirect('/results')
    })
    
});

module.exports = router;