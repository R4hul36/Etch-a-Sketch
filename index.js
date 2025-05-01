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

    //event listener
    tile.addEventListener('mouseover', (e) => {
      tile.style.backgroundColor = 'lightblue'
    })
  }
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

createGrid()
