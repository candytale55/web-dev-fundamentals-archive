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