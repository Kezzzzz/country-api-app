var codes = [];
const btn = document.getElementById("btn");
const factCont = document.getElementById("fact");

async function getRandomCountry() {
  var countries = await fetch("https://restcountries.eu/rest/v2/all");
  var countryData = await countries.json();
  var randomData = countryData[Math.floor(Math.random() * countryData.length)];
  console.log(randomData);
  createCountryCard(randomData);
}

function createCountryCard(data) {
  const { name, capital, flag, region, languages, demonym } = data;
  factCont.innerHTML = `
    <div class="fact-card">
        <img src="${flag}" alt="${name}" class="flag" id="flag"/>
        <div class="main">
          <div class="info-container mb">
            <p class="label">REGION</p>
            <p class="value">${region}<p>
          </div>
          <div class="info-container mb">
            <p class="label">CAPITAL CITY</p>
            <p class="value">${capital}<p>
          </div>
          <div class="info-container mb">
            <p class="label">LANGUAGES</p>
            <p class="value">${languages.map((item, idx) =>
              idx > 0
                ? ` ${item.nativeName} (${item.name})`
                : `${item.nativeName} (${item.name})`
            )}<p>
          </div>
          <div class="info-container">
            <p class="label">DEMONYM</p>
            <p class="value">${demonym}<p>
          </div>
        </div>
        <div class="country-name">${name}</div>
    </div>
  `;

  document.getElementById("flag").addEventListener("click", (e) => {
    openFlag(e);
  });
}

function openFlag(flag) {
  window.open(flag.target.src, "_blank");
}

btn.addEventListener("click", () => {
  getRandomCountry();
});
