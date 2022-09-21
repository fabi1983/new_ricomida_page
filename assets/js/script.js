var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



$(document).ready(function(){

  $('#enviarFavorito').click(function() {
    alert("Agregaste a favoritos correctamente...")
})
$('#enviarCorreo').click(function() {
    alert("El correo fue enviado correctamente...")
})
//cambio de color ingredientes y preparacion//
$('body').on('click', 'h3', function() {
  $(this).css("color", 'red');
})

//ocultar texto card//

$(".card-title").click(function(){
  $("p").toggle();
});



/*
$('.card-title').click(function() {
  $('.card-text').hide();
})
  $("#ocultar").click(function(e){

    $("#prueba").hide();
  });


  $("#mostrar").click(function(){
    $("#prueba").show();
  });

*/

})