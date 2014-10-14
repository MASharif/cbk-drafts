$(document).ready(function(){

  //Set up variables
  var letterNumber = 0;
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var x = $(window).width();
  var y = $(window).height();
  var startTime, endTime, date, date2, startTime, endTime, timeInt, endTimeString, randNum;
  var correct = 0;
  var incorrect = 0;

  //Timer functions
    //Function for start button display
    function startTimer() {
      date = new Date();
      startTime = date.getTime();
      timeInt = setInterval(function(){
        date2 = new Date();
        endTime = date2.getTime();
        calculateTime();
      },10);
    }

    //Function for updating display
    function timeDisplayUpdate(){
      date2 = new Date();
      endTime = date2.getTime();
      calculateTime();
    }

    //Function for end button display
    function endTimer() {
      clearInterval(timeInt);
      return;
    }

    //Calculate time for formatting
    function calculateTime(){
      var totalTime = endTime - startTime;
      var seconds = (totalTime/1000)%60;
      var minutes = (totalTime/(1000*60))%60;
      formatTime(seconds, minutes);
    }

    function formatTime(seconds, minutes){
      //Format seconds
      while (seconds > 59){
        seconds = seconds - 60;
        minutes = minutes + 1;}
      if (seconds < 0.1) {
        seconds = "0";}
      else if (seconds < 9) {
        seconds = "0" + seconds.toFixed(2);}
      else {
        seconds = seconds.toFixed(2).toString();
        minutes = minutes;}

      //Format minutes
      if (minutes < 1){
        minutes = "00";}
      else if (minutes <= 9) {
        minutes = "0" + minutes.toFixed(0);}
      else {
        minutes = minutes.toFixed(2).toString();}
      endTimeString = "Your time: "+minutes+":"+seconds;
      $("#time").text(endTimeString);
      $("#correct").text(correct);
      $("#incorrect").text(incorrect);
    }//End timer functions

  //Evaluate the selected tag and act on it.
  function evaluateInput(letter){
    if (letter == alphabet[letterNumber]){
      $("#"+letter).remove();
      correct++;
      evalStatus();
    }
    else{
      incorrect++;
    }
  }

  //Clear all elements from the form
  function clearForm(){
    $("#current-letter").html("");
  };

  //Start dropping letters.
  function dropLetter(){
    var inputLetter = alphabet[letterNumber];
    var randNum = Math.random() * ((x/2) - 20) + 20;
    $("#current-letter").html("<span readonly type='text' class='absolute' id='"+inputLetter+"'>"+inputLetter+"</span>");
    $("#"+inputLetter).css({left: randNum});
    $("#"+inputLetter).animate({
      top: (y/3)+"px",
      left: "+=50px",
      fontSize : "3em"
      }, 8000, function() {
        // Animation complete.
        evalStatus();
    });
  };

  //Is the game over?
  function evalStatus(){
    if(letterNumber===25){
      endTimer();
      $("#current-letter").hide();
      $("#time").text("Game over! "+endTimeString);
    }
    else{
      clearForm();
      letterNumber++;
      dropLetter();
    }
  }

  //Fire off functions in order
  function start(){
    $("h1").animate({
      opacity: 0.25,
      left: "+=50px",
      fontSize : '1em'
    }, 2500);
    setTimeout(function(){
      startTimer();
      dropLetter();
    }, 2500);//End timeout
  }

  //Add letter keypress on key
  $(document).keypress(function(e) {
    key = e.which;
    letter = alphabet[(key-97)];
    var presence = jQuery.inArray(letter, alphabet);
    if (presence !== -1){
      $("#"+letter).click();
      evaluateInput(letter);
    }
  });

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });

  //Call start on page load
  start();

});