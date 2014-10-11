$(document).ready(function(){

  //Set variables.
  var questions = ["What tag is used to add an image to your page?", "How do you add a link to another page?", "What tag is a BIG heading?", "What tag is a little heading?"];
  var correctTags = ["<img>","<a>","<h1>","<h6>"];
  var questionCount = 0;
  var correctImages = ["./images/pink-car.png","./images/white-car.png","./images/purple-car.png","./images/black-car.png"];

  /*Trouble interacting with the generated spans.
  //Display all tags in array so user can choose an answer.
  function setUpScreen(){
    $.each(correctTags, function(tag) {
      $("#main").append(
        $("<span class='basket'>"+correctTags[tag]+"</span>")
      );
    });
  }*/

  //Evaluate the selected tag and act on it.
  function evalResponse(selected){
    if (selected === correctTags[questionCount]){
      //Set result div to tell user they're correct.
      $("#result").text("Correct!");
      //Increase the meter
      $("meter").val(questionCount+1);
      //Change selected div to different image.
      var changeSpan = $('#main').find('.basket').eq(questionCount);
      changeSpan.css({"background": "url("+correctImages[questionCount]+") no-repeat top left"})
      //Increment questionCount.
      questionCount++;
      //See if game is over
      evalStatus();
    }
    else{
      //Set result div to tell user they're incorrect.
      $("#result").text("Incorrect.");
    }
  }

  //Evaluate if game is over
  function evalStatus(){
    if (questionCount===4){
      endGame();
    }
  }

  //Change screen on finish
  function endGame(){
    $("#result").text("Finished!");
    $("#prompt").text("Good job!"); 
    $("#finished").show();
    $("#instructions").hide();
    $("#baskets").text("");
    $("#resultSection").css({"top": "0"});
    $("header").css({"text-align": "center"});
  }

  //Evaluate user selection when they click a tag.
  $(".basket").on("click", function() {
    var text = $(this).text();
    evalResponse(text);
    promptQuestion();
  });

  //Prompt each question in the array
  function promptQuestion(){
    $("#prompt").html(questions[questionCount]); 
  }

  //Start over
  $("#reset").on( "click", function() {
    window.location.reload();
  });

  //Put out first question on page load.
  promptQuestion();
});