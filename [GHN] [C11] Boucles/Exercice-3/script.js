function getHumanChoice(){
let humanChoice = number(prompt("Choisissez un nombre entre 0 et 10.")
return humanChoice
}
console.log(getHumanChoice())

if (getHumanChoice()<=10){

    for (let i=getHumanChoice; i>0; i--){
        console.log(i)
    }
    
}
else{
    getHumanChoice()
}