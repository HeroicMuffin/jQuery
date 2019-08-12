function findAll(countryString) {
  return countryStorage
    .filter(countries =>
      countries.name.toLowerCase().includes(countryString.toLowerCase())
    )
    .map(countries => countries.flag);
}
function findOne(countryString) {
  return countryStorage
    .filter(
      countries => countries.name.toLowerCase() === countryString.toLowerCase()
    )
    .map(countries => countries.flag);
}
function findCapital(countryString) {
  return countryStorage
    .filter(
      countries => countries.name.toLowerCase() === countryString.toLowerCase()
    )
    .map(countries => countries.capital);
}

function init() {
  countryStorage.forEach(country => {
    $(".countryDD").append(`<option>${country.name}</option>`);
  });
}
init();
