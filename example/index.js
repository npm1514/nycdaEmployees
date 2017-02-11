var express = require('express'); //makes coding node really easy
var bodyParser = require('body-parser'); //decodes json into JS objects
var cors = require('cors'); //headers
var mongoose = require('mongoose');


var dogCtrl = require('./controllers/dogCtrl'); //calling in controller document

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); //This takes in any code that is url encoded and translates it to appropriate json format
app.use(express.static(__dirname + '/public')); //automatically runs front end index.html when nodemon runs


//end points
app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

mongoose.connect("mongodb://localhost:27017/dogs"); //connects to Mongo local 27017
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

//localhost:8000
app.listen(8000, function(){
  console.log("listening to 8000");
});
