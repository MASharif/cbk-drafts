$(document).ready(function(){

  //Change background color, text
  function changeBackgroundColor(r, g, b, a){
    $("body").css({"background-color": "rgba("+ r +","+g +","+ b +"," + a +")"});
  }

  $("#r, #g, #b, #a").change(function() {       
    var r = $("#r").val();       
    var g = $("#g").val();       
    var b = $("#b").val();       
    var a = $("#a").val();
    $("#rCurrent").text(r);
    $("#gCurrent").text(g);
    $("#bCurrent").text(b);
    $("#aCurrent").text(a);
    changeBackgroundColor(r, g, b, a);
  });

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });
});