$(document).ready(function(){

  //Set variables
  var slide1number = 1;
  var slideNumber = 1;
  var slideTotal = 5;

  //Flip through font samples in slide 1.
  function rotateEmphasis(){
    var current = $("#slide-1-font .active-font");
    if (slide1number<5){
      current.next().addClass('active-font');
      slide1number++;
    }
    else{
      slide1number = 1;
      current.parent().find(">:first-child").addClass('active-font');
    }
    current.removeClass('active-font');
  }
  //Interval for image rotation.
  setInterval(
    function() 
    {
      rotateEmphasis();
    }, 1500
  );//End interval

  //Function for moving slides forward
  function advanceSlide(){
    var current = "#slide-"+slideNumber;
    if (slideNumber==(slideTotal-1)){
      $("#next").hide();
      $(current).next().removeClass('hidden').addClass('active');
      $(".google-fonts").show();
      slideNumber++;
    }
    else if (slideNumber<slideTotal){
      $(current).next().removeClass('hidden').addClass('active');
      slideNumber++;
    }
    else{
      $("#next").hide();
      slideNumber = 1;
      var current = "#slide-"+slideNumber;
      $(current).removeClass('hidden').addClass('active');
    }
    $(current).removeClass('active').addClass('hidden');
  }

  //Function for moving slides backward
  function reverseSlide(){
    var current = "#slide-"+slideNumber;
    if (slideNumber>2){
      $(current).prev().removeClass('hidden').addClass('active');
      $(".google-fonts").hide();
      slideNumber--;
    }
    else if (slideNumber==2){
      $("#prev").hide();
      $(current).prev().removeClass('hidden').addClass('active');
      slideNumber--;
    }
    else{
      $("#prev").hide();
      slideNumber = 1;
      var current = "#slide-"+slideNumber;
      $(current).removeClass('hidden').addClass('active');
    }
    $(current).removeClass('active').addClass('hidden');
  }

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });

  //Slider controls
  $("#next").on("click", function() {
    $("#prev").show();
    advanceSlide();
  });
  $("#prev").on("click", function() {
    $("#next").show();
    reverseSlide();
  });

  //Add letter keypress on key, from http://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
  $(document).keydown(function(e){
    if (e.keyCode == 37 && slideNumber>1) { //Left arrow
      reverseSlide();
    }
    else{
      e.preventDefault();
    }
    if (e.keyCode == 39 && slideNumber<slideTotal) { //Right arrow
      advanceSlide();
    }
    else{
      e.preventDefault();
    }
  });

//Individual div actions
  //Slide2 (font-style)
  $("#slide-2 input[type=radio]").change(function() {
    var fontStyle = this.value;
    $("#slide-2-font").css("font-style", fontStyle);
    $("#slide-2-value").text(fontStyle);
  });
  //Slide 3 (font-size)
  $("#slide-3 input[type=range]").change(function() {       
    var fontSize = this.value;
    $("#slide-3-font").css("font-size", fontSize+"px");
    $("#slide-3-value").text(fontSize);
  });
  //Slide 4 (font-family)
  $("#slide-4 select").change(function() {       
    var fontFamily = this.value;
    $("#slide-4-font").removeClass().addClass(fontFamily);
    $("#slide-4-value").text("\""+fontFamily+"\"").addClass("capitalize");
  });
  //Slide 5 (font)
  $("#slide-5 input[type=radio]").change(function() {
    var fontStyle = this.value;
    $("#slide-5-font").css("font-style", fontStyle);
    $("#slide-5-style").text(fontStyle);
  });
  $("#slide-5 input[type=range]").change(function() {       
    var fontSize = this.value;
    $("#slide-5-font").css("font-size", fontSize+"px");
    $("#slide-5-size").text(fontSize);
  });
  $("#slide-5 select").change(function() {       
    var fontFamily = this.value;
    $("#slide-5-font").removeClass().addClass(fontFamily);
    $("#slide-5-family").text("\""+fontFamily+"\"").addClass("capitalize");
  });

  //Page setup on load
  $("#prev").hide();

});