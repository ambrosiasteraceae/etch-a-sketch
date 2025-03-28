const container = document.querySelector(".container");
const userButton = document.querySelector("button");
//var gridSize = 12;
generateGrid(14);

userButton.addEventListener("click", (e) =>
{   
    let response = prompt("User Choice");
    let userGrid =  Math.min(parseInt(response),100);


    reset();
    generateGrid(userGrid);



});
function reset () {
    // while (container.firstChild)
    //     {
    //         it+=1;
    //         container.remove(container.lastElementChild);
    //         if (it > 500)
    //             break;
    //     }
    const bin = document.querySelectorAll(".parent");
    bin.forEach(item => item.remove())
            
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
                    grid.style.opacity = 0.0;
                    parent.appendChild(grid);      
                }
            container.appendChild(parent);
        }
}


container.addEventListener("mouseover", (e) =>
{
    let red = 102+Math.random()*154;
    let green = 102+Math.random()*154;
    let currentOpacity = e.target.style.opacity; 
    let newOpacity = Math.min(parseFloat(currentOpacity)+0.1, 1.0);
    console.log(newOpacity);
    
    e.target.style.backgroundColor =`rgb(${red} ${green} 255)`
    // if(newOpacity == 1.0)
    //     e.target.style.backgroundColor = 'black';
    e.target.style.opacity = String(newOpacity);
    
    console.log(e.target.style.opacity)

});
