let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you wins!!");
        msg.innerText=`You win!!,Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("computer wins!!");
        msg.innerText=`You lose!!,${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawgame=()=>{
    console.log("game is draw!!")
    msg.innerText="It's a draw. Play again !!";
    msg.style.backgroundColor="blue";
}

const gencompchoice=()=>{
    let options=["rock","paper","scissor"];
    const randid=Math.floor(Math.random()*3);
    return options[randid];
}

const playGame=(userchoice)=>{
    console.log("User choice:",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        //draw game condition
        drawgame();
    }
    else {
        let userwin=true;
        if(userchoice==="rock"){
        //computer produce scissor , paper
        userwin=compchoice==="paper"?false:true;

        }else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
        }else{
        userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        //console.log("choice was clicked",userchoice);
        playGame(userchoice);

    });
});