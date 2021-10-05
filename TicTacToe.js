
//to Repush Code

//Getting all cells from screen using className .cell
const cells = document.querySelectorAll(".cell");

const displayWinner = document.getElementById("Display_Winner");

console.log("displayWinner:"+displayWinner)

//testing
console.log(cells)

//Initialize Player
let player = "X";

let playable = true;

console.log("Playable:"+playable)

//Iterate through all cells
    cells.forEach((cell) => {
        cell.addEventListener('click',whichCell) 
        });
 

//WhichCell is clicked byu User
function whichCell(e){
    if(playable){
        //Only if cell is empty we will print player symbol in that cell
    if(e.target.innerText === ""){

        //assigning cell the player Symbol 
        e.target.innerText = player;

        if(player==="X"){
            e.target.style.color = "#0000ff";
            displayWinner.style.color="#0000ff";
        }else{
            e.target.style.color = "#ff0000";
            displayWinner.style.color="#ff0000";
        }

        //Check Winner 
        checkWinner();
        //Switching Turns for Players
        switchPlayer();
    }
    }
}

//Switch Turns logic for Players
function switchPlayer(){
    console.log("Player:"+player)
    if(player==="X"){
        player = "O";
    }else{
        player = "X";
    }
}

//Check Winner
function checkWinner(){
    console.log("Inside checkWinner");
    //Horizontal scenarios
    if(cells[0].innerHTML===cells[1].innerHTML && cells[0].innerHTML===cells[2].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            playable = false;
        }
    }
    if(cells[3].innerHTML===cells[4].innerHTML && cells[3].innerHTML===cells[5].innerHTML){
        if(cells[3].innerHTML === "X" || cells[3].innerHTML === "O"){
            console.log("Winner is:"+cells[3].innerHTML)
            displayWinner.innerHTML =cells[3].innerHTML +" is Winner!!";
            playable = false;
        }
    }
    if(cells[6].innerHTML===cells[7].innerHTML && cells[6].innerHTML===cells[8].innerHTML){
        if(cells[6].innerHTML === "X" || cells[6].innerHTML === "O"){
            console.log("Winner is:"+cells[6].innerHTML)
            displayWinner.innerHTML =cells[6].innerHTML +" is Winner!!";
            playable = false;
        }
    }

    //Vertical scenarios
    if(cells[0].innerHTML===cells[3].innerHTML && cells[0].innerHTML===cells[6].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            playable = false;
        }
    }
    if(cells[1].innerHTML===cells[4].innerHTML && cells[1].innerHTML===cells[7].innerHTML){
        if(cells[1].innerHTML === "X" || cells[1].innerHTML === "O"){
            console.log("Winner is:"+cells[1].innerHTML)
            displayWinner.innerHTML =cells[1].innerHTML +" is Winner!!";
            playable = false;
        }
    }
    if(cells[2].innerHTML===cells[5].innerHTML && cells[2].innerHTML===cells[8].innerHTML){
        if(cells[2].innerHTML === "X" || cells[2].innerHTML === "O"){
            console.log("Winner is:"+cells[2].innerHTML)
            displayWinner.innerHTML =cells[2].innerHTML +" is Winner!!";
            playable = false;
        }
    }

    //Diagonals scenarios
    if(cells[0].innerHTML===cells[4].innerHTML && cells[0].innerHTML===cells[8].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            playable = false;
        }
    }
    if(cells[2].innerHTML===cells[4].innerHTML && cells[2].innerHTML===cells[6].innerHTML){
        if(cells[2].innerHTML === "X" || cells[2].innerHTML === "O"){
            console.log("Winner is:"+cells[2].innerHTML)
            displayWinner.innerHTML =cells[2].innerHTML +" is Winner!!";
            playable = false;
        }
    }
}

