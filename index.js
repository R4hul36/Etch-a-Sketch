console.log('Hello world')
 
let squareTiles = 16 * 16 ;
const containerWidth = 700;
let tilewidth = 700/16;

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




