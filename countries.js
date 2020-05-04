let myCountry;

class Country {
    constructor(name, officialName, capital, continent, language){
        this._name = name;
        this._officialName = officialName;
        this._capital = capital;
        this._continent = continent;
        this._language = language;
        this._languages = [language];
        this._cities = [capital];
        this._URIs = [];
    } // constructor end.

    get name(){
        return this._name;
    }
    get officialName(){
        return this._officialName;
    }
    get capital(){
        return this._capital;
    }
    get continent(){
        return this._continent;
    }
    get language(){
        return this._language;
    }
    addLanguages(newLanguage){
        if(languages){
            this._languages.push(newLanguage);
        } else{
            this._languages = [newLanguage];
        }
    }
    get languages(){
        return this._languages;
    }
    get cities(){
        return this._cities;
    }

    isLandlocked(){
        this._landlocked = true;
    }
    get landlocked(){
        return this._landlocked;
    }
    isTrancontinental(names){
        this._transcontinental = true;
        this._continents = [];
        this._continents.push(names);
    }
    get transcontinental(){
        return this._transcontinental;
    }
    get continents(){
        return this._continents;
    }

    setwikiURI(URI){
        this._wikiURI = URI;
    }
    get wikiURI(){
        return this._wikiURI;
    }

    setRegion(region){
        this._region = region;
    }
    get region(){
        return this._region;
    }
    addSpecificRegion(region){
        this._specificRegion = region;
    }
    get specificRegion(){
        return this._specificRegion;
    }
    setCountryMap(URI){
        this._countryMap = URI;
    }
    get countryMap(){
        return this._countryMap;
    }
    setRegionMap(URI){
        this._regionMap = URI;
    }
    get regionMap(){
        return this._regionMap;
    }
    setFlag(URI){
        this._flag = URI;
    }
    get flag(){
        return this._flag;
    }
    addAKA(names){
        if(this._akas){
            this._akas.push(names);
        } else {
            this._akas = [];
            this._akas.push(names);
        }    
    }
    get AKAs(){
        return this._akas;
    }
}

/*  -------  Island SUBCLASS    ----------- */

class Island extends Country {
    constructor(name, officialName, capital, continent, language, ocean, sea){
        super(name, officialName, capital, continent, language);
        this._island = true;
        this._islands = [];
        if (continent == "Oceania"){
            this._ocean = "Pacific";
        } else {
            this._ocean = [ocean];
        }
        if(sea !== undefined){
            this._sea = [sea];
        }         
    }
    get island(){
        return this._island;
    }
    get ocean(){
        return this._ocean;
    }
    get sea(){
        if (sea){
            return this._sea;
        } else {
            return "No sea has been entered";
        }
    }
    addOcean(ocean){
        this._ocean.push(ocean);
    }
    addSea(sea){
        if (addSea){
            this._sea.push(sea);
        } else {
            this._sea = [sea];
        }
    }
    isArchipielago(){
        this._archipielago = true;
    }
    get archipielago(){
        return this._archipielago;
    }

    addIsland(newIsland){
        if (islands){
            this._islands.push(newIsland); // No funcionaba el PUSH sin declarar islands en el constructor, pensé que lo heredaría.  La parte del else de este metodo sale sobrando. ¿A lo mejor invirtiendo el orden, aunque no lo creo. 
        } else {
            this._islands = [newIsland];
        }
    }
    get islands(){
        return this._islands;
    }

}

/*  -------  OceaniaIsland SUBCLASS    ----------- */

class OceaniaIsland extends Island {
    constructor(name, officialName, capital, language, specificRegion){
        super(name, officialName, capital, language);
        this._name = name;
        this._officialName = officialName;
        this._capital = capital;
        this._continent = "Oceania";
        this._language = language;
        this._languages = [language]; // Porque no lo hereda de Country?, sin esta especificación el primer valor es null? 
        this._ocean = "Pacific";
        if (specificRegion !== undefined){
            this._specificRegion = specificRegion;
        }  
    }
    get languages(){
        return this._languages;
    }
    get islands(){
        return this._islands;
    }
}



const Tuvalu = new OceaniaIsland("Tuvalu", "Tuvalu", "Funafuti", "English", "Polynesia");
Tuvalu.addAKA("Ellice Islands");
Tuvalu.addLanguages("Tuvaluan");
//Tuvalu.addIsland("Test"); // Solo de una en una, ver que pues con spread operator ...
Tuvalu.islands.push("Nanumanga", "Niutao", "Niulakita", "Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu");
//countries.unshift(Tuvalu);
console.log(Tuvalu);
myCountry = Tuvalu;

/*  -------  Antillas SUBCLASS    ----------- */


/*  -------  Instances   ----------- */

// ASIA

