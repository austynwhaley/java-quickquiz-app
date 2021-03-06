const scorePoints = 100;
const maxQuestions = 5
var timeleft = 60;
var currentQuestion= {}
var acceptedAnswers = true
var avaiableQuestions = {}
var currentScore = 0;
var question = document.getElementById("question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var scoreText = document.getElementById("score")


//an object array of questions, choices, and answers
var questions = [
{
    prompt: "Commonly used data types does NOT include:",
    choice1: "Strings",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    answer: 3,
},
{
    prompt: "The condition in an if / else statement is enclosed within____.",
    choice1: "Parentheses",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Square Brackets",
    answer: 1,
},
{
    prompt: "Arrays in javascript can be used to store ____.",
    choice1: "Numbers of strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
    answer: 4,
},
{
    prompt: "String values must be enclosed within ___ when being assigned to varaibles.",
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parentheses",
    answer: 3,
},
{
    prompt: "A very used tooll used during development and debugging for printing content to the debugger is:",
    choice1: "Javascript",
    choice2: "Console log",
    choice3: "For Loops",
    choice4: "Terminal/Bash",
    answer: 2,
},
];




// quiz timer
var timer = setInterval(function(){

    if(timeleft <= 0){
        clearInterval(timer)
        return window.location.assign('./endofquiz.html')  
    } else { 
        document.getElementById("timer").innerHTML = timeleft;   
    }
    timeleft -= 1;
}, 1000);

//function that sets starting values
function startQuiz(){
    currentScore = 0
    questionCounter = 0
    avaiableQuestions = [...questions]
    getNewQuestion()
}

//function that changes question and choices
getNewQuestion = () => {
    if(avaiableQuestions.length === 0 ||questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', currentScore)

        return window.location.assign('./endofquiz.html')
    }

    const questionsIndex = Math.floor(Math.random() * avaiableQuestions.length)
    currentQuestion = avaiableQuestions[questionsIndex]
    question.innerText = currentQuestion.prompt

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    });

    avaiableQuestions.splice(questionsIndex, 1)

    acceptedAnswers = true   
};

// for each method for the possible choices
choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if (!acceptedAnswers) return

        acceptedAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number'] 

        var classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(scorePoints)
        };

        if (classToApply === "incorrect") {
            timeleft -= 10;
        };

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion() 
        },) 
        
    });

});
//function that adds points to score
incrementScore = num => {
    currentScore += num
    scoreText.innerText = "Score: " + currentScore
}



//calls to start the quiz
startQuiz();



//when user chooses incorrectly, time must be subtracted by 10 seconds
//each correct answer adds points to score
//when all questions are answered or timer is 0 then game is over
//points are added for time left after a successful finish 
// when game is over you are prompted to save initals and score