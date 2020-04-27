let englishCountries = [];

function EnglishSpeakingCountries (name, officialName, capital, continent) {
    this.name = name; 
    this.officialName = officialName;
    this.capital = capital;
    this.continent = continent;
    this.island = false;
    this.region = continent;
    this.language = "English";
    englishCountries.push({name:name, capita:capital, continent:continent});
}

const Sierra_Leone = new EnglishSpeakingCountries("Sierra Leone", "Republic of Sierra Leone", "Freetown", "Africa");
console.log(Sierra_Leone);


const Tonga = new EnglishSpeakingCountries("Tonga", "Kingdom of Tonga", "Nukuʻalofa", "Oceania");
Tonga.island = true;
Tonga.region = "Polynesia";
Tonga.languages = ["Tongan"];
Tonga.islands = ["Tongatapu"];
console.log(Tonga);


const New_Zealand = new EnglishSpeakingCountries("New Zealand", "New Zealand", "Wellington", "Oceania");
New_Zealand.island = true;
New_Zealand.ocean = "Pacific";
New_Zealand.islands = ["North Island (Te Ika-a-Māui)", "South Island (Te Waipounamu)"];
console.log(New_Zealand);
New_Zealand.cities = ["Auckland"];
New_Zealand.languages = ["Maori"];

const Aruba = new EnglishSpeakingCountries("Aruba", "Aruba", "Oranjestad", "America");
Aruba.language = "Dutch";
Aruba.island = true;
Aruba.territory = "Neatherlands";
Aruba.ocean = "Atlantic";
Aruba.sea = "Caribean";
Aruba.region = "Antillas";
console.log(Aruba);

const Saint_Lucia = new EnglishSpeakingCountries("Saint Lucia", "Saint Lucia", "Castries", "America");
Saint_Lucia.island = true;
Saint_Lucia.region ="Antillas";
Saint_Lucia.ocean = "Atlantic";
Saint_Lucia.sea = "Caribean";
console.log(Saint_Lucia);

const Grenada = new EnglishSpeakingCountries("Grenada", "Grenada","St. George's", "America")
Grenada.region="Antillas";
Grenada.island = true;
Grenada.islands = ["Carriacou", "Petite Martinique", "Ronde Island", "Caille Island", "Diamond Island", "Large Island", "Saline Island", "Frigate Island"];
Grenada.ocean = "Atlantic";
Grenada.sea = "Caribean";
console.log(Grenada);

const Antigua_and_Barbuda = new EnglishSpeakingCountries("Antigua and Barbuda", "Antigua and Barbuda", "St. John's", "America");
Antigua_and_Barbuda.region = "Antillas"
Antigua_and_Barbuda.island = true;
Antigua_and_Barbuda.islands = ["Antigua","Barbuda"," Great Bird", "Green Island", "Guiana Island", "Long Island", "Maiden Island", "Prickly Pear", "York Island", "Redonda"];
Antigua_and_Barbuda.ocean = "Atlantic";
Antigua_and_Barbuda.sea = "Caribean";
Antigua_and_Barbuda.languages = ["Creole"];
console.log(Antigua_and_Barbuda);

document.getElementById("main").innerHTML = JSON.stringify(countries);