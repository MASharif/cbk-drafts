$(document).ready(function(){

  //Set variables
  var slide2number = 1;
  var slideNumber = 1;
  var slideTotal = 6;

  //Flip through border samples in slide 2.
  function rotateImages(){
    var current = $("#slide-2-image .active");
    if (slide2number<5){
      current.next().removeClass('hidden').addClass('active');
      slide2number++;
    }
    else{
      slide2number = 1;
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
  //Slide 3 (border-width)
  $("#slide-3 input[type=range]").change(function() {
    var borderWidth = this.value;
    $("#slide-3-image").css("border-width", borderWidth+"px");
    $("#slide-3-value").text(borderWidth);
  });
  //Slide 4 (border-style)
  $("#slide-4 input[type=radio]").change(function() {       
    var borderStyle = this.value;
    $("#slide-4-image").css("border-style", borderStyle);
    $("#slide-4-value").text(borderStyle);
  });
  //Slide 5 (border-color)
  $("#slide-5 input").change(function() {       
    var borderColor = this.value;
    $("#slide-5-image").css("border-color", "#"+borderColor);
    $("#slide-5-value").text(borderColor);
  });
  //Slide 6 (border)
  $("#slide-6 input[type=range]").change(function() {
    var borderWidth = this.value;
    $("#slide-6-image").css("border-width", borderWidth+"px");
    $("#slide-6-size").text(borderWidth);
  });
  $("#slide-6 select").change(function() {       
    var borderStyle = this.value;
    $("#slide-6-image").css("border-style", borderStyle);
    $("#slide-6-style").text(borderStyle);
  });
  $("#slide-6 input[class=color]").change(function() {       
    var borderColor = this.value;
    $("#slide-6-image").css("border-color", "#"+borderColor);
    $("#slide-6-color").text(borderColor);
  });

  //Page setup on load
  $("#prev").hide();

});