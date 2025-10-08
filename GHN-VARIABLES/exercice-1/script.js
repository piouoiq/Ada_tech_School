// // Nous souhaitons faire la somme du prix de plusieurs articles
// // Prix de deux articles

// let a1 = 10
// let a2 = 20

// // Nous calculons le total
// const tot = a1 + a2

// // Prix d'un troisieme article
// let a3 = "50"

// // Nous ajoutons a3 au total
// tot = tot + a3

// console.log("Le prix total avant reduction est de : ", tot)
// console.log("Le prix total après reduction est de : ", tot2)

// //Nous appliquons 20% de reduction
// let tot2 = tot - tot*0,2




// code corrigé

let a1 = 10;
let a2 = 20;

let tot = a1 + a2;

let a3 = 50;

tot = tot + a3;

let tot2 = tot - tot*0.2;

console.log("Le prix total avant reduction est de : ", tot)
console.log("Le prix total après reduction est de : ", tot2)




//erreurs consoles : 

//1 :  Uncaught SyntaxError: Unexpected number -> pour écrire un nombre à virgule on utilise un point et non une virgule 
//2 :  script.js:37 Uncaught TypeError: Assignment to constant variable -> il faut changer const tot en let tot car c'est une variable qui change 
//3 :  script.js:40 Uncaught ReferenceError: Cannot access 'tot2' before initialization -> il faut mettre le let tot2 avant les console.log

