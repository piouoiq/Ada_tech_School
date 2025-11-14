let isLoading = false;
let zone = document.querySelector(".text");

// j'ai voulu tester une API que j'ai trouvé intéressante, je n'ai pas réussi, j'ai rage quit.

async function fetchData() {
  isLoading = true;
  zone.textContent = "Data loading, please wait...";

  try {
    const apiKey = "8cac3f8deb6fdba93136330b550e20d73830be35";
    const url =
      "https://www.equaldex.com/api/region?regionid=FR&apiKey=" + apiKey;
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    const responseData = await response.json();
    console.log(responseData);

    let displayHTML = "";
    console.log(responseData?.regions?.region);
    if (responseData?.regions?.region != null) {
      displayHTML += `<h2>${responseData?.regions?.region.name}</h2>`;
      for (let issue in responseData.regions.region.issues) {
        const data = responseData.regions.region.issues[issue];

        displayHTML += `
    <h3>${data.label_short}</h3>
    <p>${data.current_status.description}</p>
    <hr>
  `;
      }
    } else {
      zone.textContent = "No data available from the API.";
      return;
    }
    zone.innerHTML = displayHTML;
  } catch (error) {
    // console.error(error);
    zone.textContent = " An error occurred, the data couldn't be loaded.";
  } finally {
    isLoading = false;
  }
}

fetchData();
