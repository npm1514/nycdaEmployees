var getEmployees = function(){

  $.ajax({
    method: "GET",
    url: "/employees"
  }).then(function(res){
    console.log(res);
    $('.container').empty();
    for(var i = 0; i < res.length; i++){
      var card = `<div class="card">
        <img src="`+ res[i].pic +`"/>
        <h1>`+ res[i].name +`</h1>
        <h3>`+ res[i].jobTitle +`</h3>
        <h3>Years at Company: `+ res[i].yearsAtCompany +`</h3>
        <h3>Age: `+  res[i].age +`</h3>
        <button onclick="deleteEmployee(`+ res[i].id +`)">DELETE</button>
      </div>`;
      $(".container").append(card);
    }
  });
};
getEmployees();

var deleteEmployee = function(id){
  $.ajax({
    method: "DELETE",
    url: "/employees/" + id
  }).then(function(res){
    getEmployees();
  })
}
