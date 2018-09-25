var iceCreams = ["pistachio" , " lemon" , " strawberry" , " lychee" ,  " ube"]

$(document).ready(function(){

    iceCreams.forEach(function(iceCream){
    $("#flavors").text(iceCreams);

  });
});
