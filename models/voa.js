
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VoaSchema = new mongoose.Schema({
    film:String,
    starwarscharacters:String,
    reysparents:String,
    whoareysparents:String
   
});



module.exports = mongoose.model('Voa', VoaSchema);
