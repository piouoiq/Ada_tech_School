function repeterPhrase(phrase, nbRepetitions){
    for (let i = 0; i < nbRepetitions; i++) {
        console.log(phrase) ;
}
}

repeterPhrase("une phrase random",3)

function calculPoints(pointsActuels,pointsAjoutes){
    const total=pointsActuels+pointsAjoutes ;

    console.log(`vous avez ${total} points`);

}

calculPoints(25,56)


function Presentation(prenom, maison){

    console.log(`${prenom} appartient à ${maison}`)
}

Presentation("Melissa","Serdaigle")