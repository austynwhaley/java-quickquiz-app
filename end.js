//dom elements for setting usernames, scores and save button
var username = document.querySelector('#username')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScores = 5

finalScore.innerText = mostRecentScore


//prevents user from saving score without a name
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

//saves high score
saveHighScore = e => {
    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}
        

 