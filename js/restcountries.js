const loadCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  //   console.log(country);
  const countriesContainer = document.getElementById("countries");
  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src=${country.flags.png} alt="Shoes" class="rounded-xl h-[200px] w-[400px]" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${country.name.common}!</h2>
                <h3 class="card-title">${country.name.official}!</h3>
                <h3 class="card-title">${country.population}!</h3>
                <p>${country.subregion}</p>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="btnCountries('${country.cca2}')">Details</button>
                </div>
            </div>
    `;
    countriesContainer.appendChild(div);
  });
};

const btnCountries = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => btnCountriesShow(data[0]));
};

const btnCountriesShow = (data) => {
  console.log(data);
  const countries = document.getElementById("countries-data");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card  bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
              <img src=${data.flags.png} alt="Shoes" class="rounded-xl h-[200px] w-[400px]" />
          </figure>
          <div class="card-body items-center text-center">
              <h2 class="card-title">${data.name.common}!</h2>
              <h3 class="card-title">${data.name.official}!</h3>
              <h3 class="card-title">${data.population}!</h3>
              <p>${data.subregion}</p>
          </div>
  `;
  countries.appendChild(div);
};

loadCountries();
