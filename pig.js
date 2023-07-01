var scores, roundscores, activeplayer, dice;
scores = [0,0];
roundscores = 0;
activeplayer = 0;

 dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('#current--' + activeplayer).textContent = dice;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';


document.querySelector('.btn--roll').addEventListener('click', function(){
// 1.random number
 var dice = Math.floor(Math.random() * 6) + 1;

// 2.display result

var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';

//update the round score IF the rolled number was NOT a 1
if (dice !== 1){
roundscores += dice;
document.querySelector('#current--' + activeplayer).textContent = roundscores;
}else{
//nextplayer
nextplayer();
}


});
document.querySelector('.btn--hold').addEventListener('click', function(){
    
    //add current score to GLobal score 
    scores[activeplayer] += roundscores;
    
    //update the ul
    document.querySelector('#score--' + activeplayer).textContent = scores[activeplayer];
//check if the nextplayer won their game
if(scores[activeplayer] >= 20){
    document.querySelector('#name--' + activeplayer).textContent = 'winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--' + activeplayer).classList.add('winner');
    document.querySelector('.player--' + activeplayer).classList.remove('active');
} else {
    nextplayer();
}
//next player
    
});
function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer =0;
    roundscores = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    
    document.querySelector('.dice').style.display = 'none';
    
}