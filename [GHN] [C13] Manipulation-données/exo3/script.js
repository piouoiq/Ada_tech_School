const fs = require("fs");
const filepath = "exo3/data.json";

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);

// Fait en groupe avec la classe
//1
console.log("Type of data: ", typeof data);

//2
console.log(data[0]);

//3
console.log("Longueur du tableau = ", data.length);

//4
console.log(" Quatrième object du tableau: ", data[4]);

//5
let sommeAge = 0;

for (let i = 0; i < data.length; i++) {
  sommeAge += data[i].age;
}
const avg = sommeAge / data.length;
console.log("Moyenne d'age des candidates : ", avg);
