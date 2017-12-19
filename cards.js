   let cardDeck = {
       face: ["Clubs", "Diamonds", "Hearts", "Spades"],
       value: ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
   }

function createDeck(cardDeck){
    let newDeck = [];
    
    for ( let i = 0; i < 4; i+=1){
        for ( let k = 0; k < 12; k+=1){
            newDeck.push(" " + cardDeck.value[k] + " of " +  cardDeck.face[i] + " ");
        }
    }
    return newDeck;
}

function shuffleDeck(newDeck){

    let shuffle = [];
    let i = 0;

    while (i < newDeck.length){
    let num = Math.floor(Math.random() * (48));

        if( shuffle[num] === undefined){
            shuffle[num] = newDeck[i];
            i+=1;
        }
    }
    console.log("The deck has been shuffled.");
    return shuffle;
}

function giveHand(deck){
    let hand = [];
    for ( let i = 0; i < 5; i+=1){
        hand[i] = deck[i];
    }
    return hand;
}

let deck = createDeck(cardDeck);

shuffledDeck = shuffleDeck(deck);

let hand = giveHand(shuffledDeck);

console.log(`This is your hand... ${hand}`);
