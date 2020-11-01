function computerPlay(){
    //console.log('First function')
    const computerChoice=Math.floor(Math.random()*3)
    if(computerChoice===0){
        return 'paper';
    }
    else if(computerChoice===1){
        return 'scissor';
    }
    else if(computerChoice===2){
        return 'rock';
    }
    else{
        console.log('Does not exist');

    }
}
function getUserChoice(userInput){
    if(userInput==='scissor' || userInput==='rock' || userInput==='paper'){
        return userInput;
    }
    else{  
    console.log('Invalid input choice')
    }

}

function UserComputerInput(userSelection,computerSelection){
    if(userSelection==='paper' && computerSelection==='scissor'){
        return 'You lose! Scissor cuts a paper.'
    }
}
function game(userInput,computerPlay){
    if(computerPlay===userInput){
        return 'The game is a tie!'
    }
    else if(computerPlay==='rock' && userInput==='paper'){
        return 'User wins! Paper covers the rock.'
    }
    else if(computerPlay==='scissor' && userInput==='paper'){
        return 'User wins! Scissor cuts the paper'
    }
    else if(userInput==='rock' && userInput==='scissor'){
        return 'You lose! scissor cannot cut the rock.'
    }
    else{
        return 'The game did not execute!'
    }

}
//console.log('hello world')
let userInput=prompt('Please enter your choice.');
userInput=getUserChoice(userInput);
let computerInput=computerPlay();

if(userInput && computerInput){
    console.log(game(userInput,computerInput));
}