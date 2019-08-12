//===========JS JQUERY COUNTRY HW=============//
$(document).ready(function() {
  $(".findAllButton").click(() => {
    clearslider();
    let flags = findAll($("#search-country").val());
    flags.forEach(element => {
      createSlider(element);
    });
  });

  $(".fineOneButton").click(() => {
    clearslider();
    let flag = findOne($("#search-country").val());
    createSlider(flag);
  });

  $(".capitalButton").click(() => {
    clearslider();
    let flag = findOne($("#search-country").val());
    createSlider(flag);
    let capital = findCapital($("#search-country").val());
    $(".capitalContainer").html(capital);
  });

  $(".fillButton").click(() => {
    let first = $(".firstNumber").val();
    let second = $(".secondNumber").val();
    while (first <= second) {
      $(".selectRoll").append(`<option>${first}</option>`);
      first++;
    }
  });

  $(".countryDD").click(function(selectedCountry) {
    $(".currencyDD").html("");
    countryStorage.forEach(country => {
      if (country.name === selectedCountry.target.value) {
        country.currencies.forEach(currentCurrency => {
          $(".currencyDD").append(`<option>${currentCurrency.name}</option>`);
        });
      }
    });
  });
});
