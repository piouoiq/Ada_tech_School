// ________________________________
//|Avant refactorisation
//|________________________________

// function f1(arr) {
//   let n = 0;
//   for (let i = 0; i < arr.length; i++) {
//     n += arr[i];
//   }
//   return n;
// }

// console.log(f1([1, 2, 3, 4])); // Devrait retourner 10
// console.log(f1([1, 2])); // Devrait retourner 3
// console.log(f1([0])); // Devrait retourner 0
// console.log(f1([1, 0])); // Devrait retourner 1

// ________________________________
//|Après refactorisation
//|________________________________

//étape 1

// function numberSum(arr) {
//   let sum = 0;
//   for (let i in arr) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(numberSum([1, 2, 3, 4]));
// console.log(numberSum([1, 2]));
// console.log(numberSum([0]));
// console.log(numberSum([1, 0]));

//étape 2

function numberSum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Erreur: Vous devez passer un tableau de nombres";
  }
  let sum = 0;

  for (let value of arr) {
    if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;
}

console.log(numberSum([1, 2, 3, 4]));
console.log(numberSum([1, 2]));
console.log(numberSum([0]));
console.log(numberSum([1, 0]));

console.log(numberSum([1, "Haha"]));
console.log(numberSum([]));
console.log(numberSum());
console.log(numberSum("Huhu"));
