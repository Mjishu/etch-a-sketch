
const gridContainer = document.getElementById("grid-container");

const numRows = 16;


for (let i = 0; i < (numRows * numRows); i++){
    const gridDiv = document.createElement("div");
    gridDiv.className = "gridDiv"
    gridContainer.appendChild(gridDiv);
    
}

// figure out why it wont create divs; line 7 is throwing an error