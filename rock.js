let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScores=document.querySelector("#user-score");
let compScores=document.querySelector("#comp-score");

const showWinner=(userwin)=>{
 if(userwin){
    userScore++;
    console.log("You win");
    msg.innerText="Yow Win..!";
    msg.style.backgroundColor="green";
    userScores.innerText=userScore;
 }
 else{
    compScore++;
    console.log("You lose");
   msg.innerText="You lose..!";
   msg.style.backgroundColor="red";
   compScores.innerText=compScore;
 }
}
const getCompChoice=()=>{
    const opt = ["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return opt[rand];
}
const playgame=(UserChoice)=>{
    console.log("User choice is ",UserChoice);
    const compchoice=getCompChoice();
    console.log("computer choice is ",compchoice);
const Drawgame=()=>{
    console.log("Game was Draw.");
    msg.style.backgroundColor="blue";
    msg.innerText="Draw game";
}
if (UserChoice===compchoice){
    Drawgame();
}    
else{
    let userwin=true;
    if(UserChoice==="rock"){
        userwin=compchoice==="paper" ? false:true;
    }else if (UserChoice==="paper"){
        userwin=compchoice==="scissors" ? false:true;
    }else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin);
}
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let UserChoice=choice.getAttribute("id");
// console.log("choice was clicked",UserChoice);
playgame(UserChoice);
    })
})