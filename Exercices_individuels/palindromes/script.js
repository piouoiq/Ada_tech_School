//  _____________________________________________________
// |étape 1
// |_____________________________________________________

function maxDaysInMonth(month, year) {
  const mois31 = [1, 3, 5, 7, 8, 10, 12];
  const mois30 = [4, 6, 9, 11];

  if (mois31.includes(month)) return 31;
  if (mois30.includes(month)) return 30;

  // Février (bissextile si divisible par 4 mais pas par 100, sauf si divisible par 400)
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return isLeapYear ? 29 : 28;
}

function isValidDate(dateString) {
  // Vérifie le format dd/mm/yyyy
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dateString.match(regex);
  if (!match) return false;

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  if (year < 1000 || year > 9999) return false;
  if (month < 1 || month > 12) return false;

  const maxDays = maxDaysInMonth(month, year);

  return day >= 1 && day <= maxDays;
}

console.log(isValidDate("03/04/2001"));
console.log(isValidDate("03/3/2001"));
console.log(isValidDate("31/04/2001"));
console.log(isValidDate("29/02/2020"));
console.log(isValidDate("29/02/2021"));

//  _____________________________________________________
// | étape 2
// |_____________________________________________________

// function isPalindrome(dateString) {
//   if (!isValidDate(dateString)) {
//     return false;
//   }

//   const digitsOnly = dateString.replace(/\D/g, "");
//   const reversed = digitsOnly.split("").reverse().join("");

//   return digitsOnly === reversed;
// }
// console.log(isPalindrome("11/02/2011"));

//  _____________________________________________________
// | étape 4
// |_____________________________________________________

function isPalindrome(String) {
  const cleanString = String.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleanString.split("").reverse().join("");
  return cleanString === reversed;
}

function isDatePalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }
  const digitsOnly = dateString.replace(/\D/g, "");
  return isPalindrome(digitsOnly);
}

console.log(isDatePalindrome("10/02/2001"));
console.log(isDatePalindrome("03/3/2001"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("boat"));

//  _____________________________________________________
// | étape 3
// |_____________________________________________________

function getNextPalindromes(count) {
  const palindromes = [];
  let date = new Date(); //Date() est une fonction intégrée à JS qui renvoie la date et l'heure actuelle.

  while (palindromes.length < count) {
    date.setDate(date.getDate() + 1); // avec getDate() on récupère le jour (1-31) de la variable date & avec setDate() on définit le jour du mois après avoir incrémenté la variable date.

    const day = String(date.getDate()).padStart(2, "0"); // padStart(2,"0") vérifie que le jour est sur 2 chiffres & ajoute un 0 devant si pas le cas.
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const dateString = `${day}/${month}/${year}`;

    if (isPalindrome(dateString)) {
      palindromes.push(dateString);
    }
  }

  return palindromes;
}

console.log(getNextPalindromes(10));
