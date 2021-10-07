
//to Repush Code

//Getting all cells from screen using className .cell
const cells = document.querySelectorAll(".cell");

const displayWinner = document.getElementById("Display_Winner");

const playAgainButton = document.getElementById("playAgain");

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 3;

const win_div_id = document.getElementById("win_div_id");

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
    let mediaQuery = window.matchMedia("(max-width : 450px)");
    
    let flag = false;

        //Check for draw
        for(let i=0;i<cells.length;i++){
            let content = cells[i].innerHTML;
            if(content === "X" || content === "O"){
                flag = true;
            }else{
                flag = false;
                break;
            }
        };
        
    let winnerLine = document.createElement("div");



    //Horizontal scenarios
    if(cells[0].innerHTML===cells[1].innerHTML && cells[0].innerHTML===cells[2].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(50,25);
            ctx.lineTo(250,25);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[3].innerHTML===cells[4].innerHTML && cells[3].innerHTML===cells[5].innerHTML){
        if(cells[3].innerHTML === "X" || cells[3].innerHTML === "O"){
            console.log("Winner is:"+cells[3].innerHTML)
            displayWinner.innerHTML =cells[3].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(50,75);
            ctx.lineTo(250,75);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[6].innerHTML===cells[7].innerHTML && cells[6].innerHTML===cells[8].innerHTML){
        if(cells[6].innerHTML === "X" || cells[6].innerHTML === "O"){
            console.log("Winner is:"+cells[6].innerHTML)
            displayWinner.innerHTML =cells[6].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(50,125);
            ctx.lineTo(250,125);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }

    //Vertical scenarios
    if(cells[0].innerHTML===cells[3].innerHTML && cells[0].innerHTML===cells[6].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(50,25);
            ctx.lineTo(50,125);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[1].innerHTML===cells[4].innerHTML && cells[1].innerHTML===cells[7].innerHTML){
        if(cells[1].innerHTML === "X" || cells[1].innerHTML === "O"){
            console.log("Winner is:"+cells[1].innerHTML)
            displayWinner.innerHTML =cells[1].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(150,25);
            ctx.lineTo(150,125);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[2].innerHTML===cells[5].innerHTML && cells[2].innerHTML===cells[8].innerHTML){
        if(cells[2].innerHTML === "X" || cells[2].innerHTML === "O"){
            console.log("Winner is:"+cells[2].innerHTML)
            displayWinner.innerHTML =cells[2].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(250,25);
            ctx.lineTo(250,125);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }

    //Diagonals scenarios
    if(cells[0].innerHTML===cells[4].innerHTML && cells[0].innerHTML===cells[8].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(50,25);
            ctx.lineTo(250,125);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[2].innerHTML===cells[4].innerHTML && cells[2].innerHTML===cells[6].innerHTML){
        if(cells[2].innerHTML === "X" || cells[2].innerHTML === "O"){
            console.log("Winner is:"+cells[2].innerHTML)
            displayWinner.innerHTML =cells[2].innerHTML +" is Winner!!";
            ctx.beginPath();
            ctx.moveTo(250,25);
            ctx.lineTo(50,125);
            ctx.stroke();
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }

        if(flag){
            displayWinner.style.color="#000000";
            displayWinner.innerHTML ="Draw!!!";
            playAgainButton.classList.toggle('active');
        }


}




function playAgain(){
    location.reload();
}

