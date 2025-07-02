const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const { rollDice } = require('./apps/dice.js');
const { flipCoin } = require('./apps/coinflip.js');
const { tarotDeck } = require('./apps/tarot.js');

let savedUsername = '';
function startUpInterface() {
    let isntVerifiedUser = true;

    readline.question('What is your name?\n\n', (userName) => {
        switch (userName) {
            case 'dogsalt_': 
                isntVerifiedUser = false;
                savedUsername = userName; 
                console.log(`\nAhhh the Bone Witch returns....`);
                break;

            case 'WildLerch':
                isntVerifiedUser = false;
                savedUsername = userName; 
                console.log(`\nBehold... Ranger of The RoundTable Tavern...`);
                break;

            case 'CryptSeeker':
                isntVerifiedUser = false;
                savedUsername = userName; 
                console.log(`\nWell if it isnt Sosteren min... Sorceress of The RoundTable Tavern...`);
                break;

            default: 
                console.log('\nPlease input a valid username...');
                startUpInterface();
                break;
        };
        
        if (!isntVerifiedUser) {
            console.log(`Welcome, ${userName}.\nHow may the Tome's magic assist you today?\n(try 'help' if uncertain of options...)\n`);
        };
    });
};

// Startup Function Call
startUpInterface();

// Main Interface
readline.on('line', (input) => {
    switch (input) {
        case 'help':
            menuInputLog(input, savedUsername);
            console.log('\n-- Help Menu --');
            console.log('-help: This menu.');
            console.log('-dice: Opens up the Dice Roller menu.');
            console.log('-tarot: Opens up the Tarot Deck Menu.');
            console.log('-coinflip: Opens up the Coin Flipper Menu.');
            console.log('-8ball: Opens up the Magic 8 Ball Menu. (not yet implemented)');
            console.log('-exit: Exits the Tome.\n');

            if (savedUsername === 'dogsalt_') {
                console.log('-- User Specific Commands --')
                console.log('-spellbook: Displays your current spellbook contents... (not yet implemented)');
                console.log('-armory: Displays your current Armory contents... (not yet implemented)\n');
            };
            break;

        case 'dice':
            menuInputLog(input, savedUsername);
            console.log(`\nWelcome to the Dice Roller`);
            console.log(`Please select a dice, or type stop to stop rolling dice...\n`);
            // dice roller function
            diceRollerInterface();
            break;

        //add tarot deck
        case 'tarot':
            menuInputLog(input, savedUsername);
            console.log(`\nWelcome to the Tarot Deck`);
            console.log(`Please select a spread amount, and optionally a deck type and or whether\nyou want reversed cards.\nOr type stop to stop tarot reading...\n`);
            console.log('Deck choices include: fulldeck, majorarcana, and minorarcana')
            console.log('Format like this:\n<card amount> <deck choice> <allowReverse>\n\nExample:\n1 fulldeck true')
            // tarot deck function will go below here
            tarotDeckInterface();
            break;

        
        case 'coinflip':
            menuInputLog(input, savedUsername);
            console.log(`\nWelcome to the Coin Flipper`)
            console.log(`Please select a side, or type stop to stop flipping coins...\n`);
            // coin flipper function
            coinFlipperInterface();
            break;
        
        //add magic 8 ball
        case '8ball':
            menuInputLog(input, savedUsername);
            console.log(`\nWelcome to the Magic 8 Ball`);
            console.log(`Please input a question, or type stop to stop...\n`);
            // Magic 8 Ball function will go below here
            console.error(`Error: Magic 8 Ball has not been implemented yet.\nReturning to Main Interface\n(Type 'help' for help)\n`);
            magic8BallInterface();
            break;

        case 'exit':
            menuInputLog(input, savedUsername);
            console.log('goodbye...');
            // closes readline
            readline.close();
            break;
        
        // dogsalt_ Specific Cases
        case 'spellbook':
            if (savedUsername === 'dogsalt_') {
                menuInputLog(input, savedUsername);
                console.log('(not yet implemented)\n');
            } else {
                console.log(`\nInvalid Input!!!`);
            };
            break;

        case 'armory':
            if (savedUsername === 'dogsalt_') {
                menuInputLog(input, savedUsername);
                console.log('(not yet implemented)\n');
            } else {
                console.log(`\nInvalid Input!!!`);
            };
            break;

        // WildLerch Specific Cases
        //case 'something for ty, idk':
            //break;

        // CryptSeeker Specific Cases
        //case 'something for wina, idk':
            //break;

        default:
            console.log(`\nInvalid Input!!!`);
            break;
    }
});

// Menu Input Log Function
function menuInputLog(input, savedUsername) {
    console.log(`${input} input received from ${savedUsername}.`);
};

// Dice Roller Interface
function diceRollerInterface() {
    readline.question('\nWhich Dice would you like to roll? (4, 6, 8, 10, 12, 20, 100)\n', (stringDiceRoll) => {
        if (stringDiceRoll.trim().toLowerCase() === 'stop') {
            console.log(`\nExiting dice roller... please input a new command\n(Type 'help' for help)\n`)
        } else {
            // had to covert diceRoll to to something that would turn the roll back into a number from a string
            const numDiceRoll = Number(stringDiceRoll);
            rollDice(numDiceRoll, savedUsername);
            // function below resets the loop of dice rolling
            diceRollerInterface();
        };
    });
};

// Tarot Deck Interface 
function tarotDeckInterface() {
    readline.question(
        '\nSelect your spread... \n\n',
        (input) => {
            if (input.trim().toLowerCase() === 'stop') {
                console.log('\nExiting Tarot Deck... please input a new command\n(Type \'help\' for help)\n');
                return;
            }

            const [cardAmountStr, deckChoice = 'fulldeck', allowReversedStr = 'false'] = input.trim().split(/\s+/);
            const cardAmount = Number(cardAmountStr);
            const allowReversed = allowReversedStr.toLowerCase() === 'true';

            if (isNaN(cardAmount) || cardAmount < 1 || cardAmount > 78) {
                console.log('Invalid card amount. Please enter a number between 1 and 78.\nor type stop to stop pulling cards');
                tarotDeckInterface();
                return;
            }

            let result;
            if (cardAmount === 1) {
                result = tarotDeck.drawSingleRandom(deckChoice, allowReversed);
                console.log(`\n\n${savedUsername}'s pulled card: ${result}`);
            } else {
                result = tarotDeck.drawCardSpread(cardAmount, deckChoice, allowReversed);
                console.log(`\n\n${savedUsername}'s pulled cards:`);
                result.forEach((card, idx) => console.log(`${idx + 1}: ${card}`));
            }

            tarotDeckInterface();
        }
    );
}

// Coin Flipper Interface
function coinFlipperInterface() {
    readline.question(`Which side do you choose? (heads or tails)\n\n`, (chosenSide) => {
        if (chosenSide.trim().toLowerCase() === 'stop') {
            console.log(`\nExiting Coin Flipper...  please input a new command\n(Type 'help' for help)\n`);
        } else {
            flipCoin(chosenSide, savedUsername);
            coinFlipperInterface();
        };
    });
};

function magic8BallInterface() {
    console.log('fartfartfart hahahahahahhaha\n')
}
