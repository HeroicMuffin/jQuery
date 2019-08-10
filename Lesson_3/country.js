// // iterate over array:
// // foreach, for
// const countriesNames = [];
// countries.forEach((country) => {
//     if (name === "Israel") countriesNames.push({ countryName: name, population })
// })
// let sum = 0;
// countries.forEach((country) => {
//     sum += country.population
// })

// console.log(countriesNames)
// console.log(sum)

// //map
// const newCountries = countries.map((country, index) => {
//     const { name, population, flag, borders } = country;
//     // if (name === "Israel") return { countryName: name, population }
//     const newPopulation = `The number is:${population}`
//     return { name, population: newPopulation, flag, borders: borders.join(" ") }
// })

// console.log(newCountries)

// //filter

// // const filteredCountries = countries.filter(country => {
// //     const { borders } = country;
// //     return !borders.length
// // })

// const hasBordersNames = countries
//     .filter(country => country.borders.length)
//     .map(country => country.name)

// console.log(hasBordersOnlyNames)

// //find
// // return exactly 1 item according to the boolean result
// const item = hasBordersOnlyNames.find((countryName) => { return countryName === "Israel" })
// const item2 = hasBordersOnlyNames.find((countryName) => { return countryName === "USA" })

// console.log(item, "found!!!")

// //sum all population - the wrong way
// // let allPop = 0
// const countriesNewWIthSum = countries
//     .map(country => {
//         // allPop += country.population
//         return country.population;
//     })

// const filteredCountries = countryStorage
//   .filter(country => country.population > 6000000)
//   .filter(country => country.borders.length).map(country => country.borders).forEach(border => )

$(document).ready(function() {
  $(".demo").slick({
    accessibility: true,
    adaptiveHeight: false
  });
});
