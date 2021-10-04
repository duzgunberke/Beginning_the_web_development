'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector(".message").textContent='Correct Number!';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector(".guess").value);

*/

let SecretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

    document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    
    //When there is no input
    if(!guess){
       // document.querySelector(".message").textContent='No Number!';
       displayMessage('No Number !!!');
    }
    //When player win
    else if(guess===SecretNumber){
        //document.querySelector('.message').textContent="Correct Number heyy";
        displayMessage('Correct Number Heyy');
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
            
        document.querySelector('.number').textContent=SecretNumber;
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    //Wheen guess is wrong
    else if(guess!==SecretNumber)
    {
     if(score>1)
        {
            displayMessage(guess>SecretNumber?"To High":"To Low");
            score--;
            document.querySelector('.score').textContent=score;
        }
     else{
        //document.querySelector('.message').textContent="You Lost the Game";
        displayMessage('You Lost The Game');
        document.querySelector('.score').textContent=0;
        }
    }
   
});

//When restart the game
    document.querySelector('.again').addEventListener('click',function(){
    score=20;
    SecretNumber=Math.trunc(Math.random()*20)+1;
    //document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
