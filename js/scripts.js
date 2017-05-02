$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").fadeIn(3000);
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
      $('#work-responses').append(capitalWorkTransportationMode + "<br>");
    });
    $("#fun-responses").fadeIn(3000);
   $("input:checkbox[name=fun-transportation]:checked").each(function(){
     var funTransportationMode = $(this).val();
     $('#fun-responses').append(funTransportationMode + "<br>");
   });
    $('#transportation_survey').hide();
  });
});
