let myCountry;
let countries = []; // Holds all the countries names.

class Country {
    constructor(name, officialName, capital, language){ //removed continent as parameter
        this._name = name;
        this._officialName = officialName;
        this._capital = capital;
        //this._continent = continent;
        this._language = language;
        this._languages = [language];
        this._cities = [capital];
        this._URIs = {};
        countries.push(this._name);
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
    /*
    get continent(){
        return this._continent;
    }*/
    get language(){
        return this._language;
    }
    addLanguages(...newLanguage){ // spread operator gets all the items as an array, still have to work how to solve it.
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
    addCities(cities){
        this._cities.push(cities);
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

    isTerritory(country){
        this._territoryOf = country;
    }
    get territoryOf(){
        return this._territoryOf;
    }


    setRegion(worldRegion){
        if (this._region){
            this._region.push(worldRegion);
        } else {
            this._region = [worldRegion];
        }
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
        this._URIs["countryMap"] = URI;
    }
    get countryMap(){
        return this._countryMap;
    }
    setwikiURI(URI){
        this._wikiURI = URI;
    }
    get wikiURI(){
        return this._wikiURI;
    }

    setRegionMap(URI){
        this._regionMap = URI;
        this._URIs["regionMap"] = URI;
    }
    get regionMap(){
        return this._regionMap;
    }
    
    setFlag(URI){
        this._flag = URI;
        this._URIs["flag"] = URI;
    }
    get flag(){
        return this._flag;
    }

    addRefURI(key, URI){
        this._URIs[key] = URI;
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
    constructor(name, officialName, capital, language, ocean, sea){ // removed continent,
        super(name, officialName, capital, language); // removed continent,
        this._island = true;
        this._islands = []; 
        /*if (continent == "Oceania"){
            this._ocean = "Pacific";
        } else {
            this._ocean = [ocean];
        }*/
        this._ocean = ocean;
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
    isArchipielago(... islandsNames){
        this._archipielago = true;
        //this._islands = [] // the variable is set in the constructor
        this._islands.push(islandsNames);
    }
    get archipielago(){
        return this._archipielago;
    }

    addIsland(newIsland){
        this._islands.push(newIsland);
        /*
        if (islands){
            this._islands.push(newIsland); // No funcionaba el PUSH sin declarar islands en el constructor, pensé que lo heredaría.  La parte del else de este metodo sale sobrando. ¿A lo mejor invirtiendo el orden, aunque no lo creo. 
        } else {
            this._islands = [newIsland];
        } */
    }
    get islands(){
        return this._islands;
    }
}

/*
  ************************************************************************************************************************************************************************************
*/

// NORTH AMERICA


const Canada = new Country("Canada", "Canada", "Ottawa", "English");
Canada.setwikiURI("https://en.wikipedia.org/wiki/Canada");

const UnitedStates = new Country("United States", "United States of America", "Washington, D.C.", "English");
UnitedStates.setwikiURI("https://en.wikipedia.org/wiki/United_States");

const Mexico = new Country("México", "Estados Unidos Mexicanos", "Ciudad de México", "Spanish");
Mexico.setwikiURI("https://en.wikipedia.org/wiki/Mexico");



const Belize = new Country("Belize", "Belize", "Belmopan", "English");
Belize.setwikiURI("https://en.wikipedia.org/wiki/Belize");


const CostaRica = new Country("Costa Rica", "República de Costa Rica", "San José", "Spanish");
CostaRica.setwikiURI("https://en.wikipedia.org/wiki/Costa_Rica");


const Cuba = new Country("Cuba", "República de Cuba", "Havana", "Spanish");
Cuba.setwikiURI("https://en.wikipedia.org/wiki/Cuba");




const AntiguaandBarbuda = new Country("Antigua and Barbuda", "Antigua and Barbuda", "St. John's", "English");
AntiguaandBarbuda.setwikiURI("https://en.wikipedia.org/wiki/Antigua_and_Barbuda");

const Bahamas = new Country("The Bahamas", "Commonwealth of The Bahamas", "Nassau", "English");
Bahamas.setwikiURI("https://en.wikipedia.org/wiki/The_Bahamas");

const Barbados = new Country("Barbados", "Barbados", "Bridgetown", "English");
Barbados.setwikiURI("https://en.wikipedia.org/wiki/Barbados");

// Barbados CostaRica Cuba Dominica Dominican RepublicEl SalvadorGrenadaGuatemalaHaitiHondurasJamaicaMexicoNicaraguaPanamaSaint Kitts and NevisSaint LuciaSaint Vincent and the GrenadinesTrinidad and Tobago UnitedStates Canada Mexico  Bahamas Belize AntiguaandBarbuda

const Dominica = new Country("Dominica", "Commonwealth of Dominica", "Roseau", "English");
Dominica.setwikiURI("https://en.wikipedia.org/wiki/Dominica");
    
const SaintKitts = new Country("Saint Kitts and Nevis", "Federation of Saint Christopher and Nevis", "Basseterre", "English");
SaintKitts.setwikiURI("https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis");

const SaintVincentGrenadines = new Country("Saint Vincent and the Grenadines", "Saint Vincent and the Grenadines", "Kingstown", "English");
SaintVincentGrenadines.setwikiURI("https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines");

const VirginIslandsUK = new Country("Virgin Islands", "British Virgin Islands", "Road Town", "English");
VirginIslandsUK.setwikiURI("https://en.wikipedia.org/wiki/British_Virgin_Islands");

const VirginIslandsUSA = new Country("Virgin Islands", "Virgin Islands of the United States", "Charlotte Amalie", "English");
VirginIslandsUSA.setwikiURI("https://en.wikipedia.org/wiki/United_States_Virgin_Islands");    
    
const Guadeloupe = new Country("Guadeloupe", "Département d’Outre-Mer de la Guadeloupe", "Basse-Terre", "French");
Guadeloupe.setwikiURI("https://en.wikipedia.org/wiki/Guadeloupe");

const Martinique = new Country("Martinique", "Martinique", "Fort-de-France", "French");
Martinique.setwikiURI("https://en.wikipedia.org/wiki/Martinique");

const Montserrat = new Country("Montserrat", "Montserrat", "Plymouth", "English");
Montserrat.setwikiURI("https://en.wikipedia.org/wiki/Montserrat");

const Saba = new Country("Saba", "Saba", "The Bottom", "Dutch");
Saba.setwikiURI("https://en.wikipedia.org/wiki/Saba");

const StBarths = new Country("Saint Barthélemy", "Collectivité territoriale de Saint-Barthélemy", "Gustavia", "French");
StBarths.setwikiURI("https://en.wikipedia.org/wiki/Saint_Barth%C3%A9lemy");

const SaintMartin = new Country("Saint Martin", "Collectivity of Saint Martin", "Marigot", "French");
SaintMartin.setwikiURI("https://en.wikipedia.org/wiki/Collectivity_of_Saint_Martin");




myCountry = SaintMartin;


/*
.setFlag("");
.addRefURI("flagFile", "");
*/










// SOUTH AMERICA




const Argentina = new Country("Argentina", "Argentine Republic", "Buenos Aires", "Spanish");
Argentina.setwikiURI("https://en.wikipedia.org/wiki/Argentina");

const Bolivia = new Country("Bolivia", "Plurinational State of Bolivia", "Sucre", "Spanish");
Bolivia.setwikiURI("https://en.wikipedia.org/wiki/Bolivia");


const Brazil = new Country("Brazil", "Federative Republic of Brazil", "Brasilia", "Portuguese" );
Brazil.setwikiURI("https://en.wikipedia.org/wiki/Brazil");

const Chile = new Country("Chile", "República de Chile", "Santiago", "Spanish");
Chile.setwikiURI("https://en.wikipedia.org/wiki/Chile");

const Colombia = new Country("Colombia", "República de Colombia", "Bogotá", "Spanish");
Colombia.setwikiURI("https://en.wikipedia.org/wiki/Colombia");

const Ecuador = new Country("Ecuador", "Republic of Ecuador", "Quito", "Spanish");
Ecuador.setwikiURI("https://en.wikipedia.org/wiki/Ecuador");

const Guyana = new Country("Guyana", "Co-operative Republic of Guyana", "Georgetown", "English");
Guyana.setwikiURI("https://en.wikipedia.org/wiki/Guyana");

const Paraguay = new Country("Paraguay", "Republic of Paraguay", "Asunción", "Spanish");
Paraguay.setwikiURI("https://en.wikipedia.org/wiki/Paraguay");

const Peru = new Country("Peru", "República del Perú ", "Lima", "Spanish");
Peru.setwikiURI("https://en.wikipedia.org/wiki/Peru");

const Suriname = new Country("Suriname", "Republic of Suriname", "Paramaribo", "Dutch");
Suriname.setwikiURI("https://en.wikipedia.org/wiki/Suriname");

const Uruguay = new Country("Uruguay", "República Oriental del Uruguay", "Montevideo", "Spanish");
Uruguay.setwikiURI("https://en.wikipedia.org/wiki/Uruguay");

const FrenchGuiana = new Country("French Guiana", "Department of French Guiana", "Cayenne", "French");
FrenchGuiana.setwikiURI("https://en.wikipedia.org/wiki/French_Guiana");

// Argentina.name, Bolivia.name, Brazil.name, Chile.name, Colombia.name, Ecuador.name, Guyana.name, Paraguay.name, Peru.name, Suriname.name, Uruguay.name, Venezuela.name, FrenchGuiana.name, Aruba.name, Bonaire.name, Curacao.name,  FalklandIslands.name, TrinidadAndTobago.name



// CARIBE 

const Aruba = new Country("Aruba", "Aruba", "Oranjestad", "Dutch");
Aruba.setwikiURI("https://en.wikipedia.org/wiki/Aruba");

const Bonaire = new Country("Bonaire", "Bonaire", "Kralendijk", "Dutch");
Bonaire.setwikiURI("https://en.wikipedia.org/wiki/Bonaire");

const Curacao = new Country("Curaçao", "Curaçao", "Willemstad", "Dutch");
Curacao.setwikiURI("https://en.wikipedia.org/wiki/Cura%C3%A7ao");






//FLAGS:

// NORTH AMERICA
Canada.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png");
Canada.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Canada_(Pantone).svg");

UnitedStates.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png");
UnitedStates.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_States.svg");

Mexico.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/320px-Flag_of_Mexico.svg.png");
Mexico.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg");




Belize.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/320px-Flag_of_Belize.svg.png");
Belize.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Belize.svg");




CostaRica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/320px-Flag_of_Costa_Rica_%28state%29.svg.png");
CostaRica.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Costa_Rica_(state).svg");




Cuba.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/320px-Flag_of_Cuba.svg.png");
Cuba.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Cuba.svg");








Argentina.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png");
Argentina.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Argentina.svg");

Bolivia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bandera_de_Bolivia_%28Estado%29.svg/320px-Bandera_de_Bolivia_%28Estado%29.svg.png");
Bolivia.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Bandera_de_Bolivia_(Estado).svg");

Brazil.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png");
Brazil.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Brazil.svg");

Chile.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png");
Chile.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Chile.svg");

Colombia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png");
Colombia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Colombia.svg");

Ecuador.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png");
Ecuador.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Ecuador.svg");

Guyana.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/320px-Flag_of_Guyana.svg.png");
Guyana.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Guyana.svg");

Paraguay.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png");
Paraguay.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Paraguay.svg");

Peru.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png");
Peru.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Peru.svg");

Suriname.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/320px-Flag_of_Suriname.svg.png");
Suriname.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Suriname.svg");


Uruguay.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png");
Uruguay.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Uruguay.svg");

FrenchGuiana.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/320px-Flag_of_French_Guiana.svg.png");
FrenchGuiana.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_French_Guiana.svg");



// CARIBEAN

Aruba.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/320px-Flag_of_Aruba.svg.png");
Aruba.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Aruba.svg");

Bonaire.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Bonaire.svg/320px-Flag_of_Bonaire.svg.png");
Bonaire.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Bonaire.svg");

Curacao.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/320px-Flag_of_Cura%C3%A7ao.svg.png");
Curacao.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Cura%C3%A7ao.svg");


Bahamas.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/320px-Flag_of_the_Bahamas.svg.png");
Bahamas.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_Bahamas.svg");

AntiguaandBarbuda.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/320px-Flag_of_Antigua_and_Barbuda.svg.png");
AntiguaandBarbuda.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Antigua_and_Barbuda.svg");

Barbados.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/320px-Flag_of_Barbados.svg.png");
Barbados.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Barbados.svg");

SaintKitts.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/320px-Flag_of_Saint_Kitts_and_Nevis.svg.png");
SaintKitts.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Kitts_and_Nevis.svg");

SaintVincentGrenadines.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/320px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png");
SaintVincentGrenadines.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Vincent_and_the_Grenadines.svg");

VirginIslandsUK.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/320px-Flag_of_the_British_Virgin_Islands.svg.png");
VirginIslandsUK.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_British_Virgin_Islands.svg");

VirginIslandsUSA.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/320px-Flag_of_the_United_States_Virgin_Islands.svg.png");
VirginIslandsUSA.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_States_Virgin_Islands.svg");

Dominica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/320px-Flag_of_Dominica.svg.png");
Dominica.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Dominica.svg");

Saba.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Saba.svg/320px-Flag_of_Saba.svg.png");
Saba.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Saba.svg");

Montserrat.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/320px-Flag_of_Montserrat.svg.png");
Montserrat.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Montserrat.svg");

Martinique.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Snake_Flag_of_Martinique.svg/320px-Snake_Flag_of_Martinique.svg.png");
Martinique.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Snake_Flag_of_Martinique.svg");

Guadeloupe.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Unofficial_flag_of_Guadeloupe_%28local%29.svg/320px-Unofficial_flag_of_Guadeloupe_%28local%29.svg.png");
Guadeloupe.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Unofficial_flag_of_Guadeloupe_(local).svg");

StBarths.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Saint_Barthelemy_%28local%29.svg/320px-Flag_of_Saint_Barthelemy_%28local%29.svg.png");
StBarths.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Barthelemy_(local).svg");

SaintMartin.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Saint-Martin_%28fictional%29.svg/320px-Flag_of_Saint-Martin_%28fictional%29.svg.png");
SaintMartin.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint-Martin_(fictional).svg");




/*
  ************************************************************************************************************************************************************************************
*/

console.log(countries);


const EastAsia = {
    _name : "East Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/East_Asia",
    _countries : [],
    _akas : ["Far East"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

};

const WesternAsia = {
    _name : "Western Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Western_Asia",
    _countries : [],
    _akas : ["Western Asia", "West Asia", "Southwestern Asia", "Southwest Asia"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

};

const NorthAmerica ={
    _name : "North America",
    _wikiURI : "https://en.wikipedia.org/wiki/North_America",
    _countries : [/*Antigua and BarbudaThe BahamasBarbadosBelizeCanadaCosta RicaCubaDominicaDominican RepublicEl SalvadorGrenadaGuatemalaHaitiHondurasJamaicaMexicoNicaraguaPanamaSaint Kitts and NevisSaint LuciaSaint Vincent and the GrenadinesTrinidad and TobagoUnited States  	
        Greenland
        France	
        Clipperton IslandSt. BarthélemySt. MartinSt. Pierre and Miquelon
        Netherlands	
        ArubaCuraçaoSint Maarten
        United Kingdom	
        AnguillaBermudaBritish Virgin IslandsCayman IslandsMontserratTurks and Caicos Islands
        United States	
        Puerto RicoUnited States Virgin Islands
        Venezuela	
        Federal Dependencies*/],
    _description : "",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get _description(){   return this._description},
}

const CentralAsia = {
    _name : "Central Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Western_Asia",
    _countries : [],
    //_akas : ["The 'stans"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

};

const SouthAsia = {
    _name : "South Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/South_Asia",
    _countries : [],
    _akas : ["Southern Asia","Indian Subcontinent"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

}

const SouthAmerica = {
    _name : "South America",
    _wikiURI: "https://en.wikipedia.org/wiki/South_America",
    //_countries : [Argentina.name, Bolivia.name, Brazil.name, Chile.name, Colombia.name, Ecuador.name, Guyana.name, Paraguay.name, Peru.name, Suriname.name, Uruguay.name, Venezuela.name, FrenchGuiana.name, Aruba.name, Bonaire.name, Curacao.name,  FalklandIslands.name, TrinidadAndTobago.name],
    //_territories : [Aruba.name, Bonaire.name, Curacao.name,  FalklandIslands.name, TrinidadAndTobago.name],
    _akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get territories() { return this._territories},
    get akas()      {   return this._akas;      },
}





const America = {
    _name: "America",
    _wikiURI : "https://en.wikipedia.org/wiki/Americas",
    _regions : [SouthAmerica],
    _akas : ["The Americas"],
    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get regions()   {   return this._regions; },
    get akas()      {   return this._akas;      },
}





const WestIndies = {
    _name : "",
    _wikiURI: "",
    _countries : [],
    _akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

}



const CaribbeanRegion = {
    _name : "Caribbean",
    _wikiURI: "https://en.wikipedia.org/wiki/Caribbean",
    _countries : [],
    _akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

}

const WindwardIslands = {
    _name : "Windward Islands",
    _wikiURI: "https://en.wikipedia.org/wiki/Windward_Islands",
    _countries : [/*Saint Lucia, Saint Vincent, the Grenadines, Grenada, Dominica*/],
    _akas : ["Islands of Barlovento"],
    _description : "",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description() {return this._description},

}

const LeewardIslands = {
    _name : "Leeward Islands",
    _wikiURI: "https://en.wikipedia.org/wiki/Leeward_Islands",
    _countries : [],
    _akas : [""],
    _description : "",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description() {return this._description},
}

const LeewardAntilles = {
    _name : "Leeward Antilles",
    _wikiURI: "https://en.wikipedia.org/wiki/Leeward_Antilles",
    _countries : [Curacao.name, Aruba.name, Bonaire.name],
    _akas : [""],
    _description : "",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description() {  return this._description},
}


const GreaterAntilles = {
    _name : "Greater Antilles",
    _wikiURI: "https://en.wikipedia.org/wiki/Greater_Antilles",
    _countries : [],
    _akas : [""],
    _description : "is a grouping of the larger islands in the Caribbean Sea, including Cuba, Hispaniola, Puerto Rico, Jamaica, and the Cayman Islands. Six island states share the region of the Greater Antilles in total, with Haiti and the Dominican Republic sharing the island of Hispaniola. Geologically, the Virgin Islands and Sombrero Island are also part of the Greater Antilles, though politically they are considered part of the Lesser Antilles. The Lucayan Archipelago is not considered to be a part of the Antilles archipelagos but rather of the North Atlantic. The Greater Antilles is considered to be a part of Latin America. With a population of 38 million, it makes up 6% of Latin America's total population. ",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description(){ return this._description},

}

const LesserAntilles = {
    _name : "Lesser Antilles",
    _wikiURI: "https://en.wikipedia.org/wiki/Lesser_Antilles",
    _countries : [Curacao.name, Aruba.name, Bonaire.name],
    _akas : ["Pequeñas Antillas (Spanish)", "Petites Antilles (French)", "Antias Menor (Papiamento)", "Kleine Antillen (Dutch)"],
    _description : "is a group of islands in the Caribbean Sea. Most form a long, partly volcanic island arc between the Greater Antilles to the north-west and the continent of South America.[1] The islands form the eastern boundary of the Caribbean Sea with the Atlantic Ocean. Together, the Lesser Antilles and the Greater Antilles compose the Antilles (or the Caribbean in its narrowest definition). When combined with the Lucayan Archipelago, all three are known as the West Indies.",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description(){ return this._description},
}


const Antilles = {
    _name : "Antilles",
    _wikiURI: "https://en.wikipedia.org/wiki/Antilles",
    _regions : [LesserAntilles.name, GreaterAntilles.name],
    _akas : [""],
    _description : "is an archipelago bordered by the Caribbean Sea to the south and west, the Gulf of Mexico to the northwest, and the Atlantic Ocean to the north and east. \n\nThe Antillean islands are divided into two smaller groupings: the Greater Antilles and the Lesser Antilles. The Greater Antilles includes the larger islands of Cuba, Jamaica, Puerto Rico, Hispaniola (subdivided into the nations of Haiti and the Dominican Republic) and the Cayman Islands. The Lesser Antilles contains the northerly Leeward Islands and the southeasterly Windward Islands. The Leeward Antilles just north of Venezuela and the Lucayan Archipelago (consisting of the Bahamas and Turks and Caicos Islands), though part of the West Indies, are generally not included among the Antillean islands.\n\n Geographically, the Antillean islands are generally considered a subregion of North America. Culturally speaking, Cuba, the Dominican Republic, and Puerto Rico – and sometimes the whole of the Antilles – are included in Latin America, although some sources avoid this socio-economic oversimplification by using the phrase 'Latin America and the Caribbean' instead",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get regions() {   return this._regions; },
    get akas()      {   return this._akas;      },
    get _description(){ return this._description},
}





/* ------------------------------------------------------------------------------------*/

//FLAGS:



/*
.setFlag("");
.addRefURI("flagFile", "");
/*

.setFlag("");
.addRefURI("flagFile", "");
/*

.setFlag("");
.addRefURI("flagFile", "");
/*

.setFlag("");
.addRefURI("flagFile", "");
*/


// COUNTRY MAPS

/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");
*/


// CHINA






/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

Egypt.addRefURI("redLocationMap", "");
Egypt.addRefURI("redLocationMapFile", "");
*/




//SVG LOCATORS



/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/




/*
.setRegionMap("");
.addRefURI("regionMapFile", "");

.setFlag("");
.addRefURI("flagFile", "");

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/








Aruba.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Aruba_in_its_region.svg/640px-Aruba_in_its_region.svg.png");
Aruba.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:Aruba_in_its_region.svg");


Bonaire.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bonaire_in_its_region.svg/640px-Bonaire_in_its_region.svg.png");
Bonaire.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Bonaire_in_its_region.svg");

Curacao.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Curacao_in_its_region.svg/640px-Curacao_in_its_region.svg.png");
Curacao.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:Curacao_in_its_region.svg");



/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");

.setFlag("");
.addRefURI("flagFile", "");

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/




// REGION MAPS

/*
.setFlag("");
.addRefURI("flagFile", "");

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/












/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");

.setFlag("");
.addRefURI("flagFile", "");

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/






/* -------------------------------------------------------------------------------------*/
// TRIVIA DATA:







/* --------------------------------------------------------------------------------- */

document.getElementById("name").innerHTML = myCountry.name;
document.getElementById("flag").src = myCountry.flag;
document.getElementById("flag").alt = myCountry.name + " flag";

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
