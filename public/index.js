const getNewScore = async () => {
    scoresRes = await window.fetch("/update")
    if (scoresRes.ok) {
        const jsonScores = await scoresRes.json()
        return Promise.resolve(jsonScores)
    } else {
        return Promise.reject()
    }
}

const updateScore = async (json) => {
    document.getElementById('name1').innerHTML = json.firstTeam.name
    document.getElementById('name2').innerHTML = json.secondTeam.name
    document.getElementById('score1').innerHTML = json.firstTeam.score
    document.getElementById('score2').innerHTML = json.secondTeam.score
    document.getElementById('logo1').src = "logos/" + json.firstTeam.logo
    document.getElementById('logo2').src = "logos/" + json.secondTeam.logo
}

window.setInterval(()=>getNewScore().then(updateScore), 100)
