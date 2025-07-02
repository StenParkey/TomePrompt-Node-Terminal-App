// dice roller functionality
function rollDice(diceRoll, savedUsername) {
  let roll;
  if (diceRoll === 100) {
    roll = Math.floor(Math.random() * 100) + 1;
  } else if (diceRoll === 20) {
    roll = Math.floor(Math.random() * 20) + 1; 
  } else if (diceRoll === 12) {
    roll = Math.floor(Math.random() * 12) + 1;
  } else if (diceRoll === 10) {
    roll = Math.floor(Math.random() * 10) + 1;
  } else if (diceRoll === 8) {
    roll = Math.floor(Math.random() * 8) + 1;
  } else if (diceRoll === 6) {
    roll = Math.floor(Math.random() * 6) + 1;
  } else if (diceRoll === 4) {
    roll = Math.floor(Math.random() * 4) + 1;
  } else {
    console.log("Invalid dice size! Choose from 4, 6, 8, 10, 12, 20, or 100.\nOr type stop to stop rolling dice...\n");
    return;
  }

  console.log(`${savedUsername} You rolled a ${roll} on a d${diceRoll}!`);

  if (diceRoll === 100) {
    if (roll === 100) {
      console.log(`Insane Critical Success! Great job!`);
    } else if (roll === 1) {
      console.log('Insane Critical Fail!');
    } 
  } else if (diceRoll === 20) {
    if (roll === 20) {
      console.log(`Critical Success! Great job!`);
    } else if (roll === 1) {
      console.log('Critical Fail!');
    }
  } else {
    if (roll === 1) {
      console.log('Weak hit!');
    }
  }

  return roll;
}

// exports
module.exports = { rollDice };