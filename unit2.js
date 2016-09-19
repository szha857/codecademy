
function unit2(){
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    
    var choice1 = computerChoice;
    var choice2 = computerChoice;
    if (choice1 === choice2){
        return "The result is a tie!"}
    else if(choice1 === "rock"){
        if(choice2 === "scissor"){
            return "rock wins"}    
        if(choice2 === "paper"){
            return "paper wins"}
        }   
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "paper wins"
            }
        else{
            return "scissors wins"}  
        }
    else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            return "rock wins"}
            
        if(choice2 === "paper"){
            return "scissors wins"}
        }        
    };
};