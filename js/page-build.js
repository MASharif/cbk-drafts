$(document).ready(function(){

  //Set up variables
  var questionNumber = 0;
  var correctTags = ["<html>","<body>","<head>","<title>"];
  var shuffledTags = ["&lt;html&gt;","&lt;body&gt;","&lt;head&gt;","&lt;title&gt;"];
  var questions = ["What is the first <tag> we need to start making a web page?",
  "Where do we place our pictures and words?",
  "Where can we place our colors and other styling?",
  "What <tag> do we need for the title at the top?"];
  var responsesForCorrectTagSelection = ["Correct! We start with the opening and closing <html> tags so the browser knows we're making a web page.",
  "Correct! The <body> tag is where we'll put our pictures and words.",
  "Correct! The <head> tag is where we can put our colors and other styling.",
  "Correct! <title> tells the browser the name to show up top."];
  var responsesForIncorrectTagSelection = ["Close! How will the browser know what we're making?",
  "Close! Where will our pictures and words go so we can see them?",
  "Close! Where can we put our colors and other styling?",
  "Close! How will we show the name of our page up top?"];
  //This is a cheat unless/until I find a way to loop through tags.
  var formattedForDisplay = ["<html>\n<html>","<html>\n\xA0\xA0<body>\n\xA0\xA0<body>\n<html>",
  "<html>\n\xA0\xA0<head>\n\xA0\xA0</head>\n\xA0\xA0<body>\n\xA0\xA0</body>\n</html>",
  "<html>\n\xA0\xA0<head>\n\xA0\xA0\xA0\xA0<title>\n\xA0\xA0\xA0\xA0</title>\n\xA0\xA0</head>\n\xA0\xA0<body>\n\xA0\xA0</body>\n</html>"];
  var finalString;

  //Display all tags in array so user can choose an answer
  function showTags(){
    shuffle(shuffledTags);
    $.each(shuffledTags, function(tag) {
      $("#choices").append(
        $("<button class='tag'>"+shuffledTags[tag]+"</button>")
      );
    });
  }

  //Show the questions in order
  function showQuestion(){
    var qToShow = questions[questionNumber];
    //Add new question value to input
    $("#current-question").val(qToShow)
    //Show new question, add animation
    $("#current-question").hide().fadeIn("slow");
  }

  //Randomize tag array, from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //Evaluate the selected tag and act on it.
  function evalResponse(selected){
    if (selected == correctTags[questionNumber]){
      $("#result").text(responsesForCorrectTagSelection[questionNumber]);
      formatTextForDisplay();
      questionNumber++;
      //Stop after 4 questions for now.
      if (questionNumber < 4){
        showQuestion();
      }
      else{
        showFinalTally();
      }
    }
    else{
      $("#result").text(responsesForIncorrectTagSelection[questionNumber]);
    }
  }

  //Show a skeleton page as the correct answers go on.
  function formatTextForDisplay(){
    var finalString = formattedForDisplay[questionNumber];
    finalString = finalString.replace(/</g,'&lt;').replace(/>/g,'&gt;');
    $("#current-status").html("<pre>"+finalString+"</pre>");
  }

  function showFinalTally(){
    $("#current-question").hide();
    $("#choices").hide();
    $("#result").hide();
    $("#current-status").addClass("current-status");
    $("h1").text("We're off to a good start!");
    $("h1").animate({opacity: 1, left: "-=50", fontSize : '3em'}, 2500);
    $("#main").append(
      $("<aside>These four tags are all you need to set up your page.<br/>Now, you can start adding content.</aside>")
    );
  }

  //Fire off functions in order
  function start(){
    $("#main").hide();
    $("h1").animate({
      opacity: 0.25,
      left: "+=50",
      fontSize : '1em'
      }, 2500);
    setTimeout(
      function(){
        $("#main").show();
      }, 2500
    );//End timeout
    showTags();
    showQuestion();
  }

  //Call start on page load
  start();

  //Evaluate user selection when they click a tag
  $(".tag").on("click", function() {
    var text = $(this).text();
    evalResponse(text);
  });

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });

});