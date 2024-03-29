let userScore = 0;        


let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector('#message');

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {

    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () =>{
    console.log("Game was draw");
    message.innerText = "Game was draw. Play again!!";
    message.style.backgroundColor = "#081b31";
};

const showWinner =(userwin, userChoice, compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
 
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        message.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }

}

const playGame =(userChoice) =>{
 console.log("user choice = ", userChoice);

 const compChoice = genCompChoice();

 console.log("Comp Choice =", compChoice);

 if(userChoice ===compChoice){
    drawGame();
 }
 else{
    let userwin = true;
    if (userChoice ==="rock"){
        userwin = compChoice ==="paper" ? false :true;

    }
    else if (userChoice ==="paper"){
        userwin = compChoice==="scissor" ? false : true ;
    }
    else {
        userwin = compChoice ==="rock" ? false :  true ;
    }
    showWinner(userwin,userChoice, compChoice);
 }


};
choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
        //console.log("choice was clicked");
        const userChoice =choice.getAttribute("id");
        //console.log("choice was clicked : ",userChoice);
        playGame(userChoice);
    });
});