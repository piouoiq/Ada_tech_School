//1
nb = getHumanChoice() ;

function squareNb() {
	return nb * nb;
}

let result = squareNb();
console.log(result);

//2

function resultByTen() {
	return result * 10;
}

console.log(resultByTen());

//3

function getHumanChoice() {
	const choice = prompt("Choisissez un nombre");
	return choice;
}
