let isLoading = false;
let zone = document.querySelector(".text");

async function quotes() {
  isLoading = true;
  zone.textContent = "Quotes loading, please wait...";
  try {
    const response = await fetch("https://dummyjson.com/quotes", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    let displayHTML = "";
    for (let quote of responseData.quotes) {
      displayHTML += ` <div class="separator">-----------</div>
      <h2>${quote.author} </h2>
      <p> ${quote.quote} </p>`;
    }
    zone.innerHTML = displayHTML;
  } catch (error) {
    console.error(error);
    zone.textContent = " An error occurred, the quotes couldn't be loaded.";
  } finally {
    isLoading = false;
  }
}

quotes();
