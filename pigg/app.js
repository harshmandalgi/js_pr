/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
window.alert('Press ctrl+u for game rules');
//call initialize
init();

//roll button event
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //random number generation
    var random = Math.floor(Math.random() * 6 ) + 1;
    //console.log(random);

    //display image
    document.querySelector('.dice').src = 'dice-' + random + '.png';
    document.querySelector('.dice').style.display = 'block';

    //add to current score
    roundScore += random;
    //console.log(roundScore, activePlayer, random);
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    //check for 1 and do relevant stuff
    if(random === 1){
        document.querySelector('.dice').style.display = 'none';
        roundScore = 0;
        nextPlayer();    
    }
    
        
    }
});


//hold button event
document.querySelector('.btn-hold').addEventListener('click', function(){
    
    //hide the dice
    document.querySelector('.dice').style.display = 'none';
    
    if(gamePlaying){
        
    //save current score to player round score
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    
    
    //check if the player won
    if( scores[activePlayer] >= 100){
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('#name-' + activePlayer ).textContent = 'winner!'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gamePlaying = false;
    
    }else{
    //else call nextPlayer
        nextPlayer();
        //console.log(roundScore, activePlayer);
    }
        
        
    }
    
    
});

//new game button event
document.querySelector('.btn-new').addEventListener('click', init);
    

function init(){
    console.log('init called')
    //variable initialization
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //set everything to default
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //activeplayer set to first player
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

    //hide image
    document.querySelector('.dice').style.display = 'none';
}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //change active window
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //reset current scores
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}



















