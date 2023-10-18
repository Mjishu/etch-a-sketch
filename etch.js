
const gridContainer = document.getElementById("grid-container");



for (let i = 0; i < 256; i++){
    const gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv"
    gridContainer.appendChild(gridDiv);
    
}



const grid = document.querySelectorAll(".gridDiv");
console.log(grid);
console.log(grid.length);

grid.forEach(div =>{
    div.addEventListener("mouseover", over, false);
})



function over(event){
        const div = event.target;
        div.style.backgroundColor = "cadetblue";
        
}

function erase(){
    grid.forEach(div=>{
        div.style.backgroundColor = 'white';
    })
}

function delChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}


const slider = document.getElementById('slider');
slider.addEventListener("input", updateGrid)
