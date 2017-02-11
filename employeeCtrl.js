var employeeList = require('./employeeList');

module.exports = {
  read: function(req, res){
    res.send(employeeList);
  },
  create: function(req, res){
    employeeList.push(req.body);
    res.send(employeeList);
  },
  update: function(req, res){
    for(var i = 0; i < employeeList.length; i++){
      if(employeeList[i].id == req.params.id){
        employeeList.splice(i, 1, req.body);
        break;
      }
    }
    res.send(employeeList);
  },
  delete: function(req, res){
    for(var i = 0; i < employeeList.length; i++){
      if(employeeList[i].id == req.params.id){
        employeeList.splice(i, 1);
        break;
      }
    }
    res.send(employeeList);
  }
}
