const container = document.querySelector(".container");
const userButton = document.querySelector("button");
//var gridSize = 12;
generateGrid(14);

userButton.addEventListener("click", (e) =>
{   
    let response = prompt("User Choice");
    let userGrid =  Math.min(parseInt(response),100);
    console.log(userGrid);

    const bin = document.querySelectorAll(".parent");
    console.log(bin);
    bin.forEach(item => item.remove())

    generateGrid(userGrid);



});
function reset () {
    while (container.firstChild)
        {
            it+=1;
            container.remove(container.lastElementChild);
            if (it > 500)
                break;
        }
            
}


function generateGrid(gridSize)
{

    for (let i = 0; i<gridSize; i++)
        {
            const parent = document.createElement("div");
            parent.classList.add("parent");
            parent.style.flexDirection = "column";
            parent.style.flex = "auto";
            parent.style.display = "flex";
        
            for (let j = 0; j<gridSize ; j++)
                {
                    const grid = document.createElement("div");
                    grid.classList.add("nmchild");
                    grid.style.border = "0.05px dotted gray";
                    grid.style.flex = "1";
                    parent.appendChild(grid);      
                }
            container.appendChild(parent);
        }
}


container.addEventListener("mouseover", (e) =>
e.target.style.backgroundColor =`rgb(${102+Math.random()*154} ${102+Math.random()*154} 255)`);

