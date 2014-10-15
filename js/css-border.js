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

  //Page setup on load
  $("#prev").hide();

});