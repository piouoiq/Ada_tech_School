//1
 function addThreeNumbers() {
   return 1+2+3; 
}

const resultat = addThreeNumbers();
console.log(`Le résultat de la somme est ${resultat}`); 



// 2
function  addThreeNumbersWithArg(nb1,nb2,nb3){

    const total= nb1 + nb2 + nb3 ;
    console.log(`Le résultat de la somme est ${total}`);
}
let nb1=2
let nb2=2
let nb3=3

addThreeNumbersWithArg(nb1,nb2,nb3);


//3

function  addThreeNumbersWithArg(nb1,nb2,nb3){

    const total= nb1 + nb2 + nb3 ;
    console.log(`Le résultat de la somme est ${total}`);
}

addThreeNumbersWithArg(1,2,3);
addThreeNumbersWithArg(456,44,126);
addThreeNumbersWithArg(1,1,1);
