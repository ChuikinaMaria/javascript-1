/* Caesar Cipher

  this is a simple encoding algorithm that replaces letters in a message with a new letter

  the new letter is determined by shifting N spaces across the alphabet

  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
*/

const caesarizeTests = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^M*(#' },
];
function caesarize(strToCaesarize, shiftNumber) {
 let checkChar;
 let shiftedChCode;
 let shiftedStr = ``;
for (i=0; i<strToCaesarize.length; i++) {
  let chCode = strToCaesarize.charCodeAt(i);
  checkChar = (65<= chCode && chCode <= 90) ? `upLetter`:
  (97 <= chCode && chCode <= 122) ? `lowLetter` :
   `symbol`;
   let newChCode = shiftNumber + chCode;
  if (checkChar === `symbol`) {shiftedChCode = chCode;
  } else if (checkChar === `upLetter`) {shiftedChCode = (newChCode > 90) ? newChCode - 26:
    newChCode < 65 ?  newChCode + 26 : newChCode;
  } else {shiftedChCode = (newChCode > 122) ? newChCode - 26:
  newChCode < 97 ?  newChCode + 26 : newChCode;
  }
  shiftedStr = shiftedStr + String.fromCharCode(shiftedChCode);
  } 
return shiftedStr;
}

evaluate(caesarize, caesarizeTests);


function caesarizeHandler() {

  // read and process user input (this works, no need to change it!)
  const strToCaesarize = document.getElementById('caesarize-string-input').value;

  const rawNumInput = document.getElementById('caesarize-number-input').value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('second input to "caesarize it" must be a number');
  }


  // pass user input through core logic (this works!  no need to change it)
  const caesarized = caesarize(strToCaesarize, shiftNumber);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('caesarize-output');
  outputField.innerHTML = caesarized;

  console.log('\n--- caesarizeHandler ---');
  console.log('strToCaesarize:', typeof strToCaesarize, ',', strToCaesarize);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('caesarized:', typeof caesarized, ',', caesarized);
};
const caesarizeButton = document.getElementById('caesarize-button');
caesarizeButton.addEventListener('click', caesarizeHandler);
