let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscores=document.querySelector("#yourscore");
let compscores=document.querySelector("#compscore");
 
const compgenchoice=()=>{
    let options=["rock","paper","scissor"];
    let idx= Math.floor(Math.random()*3);
    return options[idx];
};
const draw=()=>{
    console.log("game is draw");
    msg.innerText="It's a draw! play again";
    msg.style.backgroundColor="#081b31";
};
const wongame=(userchoice,compchoice)=>{
    console.log("you won");
    userscore++;
    userscores.innerText=userscore;
    msg.innerText="You won!"  ;
    msg.style.backgroundColor="green";
}
const lostgame=(userchoice,compchoice)=>{
    console.log("you lost");
    msg.innerText=`You lost the game! `;
    compscore++;
    compscores.innerText=compscore;
    msg.style.backgroundColor="red";
}
const playGame=(userchoice)=>{
   console.log("user choice=",userchoice);
   let compchoice=compgenchoice();
   console.log("computer choics=",compchoice);
   if(userchoice===compchoice){
    draw();
   }
   else if(userchoice==="rock"){
    if(compchoice==="paper"){
        lostgame();
    }else{
        wongame();
    }
   }
   else if(userchoice==="paper"){
    if(compchoice==="rock"){
        wongame();
    }
    else{
        lostgame();
    }

   }
   else if(userchoice==="scissor"){
    if(compchoice==="rock"){
        lostgame();
    }
    else{
        wongame();
    }
   }

};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
       const userchoice=choice.getAttribute("id");
       playGame(userchoice);
    });
    
});