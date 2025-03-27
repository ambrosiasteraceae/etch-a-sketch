const container = document.querySelector(".container");
console.log(container);
var gridSize = 50;

for (let i = 0; i<gridSize; i++)
{
    const gridDiv = document.createElement("div");
    gridDiv.style.flexDirection = "column";
    gridDiv.style.flex = "auto";
    gridDiv.style.display = "flex";

    for (let j = 0; j<gridSize ; j++)
        {
            const grid = document.createElement("div");

            grid.style.border = "0.05px dotted gray";
            grid.style.flex = "1";
            grid.classList.add("grid");


            gridDiv.appendChild(grid);      
        }
    container.appendChild(gridDiv);
}

container.addEventListener("mouseover", (e) =>
    {
    
    
        e.target.style.backgroundColor ="aqua";
        console.log("im hovering");}
    
    );
