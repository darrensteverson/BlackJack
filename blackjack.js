console.console.log("Welcome to BlackJack!");

var suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
var value = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
var deck = newDeck();
var minunmumBet = 10;

// Display to the DOM
var game = document.getElementById("game");
var newGameButton = document.getElementById("newgamebutton");
var hitButton = document.getElementById("hitbutton");
var stayButton = document.getElementById("staybutton");

// Hide Buttons at Start of Game
hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addE

// New Deck 
function newDeck() {
    deck = [];
    for (i = 0, i < suit.length, i++) {
        (d = 0, d < value.length, d++){

            var card {
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

// Player Cards
var userCards = [nextCard(), nextCard()];


Alert("Welcome to BlackJack!");
console.log("Cards Dealt");
console.log("" + cardName(userCards[0]));
console.log("" + cardName(userCards[1]));