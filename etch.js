
const gridContainer = document.getElementById("grid-container");

const numRows = 16;


for (let i = 0; i < (numRows * numRows); i++){
    const gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv"
    gridContainer.appendChild(gridDiv);
    
}

//const gridDiv = document.querySelectorAll(".gridDiv") // gridDiv is currently an object/nodelist


const grid = document.querySelectorAll(".gridDiv");
console.log(grid);
console.log(grid.length);

grid.forEach(div =>{
    div.addEventListener("mouseover", over, false);
})



function over(event){
        const div = event.target;
        div.style.backgroundColor = "blue";
        
}

function erase(){
    grid.forEach(div=>{
        div.style.backgroundColor = 'white';
    })
}

// grid.forEach(div =>{
//     div.addEventListener("mouseout", out, false);
// })

// function out(event){
//     const div = event.target;
//     div.style.backgroundColor = "white";
// }
