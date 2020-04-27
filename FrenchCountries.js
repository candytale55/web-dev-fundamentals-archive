let countries = [];

function FrenchSpeakingCountries(name, officialName, capital, continent){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    if (continent == undefined){
        this.continent = "Africa"
    } else {
        this.continent = continent;
    }
    countries.push({name:name, capital:capital, continent:continent});
}

const Cameroon = new FrenchSpeakingCountries("Cameroon", "République du Cameroun", "Yaoundé")
Cameroon.languages = ["English", "Cameroonian Pidgin","Fula","Ewondo", "Camfranglais"];
Cameroon.region = "Central Africa";
console.log(Cameroon);

document.getElementById("main").innerHTML = JSON.stringify(countries);