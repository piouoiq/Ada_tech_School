
//Le code est un indicateur méteo, il donne une indication String pour chaque plage de temperature.

//En dessous de 0°c ouvre une boite de dialogue avec la valeur string "freezing weather"
//De 0 à 10 ouvre une boite de dialogue avec la valeur string "very cold weather"
//De 10 à 20 ouvre une boite de dialogue avec la valeur string "cold waether"
//De 20 à 30 ouvre une boite de dialogue avec la valeur string "normal in temp"
//De 30 à 40 ouvre une boite de dialogue avec la valeur string "it's hot"
//Au dessus de 40 ouvre une boite de dialogue avec la valeur string " it's very hot"


// version if/else

let tmp = 15; 

    if (tmp < 0){
         alert("Freezing weather.");
    }   
       
    else if (tmp < 10) {
        alert("Very cold weather.");
    } 
        
    else if (tmp < 20) {
        alert("Cold weather.");
    } 
           
    else if (tmp < 30) {
        alert("Normal in temp.");
    }
         
    else if (tmp < 40) {
        alert("Its Hot.");
    }  
         
    else  {
        alert("Its very hot.");

    }
        


//version switch

//  let tmp = -7; 

//  switch (true) {

//     case (tmp < 0 ) :
//         console.log("Freezing weather.");
//     break;

//     case (tmp < 10 ):
//         console.log("Very cold weather."); 
//     break;

//     case (tmp < 20 ):
//         console.log("Cold weather.");    
//     break;

//     case (tmp < 30 ):
//         console.log("Normal in temp."); 
//     break;
        
//     case (tmp < 40 ):
//         console.log("It's Hot."); 
//     break; 

//     default:
//          console.log("It's very hot.");
//     break;
//  }




    

       