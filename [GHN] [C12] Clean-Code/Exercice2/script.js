// ________________________________
//|Avant refactorisation
//|________________________________

// function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
//   let rapport = "Rapport utilisateur :\\n";
//   rapport += "Nom : " + nom + "\\n";
//   rapport += "Age : " + age + " ans\\n";
//   rapport += "Ville : " + ville + "\\n";
//   rapport += "Profession : " + profession + "\\n";
//   if (estAbonne == true) {
//     rapport += "Statut : Abonné\\n";
//   } else {
//     rapport += "Statut : Non abonné\\n";
//   }
//   if (age < 18) {
//     rapport += "Catégorie : Jeune\\n";
//   } else if (age >= 18 && age < 60) {
//     rapport += "Catégorie : Adulte\\n";
//   } else {
//     rapport += "Catégorie : Senior\\n";
//   }
//   return rapport;
// }

// ________________________________
//|Après refactorisation
//|________________________________

const statutAbonnement = (estAbonne) => (estAbonne ? "Abonné" : "Non abonné");

const categorieAge = (age) => {
  if (age < 18) return "Jeune";
  if (age < 60) return "Adulte";
  return "Senior";
};

const genererRapportUtilisateur = (nom, age, ville, profession, estAbonne) => `
Rapport utilisateur :
Nom : ${nom}
Âge : ${age} ans
Ville : ${ville}
Profession : ${profession}
Statut : ${statutAbonnement(estAbonne)}
Catégorie : ${categorieAge(age)}
`;

console.log(genererRapportUtilisateur("Ron", 37, "London", "Wizzard", true));

console.log(
  genererRapportUtilisateur("Edward", 34, "Ipswich", "Singer", false)
);
