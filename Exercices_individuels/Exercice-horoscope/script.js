const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];


console.log(document.getElementById("horoscope"))


let monElementBase = document.getElementById("horoscope");

let articles="";
for (let item of horoscope) {
  let article = '<article><h2>'+item.sign+'</h2><p>'+item.description+'</p></article>';
  articles =  articles + article; 
}
monElementBase.innerHTML = articles;

// autre maniere : 

// for (let item of horoscope) {

//  monElementBase.innerHTML +=

// // `
// //  <article>
// //    <h2>$(item.sign)</h2>
// //    <p>$(item.description)</p>
// //  </article>';
// // ` 
// // }
// les ` servent a englober le contenu 



let count=0;

const myButton = document.getElementById("counter");
// const myButton = document.querySelector("#counter");  autre manière

myButton.addEventListener("click",() =>{
  count++;
myButton.innerText=`${count} clics!`;
});

 

// //autre manière
// let count=0;

// const myButton = document.getElementById(".counter");

// function clickCount(){
//   count++;
//   myButton.innerText=`${count}clics!`;
// }

// myButton.addEventListener("click","clickCount");