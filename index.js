var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var employeeCtrl = require('./employeeCtrl');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + "/public"));

app.get("/employees", employeeCtrl.read);
app.post("/employees", employeeCtrl.create);
app.put("/employees/:id", employeeCtrl.update);
app.delete("/employees/:id", employeeCtrl.delete);

app.listen(9999, function(){
  console.log("Michael Scott is listening on 9999")
});
