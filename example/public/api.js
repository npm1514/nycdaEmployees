var getDogs, postDog, putDog, deleteDog;
$(document).ready(function(){
  var dogs;

  getDogs = function() {
    $(".rowDogs").remove();
    $.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      dogs = response;
      for (var i = 0; i < dogs.length; i++) {
        $(".tableDogs").append(`
          <tr class="rowDogs">
          <td>
          <input id='` + i + `name' type="text" value="` + dogs[i].name + `">
          </td>
          <td>
          <input id='` + i + `breed'  id='` + i + `name'  type="text" value="` + dogs[i].breed + `">
          </td>
          <td>
          <input id='` + i + `color'  type="text" value="` + dogs[i].color + `">
          </td>
          <td>
          <button id="putDog" onClick="putDog(value, {name:` + i + `, breed:` + i + ` , color:` + i + ` })" type="button" value="` + dogs[i]._id + `">PUT</button>
          </td>
          <td>
          <button id="deleteDog" onClick="deleteDog(value);" type="button" value="` + dogs[i]._id + `">DELETE</button>
          </td>
          </tr>`);
      }
    });
  };

  postDog = function(dog) {
    $.ajax({
      method: 'POST',
      url: '/dogs',
      data: dog
    }).then(function(response){
      getDogs();
    });
  };

  putDog = function(id, dog){
    var newdog = {
      name: $("#" + dog.name + "name").val(),
      breed: $("#" + dog.breed + "breed").val(),
      color: $("#" + dog.color + "color").val()
    };
    $.ajax({
      method: 'PUT',
      url: '/dogs/' + id,
      data: newdog
    }).then(function(response){
      getDogs();
    });
  };

  deleteDog = function(id){
    console.log("crash2");
    $.ajax({
      method: 'DELETE',
      url: '/dogs/' + id
    }).then(function(response){
      getDogs();
    });
  };



  $("#getDogs").click(function(){
    getDogs();
  });

  $("#postDog").click(function(){
    // postDog();
    postDog({
      name:$("#dogName").val(),
      breed:$("#dogBreed").val(),
      color:$("#dogColor").val()
    });
  });
  // $("#putDog").click(function(){
  //   putDog({
  //     name:$("#dogName").val(),
  //     breed:$("#dogBreed").val(),
  //     color:$("#dogColor").val()
  //   }, $("input:value").val());
  // })


});