const China = new Country("China", "People's Republic of China", "Beijing", "Asia", "Standard Chinese");
China.languages.push("Mongolian", "Uyghur", "Tibetan", "Zhuang");
China.setRegion("East Asia");
China.cities.push("Shangai", "Chongqing");
China.setwikiURI("https://en.wikipedia.org/wiki/China");
China.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/7f/China_CIA_map.png"); 
China.URIs = {
    countryMapFile : "https://ast.wikipedia.org/wiki/Ficheru:China_CIA_map.png",
    flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/320px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_the_People%27s_Republic_of_China.svg",
};
//console.log(China);
//myCountry = China;



const Cambodia = new Country("Cambodia", "Kingdom of Cambodia", "Phnom Penh",  "Asia", "Khmer");
Cambodia.addAKA("Kampuchea");
Cambodia.languages.push("French", "English");
Cambodia.setRegion("Southeast Asia");
//Cambodia.addSpecificRegion("Indochina Peninsula");
Cambodia.setwikiURI("https://en.wikipedia.org/wiki/Cambodia");
Cambodia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/12/Cb-map.png");
Cambodia.URIs = {
    countryMapFile :"https://commons.wikimedia.org/wiki/File:Cb-map.png",
    flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/320px-Flag_of_Cambodia.svg.png",
    flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_Cambodia.svg",
}
//countries.push(Cambodia);
//console.log(Cambodia);
//myCountry = Cambodia;


const Thailand = new Country("Thailand", "Kingdom of Thailand", "Bangkok", "Asia", "Thai");
  Thailand.addAKA("Siam");
  Thailand.setRegion("Southeast Asia");
  //Thailand.addSpecificRegion("Indochine Peninsula");
  Thailand.languages.push("Isan", "Kam Mueang", "Pak Tai");
  Thailand.setwikiURI("https://en.wikipedia.org/wiki/Thailand");
  Thailand.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thailand_map_CIA.png/276px-Thailand_map_CIA.png");
  Thailand.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LocationThailand.svg/640px-LocationThailand.svg.png");
  Thailand.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/320px-Flag_of_Thailand.svg.png");
  Thailand.URIs = {
      countryMapFile : "https://commons.wikimedia.org/wiki/File:Thailand_map_CIA.png",
      regionMapFile: "https://ast.wikipedia.org/wiki/Ficheru:LocationThailand.svg",
      flagFile: "https://en.wikipedia.org/wiki/File:Flag_of_Thailand.svg",
      wikiAtlas: "https://commons.wikimedia.org/wiki/Atlas_of_Thailand",
      ciaFactBook : "https://www.cia.gov/library/publications/the-world-factbook/geos/th.html",
  }
  //countries.unshift(Thailand);
  //console.log(Thailand);
  //myCountry = Thailand;


  const Singapore = new Island("Singapore", "Republic of Singapore", "Singapore", "Asia", "English", "Indian", "South China Sea");
  Singapore.languages.push("Malay", "Chinese", "Tamil");
  Singapore.setRegion("Southeast Asia");
  Singapore.addAKA("Pulau Ujong","Temasek", "Singapura"); // ONLY THE FIRST ONE IS ADDED
  Singapore.AKAs.push("Temasek", "Singapura");
  Singapore.setwikiURI("https://en.wikipedia.org/wiki/Singapore");
  Singapore.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/320px-Flag_of_Singapore.svg.png");
  Singapore.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Singapore_in_its_region_%28zoom%29.svg/640px-Singapore_in_its_region_%28zoom%29.svg.png");
  Singapore.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/0/07/CIA_World_Factbook_map_of_Singapore_%28English%29.png");
  Singapore.URIs = {
      flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_Singapore.svg",
      regionMapFile: "https://commons.wikimedia.org/wiki/File:Singapore_in_its_region_(zoom).svg",
      countryMapFile : "https://en.wikipedia.org/wiki/File:CIA_World_Factbook_map_of_Singapore_(English).png",
  };
  //countries.unshift(Singapore);
  //console.log(Singapore);
  //myCountry = Singapore;








  
/* --------------------------------------------------------------------------------- */

document.getElementById("name").innerHTML = myCountry.name;
document.getElementById("officialName").innerHTML = myCountry.officialName;
document.getElementById("capital").innerHTML = myCountry.capital;
document.getElementById("continent").innerHTML = myCountry.continent;
document.getElementById("region").innerHTML = myCountry.region;
document.getElementById("language").innerHTML = myCountry.language;
document.getElementById("languages").innerHTML = JSON.stringify(myCountry.languages);
document.getElementById("cities").innerHTML = JSON.stringify(myCountry.cities);
document.getElementById("countryMap").src = myCountry.countryMap;
document.getElementById("wiki").href = myCountry.wikiURI;
document.getElementById("regionMap").src = myCountry.regionMap;
document.getElementById("ocean").innerHTML = myCountry.ocean;
document.getElementById("sea").innerHTML = myCountry.sea;
document.getElementById("islands").innerHTML = JSON.stringify(myCountry.islands);
document.getElementById("URIs").innerHTML = JSON.stringify(myCountry.URIs);
