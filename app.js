let gridElement = document.querySelector('.grid')

const playButtonElement = document.getElementById('play-button')

playButtonElement.addEventListener("click" ,function() {
    
    gridElement.innerHTML = ''

    for (let i = 0; i < 100; i++){
        let n = (i + 1)
        gridElement.innerHTML += `<div class="cell">${n}</div>`   
    }

    const cellsArrayElement = document.querySelectorAll('.cell')

    for (let i = 0; i < 100; i++){
        const cellElement = cellsArrayElement[i]

        cellElement.addEventListener("click", function(){
           cellElement.classList.add('bg-skyblue')
           console.log('Hai cliccato il numero', (i + 1)) 
    })
    }    
}) 


function getArrayOfRandomNumbers (minRange,maxRange,number) {
const arrayRandomBombs = []
    while (arrayRandomBombs.lenght < number) {
        let n = getRandomInt(minRange,maxRange)
        arrayRandomBombs.push(n)
    }
    return arrayRandomBombs
}
console.log(getArrayOfRandomNumbers(1,100,16))


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max + 1);
}
console.log(getRandomInt(1,100))
    