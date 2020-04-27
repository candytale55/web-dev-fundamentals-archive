let countries = [];
let spanishCountries = [];
let latinAmericanCountries = [];


function SpanishSpeakingCountry(name, officialName, capital, continent){
  this.name = name;
  this.officialName = officialName;
  this.capital = capital;
  if (continent === undefined){
    this.continent = "America";
  } else {
    this.continent = continent;
  }
  this.language = "Spanish";
  if (this.continent === "America"){
    this.region = "Latin America";
    latinAmericanCountries.push({name:name});
  } else {
    this.region = continent;
  }
    countries.push([{name:name, capital:capital, language: this.language}]);
    //countries.push([this.name, this.capital, this.officialName, this.continent, this.language]);     
}

const Honduras = new SpanishSpeakingCountry("Honduras", "República de Honduras", "Tegucigalpa", "America");
console.log(Honduras);

const Mexico = new SpanishSpeakingCountry("México", "Estados Unidos Mexicanos", "Ciudad de México");
//console.log(Mexico);

const Cuba = new SpanishSpeakingCountry("Cuba", "República de Cuba", "Havana");
Cuba.island = true;
Cuba.ocean = "Atlantic";
Cuba.sea = "Caribean";
Cuba.region = "Antillas";
console.log(Cuba);

const Salvador = new SpanishSpeakingCountry("El Salvador", "República de El Salvador", "San Salvador");
//console.log(Salvador);

const Venezuela = new SpanishSpeakingCountry("Venezuela", "República Bolivariana de Venezuela", "Caracas");
//console.log(Venezuela);

const Paraguay = new SpanishSpeakingCountry("Paraguay", "República del Paraguay", "Asunción");
//console.log(Paraguay);

const Peru = new SpanishSpeakingCountry("Peru", "República del Perú ", "Lima" );
//console.log(Peru);

const Bolivia = new SpanishSpeakingCountry("Bolivia", "Estado Plurinacional de Bolivia", "La Paz");
//console.log(Bolivia);

const Ecuador = new SpanishSpeakingCountry("Ecuador", "República del Ecuador", "Quito");
//console.log(Ecuador);

const Spain = new SpanishSpeakingCountry("España", "Reino de España", "Madrid", "Europe");
//console.log(Spain);

const Equatorial_Guinea = new SpanishSpeakingCountry("Guinea Ecuatorial", "República de Guinea Ecuatorial", "Malabo", "Africa")
//console.log(Equatorial_Guinea);

const Uruguay = new SpanishSpeakingCountry("Uruguay", "República Oriental del Uruguay", "Montevideo");
//console.log(Uruguay);

const Colombia = new SpanishSpeakingCountry("Colombia", "República de Colombia", "Bogotá");
//console.log(Colombia);

const Chile = new SpanishSpeakingCountry("Chile", "República de Chile", "Santiago");
console.log(Chile);

/*
function getCountries(countryArray){
  for (let i = 0; i < countries.length; i++){
    if (countryArray[i].language == "Spanish"){
      spanishCountries.push([countryArray[i][0], countryArray[i][1]]);
    } else if (countryArray[i].language == "Portuguese") {
      portugueseCountries.push([countryArray[i][0], countryArray[i][1]]);
    } else if (countryArray[i].continent == "America" && countryArray[i].language == "Spanish"){
      latinAmericanCountries.push([countryArray[i][0], countryArray[i][1]]);
    } else if (countryArray[i].continent == "America" && countryArray[i].language == "Portuguese"){
      latinAmericanCountries.push([countryArray[i][0], countryArray[i][1]]);
    }
  }
}
*/



//getCountries(countries);

//console.log(spanishCountries);
//console.log(portugueseCountries);
//console.log(latinAmericanCountries);

document.getElementById("main").innerHTML = JSON.stringify(countries);
//document.getElementById("main").innerHTML = JSON.stringify(spanishCountries);