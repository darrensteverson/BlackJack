console.console.log("Welcome to BlackJack!");

var suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
var value = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
var deck = newDeck();
var minunmumBet = 10;

function newDeck (){
    deck = [];
        for (i = 0, i < suit.length, i++){
                (d = 0, d < value.length, d++){

                    var card {
                        suit:suit[i],
                        value:value[d]],
                    };

                        deck.push(card)
                        };
         return deck;
    };
};

function cardName(card) {
    return card.value + " of " + card.suit;
}

function nextCard (){
    return deck.shift();
};


var userCards = [nextCard(), nextCard()];



Alert("Welcome to BlackJack!");
console.log("Cards Dealt");
console.log("" + cardName(userCards[0]));
console.log("" + cardName(userCards[1]));