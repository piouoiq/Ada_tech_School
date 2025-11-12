let isLoading = false;
let loadingStatus = document.querySelector(".loadingStatus");
let loadingStatus2 = document.querySelector(".loadingStatus2");
let zone = document.querySelector(".text");
let zone2 = document.querySelector(".text2");

async function fetchOffers() {
  isLoading = true;

  zone.textContent = "Chargement des offres, veuillez patienter...";

  try {
    const response = await fetch("https://codepassport.dev/api/offers", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    console.log(response);

    let displayHTML = "";

    displayHTML += `<h2>${response[0].titre} </h2>
      <p> ${response[0].description} </p>`;

    zone.innerHTML = displayHTML;
  } catch {
    isLoading = false;
    zone.textContent =
      " Une erreur est survenue, les offres n'ont pas pu être chargées.";
  } finally {
    isLoading = false;
  }
}
fetchOffers();

async function fetchOffers2() {
  isLoading = true;
  zone2.textContent = "Chargement des offres, veuillez patienter...";

  try {
    const response = await fetch("https://codepassport.dev/api/offers", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    let displayHTML = "";
    for (let offer of responseData) {
      displayHTML += `<h2>${offer.titre} </h2>
      <p> ${offer.description} </p>`;
    }
    zone2.innerHTML = displayHTML;
  } catch {
    isLoading = false;
    zone2.textContent =
      " Une erreur est survenue, les offres n'ont pas pu être chargées.";
  } finally {
    isLoading = false;
  }
}
fetchOffers2();
