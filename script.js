/*
countries (object): contains all the info and functions.

_geo_areas (object) = contains arrays of continents that will contain the countries ("Europe", "America", "Africa", "Asia", "Oceania"). 

 Europe, America, Africa, Asia, Oceania (arrays): They will contain the object country, which will contain the countries trivia (capital, language spoken, etc)

getRandomCountryFrom_Geo_Area(continent) : This functions returns a random country from the _geo_area (continent) that is passed. The range of random numbers is generated using the lenght of the _geo_areas array length.  

generateRandomCards()
*/

const countries = {
_geo_areas: {
  Europe : [],
  America: [],
  Africa: [],
  Asia: [],
  Oceania: [],
},

addCountryTo_Geo_Area(continent, countryName, countryCapital){
    const country = {
        name: countryName,
        capital: countryCapital,
    }
    return this._geo_areas[continent].push(country);
},

getRandomCountryFrom_Geo_Area(continent){
    const index = Math.floor(Math.random() * countries._geo_areas[continent].length);
    const country = countries._geo_areas[continent][index];
    return country;
},

generateRandomCards(){
    const myEuropeCountry = this.getRandomCountryFrom_Geo_Area("Europe");
    const myAmericaCountry = this.getRandomCountryFrom_Geo_Area("America");
    const myOceaniaCountry = this.getRandomCountryFrom_Geo_Area("Oceania");
    const myAfricaCountry = this.getRandomCountryFrom_Geo_Area("Africa");
    const myAsiaCountry = this.getRandomCountryFrom_Geo_Area("Asia");
   
    // return myAsiaCountry, myEuropeCountry, myAmericaCountry, myOceaniaCountry, myAfricaCountry;
   return "Estos son los paises: " + myEuropeCountry.name +", "+ myAmericaCountry.name +", "+ myOceaniaCountry.name +", "+ myAfricaCountry.name +", "+ myAsiaCountry.name;
},

} // End of object countries

countries.addCountryTo_Geo_Area("Europe", "Latvia", "Riga");
countries.addCountryTo_Geo_Area("Europe", "Denmark", "Copenhagen");
countries.addCountryTo_Geo_Area("Europe", "Serbia", "Belgrade");
countries.addCountryTo_Geo_Area("Europe", "Portugal", "Lisbon");

countries.addCountryTo_Geo_Area("Africa", "Egypt", "Cairo");
countries.addCountryTo_Geo_Area("Africa", "Cameroon", "Yaounde");
countries.addCountryTo_Geo_Area("Africa", "South Africa", "Pretoria");
countries.addCountryTo_Geo_Area("Africa", "Angola", "Luanda");

countries.addCountryTo_Geo_Area("America", "Surinam", "Paramaribo");
countries.addCountryTo_Geo_Area("America", "Belize", "Belmopan");

countries.addCountryTo_Geo_Area("Oceania", "Niue", "Alofi");
countries.addCountryTo_Geo_Area("Oceania", "New Caledonia", "Noumea");

countries.addCountryTo_Geo_Area("Asia", "India", "New Delhi");
countries.addCountryTo_Geo_Area("Asia", "China", "Beijing");
countries.addCountryTo_Geo_Area("Asia", "Japan", "Tokyo");
countries.addCountryTo_Geo_Area("Asia", "Philippines", "Manila");

//let test = countries.getRandomCountryFrom_Geo_Area("Asia");
let test = countries.generateRandomCards();
console.log(test);

document.getElementById("country_card").innerHTML= " :) Testing :) " + test;

// document.getElementById("country_card").innerHTML= " :) Testing :) " + test.name + " " + test.capital ; // works but only logs one country.

//document.getElementById("country_card").innerHTML= " :) Testing :) " + countries._geo_areas.Europe[3].name ;