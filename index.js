console.log('Hello world')

const createGrid = function (gridSize = 16) {
  const containerWidth = 600
  const tileContainer = document.querySelector('.container')
  let tilewidth = 600 / gridSize
  gridSize = gridSize ** 2
  // removing all the tiles when the function is called again
  tileContainer.replaceChildren()
  for (let i = 0; i < gridSize; i++) {
    const tile = document.createElement('div')
    tile.classList.add('.tile')
    tile.setAttribute('style', `width: ${tilewidth}px; height:${tilewidth}px;`)

    tileContainer.appendChild(tile)

   
    changeTileColor(tile);
    
  }
}

// change the color of tile on hover

const changeTileColor = function (tile) {
    let opacityValue = 30; 
    let rgb = randomRGB()
    
    tile.addEventListener('mouseover', (e) => {
        tile.style.backgroundColor = `rgba(${rgb}, ${opacityValue}%)`
        if(opacityValue < 100){
            opacityValue+=7    
        }
    })
}

const randomRGB = function () {
    const r  = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return  `${r}, ${g}, ${b}`
}

// change grid size

const changeButton = document.querySelector('#change-size')

changeButton.addEventListener('click', (e) => {
  let size
  do {
    size = prompt('Enter a number between 1 and 100')
  } while (size > 100 || size < 2)
  createGrid(size)
})


const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", (e) => {
  console.log("hello");
  const grid = document.querySelector(".container")
  const tiles = parent.children;

  for(let i =0; i<tiles.length; i++) {
    tiles[i].style.backgroundColor = "white";
  }
  

})



createGrid()
