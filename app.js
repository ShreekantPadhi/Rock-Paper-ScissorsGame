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
       
        message.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }

}

const playGame =(userChoice) =>{
 

 const compChoice = genCompChoice();

 

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
        
        const userChoice =choice.getAttribute("id");
        
        playGame(userChoice);
    });
});