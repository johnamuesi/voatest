// require express
var express = require('express');
var morgan = require('morgan'); // for  logging
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Voa = require('./models/voa');
var hogan = require('hogan-express');
var path = require('path');
var sass = require('node-sass');

var sassMiddleware = require('node-sass-middleware')


//aka express().listen()...
var app = express();

mongoose.connect('mongodb://voa:voa@ds051655.mongolab.com:51655/voatest', function(err){
    if(err){
        console.log('error connecting to db');
    }
    else{
        console.log("connecting to db success");
    }
});

// MIDDLEWARE
//app.use(express.static(__dirname + '/public'));
app.use(
  sassMiddleware({
    src: __dirname + '/sass/',
    dest: __dirname + '/css',
    debug: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev')); 




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', hogan);

app.set('view options', {layout: true});

app.set('layout', 'layouts/main_layout');

app.set('view engine', 'html');

app.enable('view cache');

app.set('views', __dirname + '/views');

var mainRoutes = require('./routes/main');
var voaRoutes = require('./routes/form')



app.use(mainRoutes);
app.use(voaRoutes);






app.listen(3000, function(err){
    if(err) throw err;
    console.log("Server running")
});
    