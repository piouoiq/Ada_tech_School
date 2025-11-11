async function fetchOffers() {
  const response = await fetch("https://codepassport.dev/api/offers", {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());

  console.log(response);

  let zone = document.querySelector(".text");

  let displayHTML = "";

  displayHTML += `<h2>${response[0].titre} </h2>
      <p> ${response[0].description} </p>`;

  zone.innerHTML = displayHTML;
}
fetchOffers();

// variante 1 seule offre affichée avec boucle et condition

// async function fetchOffers() {
//   const response = await fetch("https://codepassport.dev/api/offers", {
//     method: "GET",
//     mode: "cors",
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => response.json());

//   console.log(response);

//   let zone = document.querySelector(".text");
//   let displayHTML = "";
//   for (let indexResp in response) {
//     if (indexResp > 0) break;
//     displayHTML += `<h2>${response[indexResp].titre} </h2>
//       <p> ${response[indexResp].description} </p>`;
//   }
//   zone.innerHTML = displayHTML;
// }
// fetchOffers();

// pour afficher toutes les offres

//fonction qui signifie que il vas y avoir un contenu asynchrone dans la fonction
async function fetchOffers2() {
  // await indique le contenu asynchrone, vas attendre la réponse complete de fetch avant de remplir la variable response
  const response = await fetch("https://codepassport.dev/api/offers", {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  //await-> on attend la réponse complète de la var response avant de commencer à remplir responseData
  const responseData = await response.json();

  let zone = document.querySelector(".text2");
  let displayHTML = "";
  for (let offer of responseData) {
    displayHTML += `<h2>${offer.titre} </h2>
      <p> ${offer.description} </p>`;
  }
  zone.innerHTML = displayHTML;
}
fetchOffers2();

// écrire method, mode, et headers ne sont pas très utile ici mais c'est une bonne pratique
