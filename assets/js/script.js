// Activar tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//smooth scroll
$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var gato = this.hash;
    $("html").animate(
      {
        scrollTop: $(gato).offset().top - 20,
      },
      800
    );
  });
});

//cambia color de los iconos de la seccion "quienes-somos" y la caja que los contiene
$(".quienes-somos .info .icono-container i").on("dblclick",function(){
  
  $(".quienes-somos .info .icono-container").css("background","blue")
});

//alert en click "read more"

$(".quienes-somos .info h5").click(function(){
  alert("Link en construccion");
});


var top1 = $(".quienes-somos").offset().top;
if(!top1){
  var top1 = $(".destacados").offset().top;
}

$(document).scroll(function() {
  
  var scrollPos = $(document).scrollTop();
  
  
  if (scrollPos >= top1-40) {
    $("nav").css('background-color', '#5bc0de');    
  }
  else{
    $("nav").css('background-color', 'transparent');
  }

  });

