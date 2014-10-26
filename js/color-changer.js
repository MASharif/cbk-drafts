$(document).ready(function(){
  $("body").mousemove(function(position){
    var r = position.pageX;
    var g = position.pageY;
    var b = r+g;
    positionToNumber(r, g, b);
  });

  function positionToNumber(r, g, b){
    while (r > 256){
      r = (r-256)
    }
    while (g > 256){
      g = (g-256)
    }
    while (b > 256){
      b = (b-256)
    }
    changeBackgroundColor(r, g, b);
  }

  function changeBackgroundColor(r, g, b){
    $( "body" ).css({'background-color': 'rgb('+ r +','+
    g +','+ b +')'});
    $("#currentColor").text('rgb('+ r +','+g +','+ b +')');
  }

  //Catch current color
  $("body").on( "click", function() {
    $("#currentColor").addClass("currentColor");
    $("body").unbind("mouseenter mouseleave mousemove");
  });

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });
});