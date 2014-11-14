$(document).ready(function(){
  var backgroundColorOpacity = 1.0;
  $("body").on( "mousemove", function(position){
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
    changeBackgroundColor(r, g, b, backgroundColorOpacity);
  }

  //Change background color, text
  function changeBackgroundColor(r, g, b, backgroundColorOpacity){
    $("body").css({"background-color": "rgba("+ r +","+g +","+ b +"," + backgroundColorOpacity +")"});
    $("#currentColor").text("rgba("+ r +","+g +","+ b);
    $("#currentColorOpacity").text("," + backgroundColorOpacity +")");
  }

  //Catch current color
  $("body").on( "click", function() {
    $("#currentColor").addClass("currentColor");
    $("#currentColorOpacity").addClass("currentColor");
    $("body").unbind("mouseenter mouseleave mousemove");
    //Show opacity options
    $("#opacityArea").show();
  });

  //This seems like a good candidate for refactoring.
  $("#opacityArea input[type=range]").change(function() {       
    var backgroundColorOpacity = this.value;
    //Get # values of current background color
    var backgroundColorCurrent = $("body").css("backgroundColor");
    var backgroundColorCurrent = backgroundColorCurrent.split(/\s*,\s*/);
    var r = backgroundColorCurrent[0].match(/\d+/);
    var g = backgroundColorCurrent[1];
    var b = backgroundColorCurrent[2].match(/\d+/);
    changeBackgroundColor(r, g, b, backgroundColorOpacity);
  });

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });
});