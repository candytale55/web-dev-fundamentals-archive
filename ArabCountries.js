let countries = [];

function ArabSpeakingCountries(name, officialName, capital, continent){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    if (continent == undefined){
        this.continent = "Africa"
    } else {
        this.continent = continent;
    }
    this.continent = continent;
    this.language = "Arabic";
    if (continent = "Asia"){
        this.region = "Middle East";
    } else {
        this.region = "Continent"
    }
    countries.unshift[{name:name, capital:capital, continent:continent}];
}



document.getElementById("main").innerHTML = JSON.stringify(countries);