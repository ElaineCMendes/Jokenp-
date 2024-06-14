const result = document.querySelector('.result')
const humanscore = document.querySelector("#human-score")
const machinescore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const Choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)



    return Choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)


    if (human === machine) {
        result.innerHTML = "Deu Emapte!"

    } else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScoreNumber++
        humanscore.innerHTML = humanScoreNumber

        result.innerHTML = "Você Ganhou!"
    } else {
        machineScoreNumber++
        machinescore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu!"
    }

}
