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




document.getElementById("main").innerHTML = JSON.stringify(countries);