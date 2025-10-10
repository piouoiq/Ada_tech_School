function getHumanChoice(){
    let humanChoice = (prompt("Choisissez un nombre entre 0 et 10."))
    return humanChoice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);

if (humanChoice >= 0 && humanChoice <= 10){

    for (let i = humanChoice; i >= 0; i--){
        console.log(i);
    }
    
    
} else {
    alert('ce n\'est pas une valeur disponible');
}


