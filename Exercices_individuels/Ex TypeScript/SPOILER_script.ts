// // Étape 1 : Lancer le voyage temporel
// // Écrire une fonction timeTravel, qui prend en paramètre currentYear et qui retourne "Travel to ${currentYear}"
// function timeTravel(year: number): string {
//     return `💥 Nom de Zeus, direction ${year} !`;
// }

// // Étape 3 : le tableau de bord de Doc
// // Écrire une fonction setDestination, qui prend en paramètre date, de type string ou number. Cette fonction doit TOUJOURS retourner un nombre (donc si c'est une string, la convertir en nombre en utilisant parseInt()-> indice slide 10 de la présentation)
// function setDestination(date: string | number): number {
//     if (typeof date === "string") {
//         return parseInt(date);
//     } else {
//         return date;
//     }
// }

// // Étape 4 : Le conducteur de la Dolorean
// // Écrire une interface Pilot, qui a 3 propriétés : name (chaine de caractères), age (nombre), era (nombre)
// interface Pilot {
//   name: string;
//   age: number;
//   era : number
// }

// // Étape 5 : Créer l'objet Marty
// let marty: Pilot = {
//     name: "Marty McFly",
//     age: 17,
//     era : 1985
// };

// // Étape 6 : Les coordonnées spacio temporelles
// // Écrire un type nommé TypeCoord, qui est un tableau de 3 nombres : le jour, le mois et l'année
// type TimeCoords = [number, number, number]; // [jour, mois, année]

// // Étape 7 : Rentrer les coordonnées de l'année 1955
// // Écrire coords1955, qui correspond au 5 novembre 1955
// let coords1955: TimeCoords = [5, 11, 1955];

// // Étape 8 : Lancement de la Dolorean
// // Écrire une fonction launchSequence, qui prends en paramètres le pilote et les coordonnées temporelles, et qui retourne "${nomDuPilote} décolle ! Utiliser aussi timeTravel(year) pour indiquer l'année de destination"
// function launchSequence(pilot: Pilot, coords: TimeCoords): string {
//   const destinationYear = setDestination(coords[2]);
//     return `${pilot.name} décolle !  ${timeTravel(destinationYear)}`;
//     }

// // Appeller la fonction pour vérifier que tout marche bien
// console.log(launchSequence(marty, coords1955));

// //Étape 9 : On a oublié le plutonium !
// // Ajouter une propriété optionnelle à Pilot : plutoniumLevel (nombre)
// interface Pilot {
//     name: string;
//     age: number;
//     era : number;
//     plutoniumLevel?: number;
// }

// // Étape 10 : Ajouter du plutonium à Marty pour qu'il puisse décoller
// marty.plutoniumLevel = 4;

// // Étape 11 : Changer LaunchSequence
// // Gérer le cas ou le pilote n'a pas de plutonium, il devra rester dans son année. On part également du principe que si plutonium n'est pas indiqué, alors il équivaut à 0.
// function launchSequence(pilot: Pilot, coords: TimeCoords): string {
//     let plutoniumLevel : number
//     if(pilot.plutoniumLevel == undefined) {
//         plutoniumLevel = 0
//     }
//      else {
//         plutoniumLevel = pilot.plutoniumLevel
//      }

//     if (plutoniumLevel <= 0) {
//         return `${pilot.name} ne peux pas voyager dans le temps, il n'a pas de plutonium ! Il doit rester en ${pilot.era}`;
//     }

//     const destinationYear = setDestination(coords[2]);
//     return `${pilot.name} décolle ! ${timeTravel(destinationYear)}`;
// }

// console.log(launchSequence(marty, coords1955))
