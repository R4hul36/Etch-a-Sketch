console.log('Hello world')
 
let squareTiles = 16 * 16 ;
const containerWidth = 600;
let tilewidth = 600/16;

for(let i =0; i<squareTiles; i++) {
    const tile = document.createElement("div");
    tile.classList.add(".tile");
    tile.setAttribute("style", `width: ${tilewidth}px; height:${tilewidth}px;`)
    const tileContainer = document.querySelector(".container");
    tileContainer.appendChild(tile);

    //event listener
    tile.addEventListener("mouseover", (e) => {
        tile.style.backgroundColor = 'lightblue';
    })
}

// change grid size

const changeButton = document.querySelector("#change-size");

changeButton.addEventListener("click", (e) => {
    let size;
    do{
        size = prompt("Enter a number between 1 and 100");
    }
    while(size > 100 || size < 2)
})


