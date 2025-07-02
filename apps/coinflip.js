function flipCoin(chosenSide, savedUsername) {
    let flip = Math.floor(Math.random() * 2);
    let flippedSide;

    if (flip != 1) {
        flippedSide = 'tails';
    } else {
        flippedSide = 'heads';
    }

    switch (chosenSide) {
        case 'heads':
            console.log(`\n${savedUsername} You chose ${chosenSide}...`);
            console.log(`The coin flipped ${flippedSide}...`);
            if (chosenSide != flippedSide) {
                console.log('Mismatch!\n');
            } else {
                console.log('Match!\n');
            } 
            break;

        case 'tails':
            console.log(`\n${savedUsername} You chose ${chosenSide}...`);
            console.log(`The coin flipped ${flippedSide}...`);
            if (chosenSide != flippedSide) {
                console.log('Mismatch!\n');
            } else {
                console.log('Match!\n');
            } 
            break;
        
        default:
            console.log(`\nInvalid Coin Side. Please pick Heads or tails\n(Or type stop to stop flipping coins)\n`);
            break;
    };
}

// exports
module.exports = { flipCoin };