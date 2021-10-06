
//to Repush Code

//Getting all cells from screen using className .cell
const cells = document.querySelectorAll(".cell");

const displayWinner = document.getElementById("Display_Winner");

const winningLineDiv = document.getElementById("winnerLine");

const playAgainButton = document.getElementById("playAgain");


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
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.top = "8em";
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[3].innerHTML===cells[4].innerHTML && cells[3].innerHTML===cells[5].innerHTML){
        if(cells[3].innerHTML === "X" || cells[3].innerHTML === "O"){
            console.log("Winner is:"+cells[3].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.top = "14.5em";
            displayWinner.innerHTML =cells[3].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[6].innerHTML===cells[7].innerHTML && cells[6].innerHTML===cells[8].innerHTML){
        if(cells[6].innerHTML === "X" || cells[6].innerHTML === "O"){
            console.log("Winner is:"+cells[6].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.top = "21em";
            displayWinner.innerHTML =cells[6].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }

    //Vertical scenarios
    if(cells[0].innerHTML===cells[3].innerHTML && cells[0].innerHTML===cells[6].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.transform = "rotate(90deg)";
            winningLineDiv.style.top = "14.5em";
            winningLineDiv.style.left = "34%";
            function setLeft(mediaQuery){
                if(mediaQuery.matches){
                    winningLineDiv.style.left = "-3.9em";
                }else{

                }
            }
            setLeft(mediaQuery);
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[1].innerHTML===cells[4].innerHTML && cells[1].innerHTML===cells[7].innerHTML){
        if(cells[1].innerHTML === "X" || cells[1].innerHTML === "O"){
            console.log("Winner is:"+cells[1].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.transform = "rotate(90deg)";
            winningLineDiv.style.top = "14.5em";
            winningLineDiv.style.left = "12.8em";
            displayWinner.innerHTML =cells[1].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[2].innerHTML===cells[5].innerHTML && cells[2].innerHTML===cells[8].innerHTML){
        if(cells[2].innerHTML === "X" || cells[2].innerHTML === "O"){
            console.log("Winner is:"+cells[2].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.transform = "rotate(90deg)";
            winningLineDiv.style.top = "14.5em";
            winningLineDiv.style.left = "19em";
            displayWinner.innerHTML =cells[2].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }

    //Diagonals scenarios
    if(cells[0].innerHTML===cells[4].innerHTML && cells[0].innerHTML===cells[8].innerHTML){
        if(cells[0].innerHTML === "X" || cells[0].innerHTML === "O"){
            console.log("Winner is:"+cells[0].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.transform = "rotate(45deg)";
            winningLineDiv.style.top = "14.5em";
            winningLineDiv.style.left = "12.8em";
            displayWinner.innerHTML =cells[0].innerHTML +" is Winner!!";
            playAgainButton.classList.toggle('active');
            playable = false;
            flag = false;
        }
    }
    if(cells[2].innerHTML===cells[4].innerHTML && cells[2].innerHTML===cells[6].innerHTML){
        if(cells[2].innerHTML === "X" || cells[2].innerHTML === "O"){
            console.log("Winner is:"+cells[2].innerHTML)
            winningLineDiv.classList.toggle("active");
            winningLineDiv.style.transform = "rotate(135deg)";
            winningLineDiv.style.top = "14.5em";
            winningLineDiv.style.left = "12.8em";
            displayWinner.innerHTML =cells[2].innerHTML +" is Winner!!";
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

