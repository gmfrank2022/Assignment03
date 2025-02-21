let randomNum = Math.round(Math.random());

let choice = prompt("Heads(H) or Tails(T): ");

let flipresult = "H";

if(randomNum<0.5){
    flipresult = "H";
}
else{
    flipresult = "T";
}

if(flipresult === "H"){
    if(choice === "H"){
        alert("The flip was heads and you chose heads...you win!")
    }
    else{
        alert("The flip was heads but you chose tails...you lose!")
    }
}
else{
    if(choice === "H"){
        alert("The flip was tails but you chose heads...you lose!")
    }
    else{
        alert("The flip was tails and you chose tails...you win!")
    }
}
