$(document).ready(function () {

  $("#button-add").click(function (e) {
    var ingrediente = $("#in-ingred").val();
    addToList(ingrediente);
    $("#in-ingred").val("");
    $("#in-ingred").focus();
  });

  $("#button-res").click(function () {
    var allIng = $(".list-group-item:not(.list-group-item-warning)")
      .text()
      .split("×");
    var i = allIng.indexOf("");

    if (i !== -1) {
      allIng.splice(i, 1);
    }
    console.log(allIng);

    processIng(allIng);
  });
  
  function addToList(ingred) {
    $(".list-group-item:last-child").after(
      '<li class="list-group-item">' +
        ingred +
        '<button type="button" class="close" aria-label="Close" onclick="$(this).parent().remove();");><span aria-hidden="true">&times;</span></button></li>'
    );
  }

  function processIng(allIng) {
    var tps =[];
    var set = new Set(allIng);
    set.forEach((item) => {
      item.trim();
      console.log(item);
      tps.push(item);
    });
    var i = tps.indexOf("");
    if (i !== -1) {
      tps.splice(i, 1);
    }
    console.log(tps);
  }

  function parseSearch(busqueda) {
      
  }
});
