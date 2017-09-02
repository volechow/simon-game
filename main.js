function playCombi(combi) {
  combi.forEach(function(field) {
    $("#"+field).effect("highlight", {}, 3000);
  });
}

function chooseRandomField(fields) {
  // choose a random field
  var shuffled_fields = fields.sort(function() {
      return 0.5 - Math.random();
  });
  return shuffled_fields[0];
}

$(document).ready(function() {
  var turn = 0;
  var fields = ["red","green","yellow","blue"];
  var combi = []


  for (var i = 0; i <= 5; i++) {
    var random_field = chooseRandomField(fields);
    combi.push(random_field);
  }
  console.log(combi);
  playCombi(combi);

});


