// Etape 2

// let message = "Bonjour ";
// let firstName = "Mélissa";

// message += firstName +" ! "; 

// console.log(message);


// Etape 3

// let message = "Bonjour ";

// function sayHello(firstName){

// return message += firstName +" ! "; 



// }
// console.log(sayHello("Psykokwak"));



// Etape 4

// let message = "";

// function sayHello(firstName, hour){

//     if( hour >= 18){
//         message = "Bonsoir ";
//     }
//     else{
//         message = "Bonjour ";
        
//     }
//      return message += firstName +" ! ";
//     }

// console.log(sayHello("Psykokwak", 22));
// console.log(sayHello("Psykokwak", 6));
// console.log(sayHello("Psykokwak", 18));


//Etape 6


let message = "";
let hour = Number(prompt("Quelle heure est-il ?","ex: 19"));

function sayHello(firstName,hour){

    if( hour >= 18 && hour <=23){
        message = "Bonsoir ";
    }
    else if (hour >= 0 && hour <= 17){
        message = "Bonjour ";
        
    }
    else{
        alert("la valeur saisie n'est pas bonne")
    }
     return message += firstName +" ! ";
    }

document.querySelector('h1').innerText = sayHello("Psykokwak", hour);
