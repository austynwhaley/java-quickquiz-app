
//when user chooses incorrectly, time must be subtracted by 10 seconds
//each correct answer adds points to score
//when all questions are answered or timer is 0 then game is over
//points are added for time left after a successful finish 
// when game is over you are prompted to save initals and score


var score = 0;
var timeleft = 75;
//set a timer that lasts 75 seconds
var timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "0";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);



function startQuiz() {
    var startBtn = document.querySelector("#quizstart");
    
    if (startBtn.style.display === "none") {
      startBtn.style.display = "block";
    } else {
      startBtn.style.display = "none";
    }
}




