let gridElement = document.querySelector('.grid')

const playButtonElement = document.getElementById('play-button')

let clicks = 0

playButtonElement.addEventListener("click", function () {
    
    gridElement.innerHTML = ''
    document.getElementById("game-over").innerHTML = ''
    clicks = 0
    document.getElementById("score").innerHTML = clicks
    
    
    const arrayRandomBombs = getArrayOfRandomNumbers(1,100,16)
    console.log(arrayRandomBombs)

    for (let i = 0; i < 100; i++) {
        let n = (i + 1)
        gridElement.innerHTML += `<div class="cell">${n}</div>`
    }

    const cellsArrayElement = document.querySelectorAll('.cell')

    for (let i = 0; i < 100; i++) {
        const cellElement = cellsArrayElement[i]
        
        cellElement.addEventListener("click", function () {
            const numberCellElement = parseInt(cellElement.innerHTML)

            onClick()

        if (arrayRandomBombs.includes(numberCellElement) !== true){

            console.log(arrayRandomBombs.includes(numberCellElement))
            cellElement.classList.add('bg-skyblue')
            console.log('Hai cliccato il numero', (i + 1))

        } else if (arrayRandomBombs.includes(numberCellElement) === true) {
            cellElement.classList.add('bg-red')
            gameOver()
        }
        })
    }
})


function getArrayOfRandomNumbers(minRange, maxRange, number) {

     const arrayRandomBombs = []
     while (arrayRandomBombs.length < number) {
         let n = getRandomInt(minRange,maxRange);

         if (arrayRandomBombs.includes(n) !== true){
            arrayRandomBombs.push(n)
        } 
     }
     return arrayRandomBombs;
    
    // const arrayRandomBombs = []
    // for (i = 0; i < number; i++) {
    //     i = arrayRandomBombs.length
    //     let n = getRandomInt(minRange, maxRange)

    //     if (arrayRandomBombs.includes(n) !== true){
    //         arrayRandomBombs.push(n)
    //     }
    // }
    // return arrayRandomBombs    
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max + 1);
}

function gameOver() {
    const gameOverString = document.createElement("div")
    gameOverString.innerHTML = "GAME OVER"
    document.getElementById("game-over").appendChild(gameOverString)
}


function onClick() {
    clicks += 1
    document.getElementById("score").innerHTML = clicks
}
