// etape 1
let trunk = "|";

function afficherPointeSapin() {
  let pointe = `+\n `;

  return pointe;
}

document.getElementById("pointe").innerText =
  " etape 1 : \n" + afficherPointeSapin();

//etape 1.1
function afficherEtoiles(n) {
  let etoiles = "*".repeat(n);

  return etoiles;
}

document.getElementById("etoile").innerText =
  "etape 1.1 : \n" + afficherEtoiles(2) + afficherEtoiles(5);

//etape 1.2

function afficherRectangle(hauteur, largeur) {
  // pour chaque "étage" de la hauteur
  //    appeler printEtoile

  for (let i = 0; i < hauteur; i++) {
    let row = afficherEtoiles(largeur) + "\n";
    let rectangle = row.repeat(hauteur);
    return rectangle;
  }
}

document.getElementById("rectangle").innerText =
  "etape 1.2 : \n" + afficherRectangle(5, 5);

//etape 1.3

function afficherTriangleDroite(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    row += afficherEtoiles(i) + "\n";
  }
  return row;
}

document.getElementById("triangleDroite").innerText =
  "etape 1.3 : \n" + afficherTriangleDroite(5);

//etape 1.4

function afficherTriangleGauche(n) {
  let row = "";

  for (let i = 0; i < n; i++) {
    row += afficherEtoiles(i) + "\n";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
  }

  return row;
}

document.getElementById("triangleGauche").innerText =
  "etape 1.4 : \n" + afficherTriangleGauche(5);

// //etape 1.5

// function afficherSapin(etages, hauteur_etage) {
//   let sapin = afficherPointeSapin();

//   for (let i = 0; i < hauteur_etage; i++) {
//     let row = afficherEtoiles(i) + trunk + afficherEtoiles(i) + "\n";
//     for (let j = 0; j < hauteur_etage - i - 1; j++) {
//       row += " ";
//     }
//     sapin += row;
//   }

//   return sapin;
// }

// document.getElementById("sapin").innerText =
//   "etape 1.5 : \n" + afficherSapin(5, 5);

// //etape 1.5 corrigé

// function afficherPointeSapin(hauteur) {
//   let sapin = "";
//   sapin += " ".repeat(hauteur) + "+\n";

//   for (let i = 0; i < hauteur; i++) {
//     let espace = " ".repeat(hauteur - i - 1);
//     let etoiles = afficherEtoiles(i);
//     sapin += espace + etoiles + "\n";
//   }

//   return sapin;
// }

// document.getElementById("pointe").innerText =
//   " etape 1 : \n" + afficherPointeSapin(5);

///////////////////////////
//////Etape 1.5 & 2.1//////
///////////////////////////

function afficherEtageSapin(height, pointe_offSet) {
  let sapin = "";

  let trueHeight = height + pointe_offSet;
  if (pointe_offSet < 0) {
    console.error("L'offset ne peut pas etre négatif");
    return;
  }

  for (let i = pointe_offSet; i < trueHeight; i++) {
    let space = " ".repeat(trueHeight - i);
    let etoiles = "*".repeat(i);
    sapin += space + "/" + etoiles + "|" + etoiles + "\\\n";
  }

  return sapin;
}
document.getElementById("sapin").innerText =
  " etape 1.5 & 2.1 : \n" + afficherEtageSapin(3, 0) + afficherEtageSapin(3, 1);
