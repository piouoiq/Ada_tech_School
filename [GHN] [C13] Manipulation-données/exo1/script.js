//exercice 1

const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
];

//1 & 2

console.log(candidates[0]);
console.log(candidates[7]);

//3
function selectCandidate() {
  for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i]);
  }
}

selectCandidate();

//4
let candidateList = document.getElementById("candidateList");

for (let i = 0; i < candidates.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = candidates[i];
  candidateList.appendChild(listItem);
}
