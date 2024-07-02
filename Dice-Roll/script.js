document.getElementById('h1').innerText = "Let's Play";
document.querySelector('.Player1').innerText = 'Player 1';
document.querySelector('.Player2').innerText = 'Player 2';
document.getElementById('demo').innerHTML = '<button type="button" class="btn" onclick="rollTheDice()">Roll The Dice</button>';
document.getElementById('demo1').innerHTML = '<button type="button" class="btn" onclick="editName()">Edit Names</button>';

// Player names
let player1 = 'Player 1';
let player2 = 'Player 2';

function editName() {
    let newPlayer1 = prompt("Change Player 1 Name:");
    let newPlayer2 = prompt("Change Player 2 Name:");

    if (!newPlayer1 || !newPlayer2) {
        alert('Please enter valid names');
        return;
    }

    player1 = newPlayer1;
    player2 = newPlayer2;

    document.querySelector('.Player1').innerText = player1;
    document.querySelector('.Player2').innerText = player2;
}

function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    let result = document.querySelector('h1');
    let player1Total = 0;
    let player2Total = 0;
    let rolls = 5;
    let currentRoll = 0;

    const roll = () => {
        diceNum1.setAttribute("src", "diceroll.gif");
        diceNum2.setAttribute("src", "diceroll.gif");

        setTimeout(() => {
            let randomNumber1 = Math.floor(Math.random() * 6) + 1;
            let randomNumber2 = Math.floor(Math.random() * 6) + 1;

            diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
            diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

            player1Total += randomNumber1;
            player2Total += randomNumber2;

            document.getElementById('player1Score').innerText = `Player 1 Total: ${player1Total}`;
            document.getElementById('player2Score').innerText = `Player 2 Total: ${player2Total}`;

            currentRoll++;
            if (currentRoll < rolls) {
                roll();
            } else {
                if (player1Total === player2Total) {
                    result.innerHTML = 'Draw!';
                } else if (player1Total < player2Total) {
                    result.innerHTML = player2 + " Wins!";
                } else {
                    result.innerHTML = player1 + " Wins!";
                }
            }
        }, 1000); 
    };

    roll();
}
