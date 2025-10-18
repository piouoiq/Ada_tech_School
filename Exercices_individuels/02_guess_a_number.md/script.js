
//étape 1 & 2 Avec Mathurin

function askNumber() {

    const input = prompt("Choisissez un nombre entier:");
    const inputNumber =Number(input)

    console.log('askNumber log',inputNumber);

    return inputNumber;
}

function didIWin(givenNumber){

    const numberToGuess= 22;
    if (givenNumber===numberToGuess){

        alert("bravo vous avez deviné le nombre!");
    }

    else if (givenNumber<numberToGuess){

        alert("plus grand!")
    }
    else {

        alert("plus petit!")
    }
}

const givenNumber = askNumber();
console.log('givenNumber', givenNumber);
didIWin(givenNumber)

//étape 3 

// function gameplay(didIWin){

//      for (let i = givenNumber; i !== didIWin(givenNumber); i++) {
//         askNumber();
//   }
// return gameplay;
// }

// gameplay(didIWin(givenNumber));