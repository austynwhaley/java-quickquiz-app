//variables for local storage and list element
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
//displays higscore set in local storage
highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")