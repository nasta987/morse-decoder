const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let arraySt= [];
    for (let i=0; i < expr.length; i+=10) {
      arraySt.push(expr.slice(i, i+10))
    }
    console.log(arraySt);

let arrayMorse = arraySt.map (elementSt => {
  let decoderElement ="";
  
  if (elementSt === "**********") {
return " "
  } 
  for (let j=0; j< elementSt.length; j+=2) {
    let decoderCouple = elementSt.slice(j, j + 2);
            if (decoderCouple === '10') {
                decoderElement += '.';
            } else if (decoderCouple === '11') {
                decoderElement += '-';
            } else {
                decoderElement += '';
            }
        }
        return decoderElement;
    });

    console.log(arrayMorse);
    let morseString = "";
    
    for (let z =0; z < arrayMorse.length; z++) {

 if (arrayMorse[z] === " ") {
            morseString += " ";
        } else {
            morseString += MORSE_TABLE[arrayMorse[z]] || '';
        }
 }

    console.log(morseString);
    return morseString;

}

module.exports = {
    decode
}
