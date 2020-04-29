import {*} from "./countries.js";


/*
function anySpeakingCountry (name, officialName, capital, continent, language){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    this.continent = continent;
    this.language = language;
    countries.push({name:name, capital:capital, continent:continent, language:language });
}
*/

const Bhutan = new anySpeakingCountry("Bhutan","Kingdom of Bhutan", "Thimphu", "Asia", "Dzongkha (Bhutanese)");
Bhutan.landlocked = true;
Bhutan.region = "South Asia";
console.log(Bhutan);


const Brunei = new anySpeakingCountry("Brunei", "Nation of Brunei, the Abode of Peace", "Bandar Seri Begawan", "Asia","Malay");
Brunei.languages = ["English"];
console.log(Brunei);

const Azerbaijan = new anySpeakingCountry("Azerbaijan", "Republic of Azerbaijan", "Baku", "Asia", "Azerbaijani");
Azerbaijan.region = "Caucasus";
console.log(Azerbaijan);

const Suriname = new anySpeakingCountry("Suriname", "Republic of Suriname", "Paramaribo", "America", "Dutch");
Suriname.region = "South America";
console.log(Suriname);
*/

const Brazil = new anySpeakingCountry("Brasil", "República Federativa do Brasil", "Brasilia", "America","Portuguese");
Brazil.region = "South America";
console.log(Brazil);


const Afghanistan = new anySpeakingCountry("Afghanistan", "Islamic Republic of Afghanistan", "Kabul","Asia", "Pashto - Dari");
Afghanistan.languages = ["Pashto", "Dari"];
Afghanistan.landlocked = true;
console.log(Afghanistan);



document.getElementById("main").innerHTML = JSON.stringify(countries);