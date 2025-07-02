const tarotDeck = {
    majorArcana: [
        '0-TheFool', '1-TheMagician', '2-TheHighPriestess', 
        '3-TheEmpress', '4-TheEmperor', '5-TheHeirophant',
        '6-TheLovers', '7-TheChariot', '8-Strength',
        '9-TheHermit', '10-TheWheelOfFortune', '11-Justice',
        '12-TheHangedMan', '13-Death', '14-Temperance',
        '15-TheDevil', '16-TheTower', '17-TheStar', 
        '18-TheMoon', '19-TheSun', '20-Judgement',
        '21-TheWorld'
    ],

    minorArcana: [
        ['AceOfWands', 'TwoOfWands', 'ThreeOfWands', 
        'FourOfWands', 'FiveOfWands', 'SixOfWands', 
        'SevenOfWands', 'EightOfWands', 'NineOfWands',
        'TenOfWands', 'PageOfWands', 'KnightOfWands',
        'QueenOfWands', 'KingOfWands'],

        ['AceOfCups', 'TwoOfCups', 'ThreeOfCups', 
        'FourOfCups', 'FiveOfCups', 'SixOfCups', 
        'SevenOfCups', 'EightOfCups', 'NineOfCups',
        'TenOfCups', 'PageOfCups', 'KnightOfCups',
        'QueenOfCups', 'KingOfCups'],

        ['AceOfPentacles', 'TwoOfPentacles', 'ThreeOfPentacles', 
        'FourOfPentacles', 'FiveOfPentacles', 'SixOfPentacles', 
        'SevenOfPentacles', 'EightOfPentacles', 'NineOfPentacles',
        'TenOfPentacles', 'PageOfPentacles', 'KnightOfPentacles',
        'QueenOfPentacles', 'KingOfPentacles'],

        ['AceOfSwords', 'TwoOfSwords', 'ThreeOfSwords', 
        'FourOfSwords', 'FiveOfSwords', 'SixOfSwords', 
        'SevenOfSwords', 'EightOfSwords', 'NineOfSwords',
        'TenOfSwords', 'PageOfSwords', 'KnightOfSwords',
        'QueenOfSwords', 'KingOfSwords']
    ],

    get fullDeck() {
        return this.majorArcana.concat(...this.minorArcana);
    },

    // Single Card Draws 
    drawSingleRandom(deckChoice = 'fullDeck', allowReversed = false) {
        let deck;
        switch (deckChoice) {
            case 'majorarcana':
                deck = this.majorArcana;
                break;
            case 'minorarcana':
                deck = [].concat(...this.minorArcana);
                break;
            case 'fulldeck':
            default:
                deck = this.fullDeck;
                break;
        }
        const randomIndex = Math.floor(Math.random() * deck.length);
        let card = deck[randomIndex];
        if (allowReversed) {
            const isReversed = Math.random() < 0.5;
            card = isReversed ? `${card} (Reversed)` : card;
        }
        return card;
    },

    // Card Spread draws 
    drawCardSpread(cardAmount, deckChoice = 'fullDeck', allowReversed = false ) {
        let chosenCardAmount = cardAmount;
        let deck;

        switch (deckChoice) {
            case 'majorArcana':
                deck = this.majorArcana;
                break;
            case 'minorArcana':
                deck = [].concat(...this.minorArcana);
                break;
            case 'fullDeck':
            default:
                deck = this.fullDeck;
                break;
        }
        const cards = [];
        const usedIndexes = new Set();
        while (cards.length < chosenCardAmount) {
            const idx = Math.floor(Math.random() * deck.length);
            if (!usedIndexes.has(idx)) {
                let card = deck[idx];
                if (allowReversed) {
                    const isReversed = Math.random() < 0.5;
                    card = isReversed ? `${card} (Reversed)` : card;
                }
                cards.push(card);
                usedIndexes.add(idx);
            }
        }
        return cards;
    }
};

// exports
module.exports = { tarotDeck };