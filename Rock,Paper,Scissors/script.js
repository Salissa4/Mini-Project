var wins = 0;
var ties = 0;
var losses = 0;
var options = ["r", "p", "s"];

var playGame = function () {
    var choice = window.prompt ('Please type R, P, or S');

    if(!choice) {
        return;
    }

    choice = choice.toLowerCase();

    var index = Math.floor(Math.random () * options.length);

    var computerChoice = options[index];

    if(computerChoice === choice) {
        ties++;
        alert("You tied with the computer");
    } else if ( 
        (choice === 'r' && computerChoice === 's') ||
        (choice === 'p' && computerChoice === 'r') ||
        (choice === 's' && computerChoice === 'p')
    ) {
        wins++;
        alert('The computer chose ' + computerChoice + ', You Win!');
    } else {
        losses++;
        alert('The computer chose ' + computerChoice + ', You Lose!');
    }

    alert('ties: ' + ties + '\nwins: ' + '\nloses: ' + lose);

    var playAgain = confirm('Do you want to play again?');

    if (playAgain) {
        playGame();
    }
    
}

playGame();


