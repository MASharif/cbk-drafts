$(document).ready(function(){

  //Set variables
  var slide1number = 1;
  var slideNumber = 1;
  var slideTotal = 5;

  //Flip through border samples in slide 2.
  function rotateImages(){
    var current = $("#slide-1-image .active");
    if (slide1number<5){
      current.next().removeClass('hidden').addClass('active');
      slide1number++;
    }
    else{
      slide1number = 1;
      current.parent().find(">:first-child").removeClass('hidden').addClass('active');
    }
    current.removeClass('active').addClass('hidden');
  }
  //Interval for image rotation.
  setInterval(
    function() 
    {
      rotateImages();
    }, 1500
  );//End interval

  //Function for moving slides forward
  function advanceSlide(){
    var current = "#slide-"+slideNumber;
    if (slideNumber==(slideTotal-1)){
      $("#next").hide();
      $(current).next().removeClass('hidden').addClass('active');
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
    if (e.keyCode == 37) { 
      $("#next").show();
      reverseSlide();
    }
    if (e.keyCode == 39) { 
      $("#prev").show();
      advanceSlide();
    }
  });

//Individual div actions
  //Slide2 (border-width)
  $("#slide-2 input[type=range]").change(function() {
    var borderWidth = this.value;
    $("#slide-2-image").css("border-width", borderWidth+"px");
    $("#slide-2-value").text(borderWidth);
  });
  //Slide 3 (border-style)
  $("#slide-3 input[type=radio]").change(function() {       
    var borderStyle = this.value;
    $("#slide-3-image").css("border-style", borderStyle);
    $("#slide-3-value").text(borderStyle);
  });
  //Slide 4 (border-color)
  $("#slide-4 input").change(function() {       
    var borderColor = this.value;
    $("#slide-4-image").css("border-color", "#"+borderColor);
    $("#slide-4-value").text(borderColor);
  });
  //Slide 5 (border)
  $("#slide-5 input[type=range]").change(function() {
    var borderWidth = this.value;
    $("#slide-5-image").css("border-width", borderWidth+"px");
    $("#slide-5-size").text(borderWidth);
  });
  $("#slide-5 select").change(function() {       
    var borderStyle = this.value;
    $("#slide-5-image").css("border-style", borderStyle);
    $("#slide-5-style").text(borderStyle);
  });
  $("#slide-5 input[class=color]").change(function() {       
    var borderColor = this.value;
    $("#slide-5-image").css("border-color", "#"+borderColor);
    $("#slide-5-color").text(borderColor);
  });

  //Page setup on load
  $("#prev").hide();

});