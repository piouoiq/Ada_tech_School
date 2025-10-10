// sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");

// function sendMessage(message, fromName, toName)
// {
// 	console.log("From : " + fromName + "to : " + toName + " Message : " + message

// sendMessage()
// sendMessage["Super on se voit mardi !", "Linda", "Marc"]

// let contactName = "Jean"
// let myName = "Ada"
// let myMessage = "Je t'apprends à coder tes premières fonctions"
// sendMessage(message, fromName, toName)





//version corrigée


 
function sendMessage(message, fromName, toName)
{
	console.log("From : " + fromName + " to : " + toName + " Message : " + message) // ) manquante console.log non fermé, espace manquant entre le " et to
} // } manquante, la fonction n'était pas fermée.
sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
sendMessage("Vive le café","Mélissa","Kim") // il faut y mettre des arguments
sendMessage("Super on se voit mardi !", "Linda", "Marc") // () au lieu de [] écrit précédemment


let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"
sendMessage(myMessage, myName, contactName) // les arguments n'étaient pas les bons


