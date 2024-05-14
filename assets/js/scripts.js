
//Esconder párrafo en carta
$(".card-title").click(function () {
    $("p").toggle("hide");
  });

// Mensaje de alerta a botón enviar en Contacto
  $(".bttn").click(function () {
    alert("Su mensaje ha sido recibido")
  })

  //Al presionar doble click en los titulos de sección, cambia a color verde el texto.
  $("h2").dblclick(function () {
    $(this).css({
      color: "green"
    });
  });