const container = document.querySelector(".container");
console.log(container);
var gridSize = 8;

var innerHeight = 960/8
for (let i = 0; i<gridSize; i++)
{
    const gridDiv = document.createElement("div");
    gridDiv.style.flexDirection = "column";
    gridDiv.style.flex = "auto";
    gridDiv.style.display = "flex";


    for (let j = 0; j<gridSize ; j++)
        {
            const grid = document.createElement("div");
            //grid.style.backgroundColor = "red";
            grid.style.borderBlockColor = "black";
            grid.style.border = "1px solid black";
            grid.style.flex = "1"
            // grid.style.justifyContent = "space-between"
            grid.textContent = "A"
            gridDiv.appendChild(grid);
            // gridDiv.style
            
        }
    container.appendChild(gridDiv);
}