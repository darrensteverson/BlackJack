
var suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
var value = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
var startGame = false;
var gameOver = false;
var winner = false;
var deck = [];
var userCards = [];
var dealerCards = [];
var userScore = 0;

// Display to the DOM
var game = document.getElementById("game");
var newGameButton = document.getElementById("newgamebutton");
var hitButton = document.getElementById("hitbutton");
var stayButton = document.getElementById("staybutton");

// Hide Buttons at Start of Game
hitButton.style.display = "none";
stayButton.style.display = "none";
gameStatus();

// New Game Button on onClick
newGameButton.addEventListener("click", function () {
    game.innerText = "New Game Starting.....";
    newGameButton.style.display = "none";
    startGame = true;
    winner = false;
    gameOver = false;

    // Shuffle New Deck on Button Click
    deck = newDeck();
    userCards = [nextCard(), nextCard()];
    dealerCards = [nextCard(), nextCard()];

    // Hide Buttons After Button Click
    setTimeout(function () {
        hitButton.style.display = "inline";
        stayButton.style.display = "inline";
        gameStatus();
       
    }, 1500);
});
// New Deck 
function newDeck() {
    deck = [];
    for (i = 0; i < suit.length; i++) {
        for (d = 0; d < value.length; d++) {
            var card = {
                suit: suit[i],
                value: value[d],
            };
            deck.push(card)
        };
        return deck;
    };
};
// Card Name
function cardName(card) {
    return card.value + " of " + card.suit;
}
// Next Card 
function nextCard() {
    return deck.shift();
};

// Game Status

function gameStatus(){
    if (!startGame){
        title.innerText = "Welcome To BlackJack";
        game.innerText = "";
    } else {
        title.innerText = "";
        game.innerText = "Your Turn!"
        };
};



// Console
console.log("Welcome to BlackJack!");
console.log("Cards Dealt");
console.log("" + cardName(userCards[0]));
console.log("" + cardName(userCards[1]));