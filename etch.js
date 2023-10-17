
const gridContainer = document.getElementById("grid-container");

const numRows = 16;


for (let i = 0; i < (numRows * numRows); i++){
    const gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv"
    gridContainer.appendChild(gridDiv);
    
}

const gridDiv = document.querySelectorAll(".gridDiv")
console.log(gridDiv);

gridDiv.forEach(div =>{
    div.addEventListener("mouseover", over, false)
})

function over(){
    gridDiv.forEach(div =>
        {
            div.setAttribute("style", "background-color: blue;")
        })
}

gridDiv.forEach(div =>{
    div.addEventListener("mouseout", out, false)
})

function out(){
    gridDiv.forEach(div =>
        {
            div.setAttribute("style", "background-color: white;")
        })
}
