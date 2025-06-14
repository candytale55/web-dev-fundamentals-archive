let myCountry;
let countries = []; // Holds all the countries names.

class Country {
    constructor(name, officialName, capital, language){
        this._name = name;
        this._officialName = officialName;
        this._capital = capital;
        this._continent;
        this._language = language;
        this._languages;
        this._cities;
        this._URIs = {};
        this._limits;
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

    get limits(){
        return this._limits;
    }

    
    get continent(){
        return this._continent;
    }

    get language(){
        return this._language;
    }
    addLanguages(...languages){
            this._languages = [...languages];
    }
    get languages(){
        return this._languages;
    }


    get cities(){
        return this._cities;
    }
    addCities(...cities){
            this._cities=[...cities];
    }

    isLandlocked(){
        this._landlocked = true;
    }
    get landlocked(){
        return this._landlocked;
    }
    
    isTrancontinental(...names){
        this._transcontinental = true;
        this._continents = [];
        this._continents.push(...names);
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
        this._region = worldRegion;
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

    hasIsland(island){
        this._islands = [island];
    }
    get islands(){
        return this._islands;
    }
}

Country.prototype._continent = "America";
Country.prototype._landlocked = false;


class Island {
    constructor(name, country, sea){
        this._name = name;
        this._country = country.name;
        if (sea!==undefined){
            this._sea = sea;
        }
        this._countryMap = country.countryMap;
        this._language = country.language;
        this._languages = country.languages;
        this._flag = country.flag;
    }
    get name(){
        return this._name;
    }
    get country(){
        return this._country;
    }
    get sea(){
        return this._sea;
    }
    get countryMap(){
        return this._countryMap;
    }
}




/*
  ********************************************************************************************************************************************************************************************
*/

/*                  CREATING   COUNTRIES  (OR TERRITORIES)           */


// NORTH AMERICA

const Canada = new Country("Canada", "Canada", "Ottawa", "English");
Canada.setRegion("North America");
Canada.addCities(Canada.capital,"Québec", "Winnipeg", "Calgary", "Vancouver", "Toronto", "Montreal");
Canada.addLanguages(Canada.language, "French");

Canada.setwikiURI("https://en.wikipedia.org/wiki/Canada");
Canada.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png");
Canada.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/77/Ca-map.png");
Canada.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CAN_orthographic.svg/240px-CAN_orthographic.svg.png");

Canada.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Canada_(location_map_scheme)");
Canada.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Canada_(Pantone).svg");

Canada.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Canada");

myCountry = Canada;
console.log(Canada);



/*
.setCountryMap("");
.setRegionMap("");
*/


const UnitedStates = new Country("United States", "United States of America", "Washington, D.C.", "English");
UnitedStates.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png");
UnitedStates.setwikiURI("https://en.wikipedia.org/wiki/United_States");
UnitedStates.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_States.svg");


const Mexico = new Country("México", "Estados Unidos Mexicanos", "Ciudad de México", "Spanish");
Mexico.setwikiURI("https://en.wikipedia.org/wiki/Mexico");
Mexico.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/320px-Flag_of_Mexico.svg.png");
Mexico.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg");


// LUYCAN ARCHIPIELAGO
const Bahamas = new Country("The Bahamas", "Commonwealth of The Bahamas", "Nassau", "English");
Bahamas.setwikiURI("https://en.wikipedia.org/wiki/The_Bahamas");

const TurksandCaicosIslands = new Country("Turks and Caicos Islands", "Turks and Caicos Islands", "Cockburn Town", "English");
TurksandCaicosIslands.setwikiURI("https://en.wikipedia.org/wiki/Turks_and_Caicos_Islands");
TurksandCaicosIslands.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Turks_and_Caicos_Islands_(location_map_scheme)");



// GREATER ANTILLES
const Cuba = new Country("Cuba", "República de Cuba", "Havana", "Spanish");
Cuba.setwikiURI("https://en.wikipedia.org/wiki/Cuba");
Cuba.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/320px-Flag_of_Cuba.svg.png");
Cuba.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Cuba.svg");

const Haiti = new Country("Haiti", "Republic of Haiti", "Port-au-Prince", "French");
Haiti.setwikiURI("https://en.wikipedia.org/wiki/Haiti");
Haiti.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/320px-Flag_of_Haiti.svg.png");
Haiti.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Haiti.svg");


const DominicanRepublic = new Country("Dominican Republic", "República Dominicana", "Santo Domingo", "Spanish");
DominicanRepublic.setwikiURI("https://en.wikipedia.org/wiki/Dominican_Republic");
DominicanRepublic.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/320px-Flag_of_the_Dominican_Republic.svg.png");
DominicanRepublic.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_Dominican_Republic.svg");

const PuertoRico = new Country("Puerto Rico", "Commonwealth of Puerto Rico", "San Juan", "Spanish");
PuertoRico.setwikiURI("https://en.wikipedia.org/wiki/Puerto_Rico");
PuertoRico.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/320px-Flag_of_Puerto_Rico.svg.png");
PuertoRico.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Puerto_Rico.svg");

const Jamaica = new Country("Jamaica", "Jamaica", "Kingston", "English");
Jamaica.setwikiURI("https://en.wikipedia.org/wiki/Jamaica");
Jamaica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/320px-Flag_of_Jamaica.svg.png");
Jamaica.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Jamaica.svg");

const CaymanIslands = new Country("Cayman Islands", "Cayman Islands", "George Town", "English");
CaymanIslands.setwikiURI("https://en.wikipedia.org/wiki/Cayman_Islands");
CaymanIslands.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/320px-Flag_of_the_Cayman_Islands.svg.png");
CaymanIslands.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_Cayman_Islands.svg");



/* LESSER ANTILLES */
// WAYWARD ISLANDS

const SaintLucia = new Country("Saint Lucia", "Saint Lucia", "Castries", "America", "English");
SaintLucia.setwikiURI("https://en.wikipedia.org/wiki/Saint_Lucia");
SaintLucia.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint_Lucia");
SaintLucia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/320px-Flag_of_Saint_Lucia.svg.png");
SaintLucia.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Lucia.svg");
SaintLucia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/d/d9/Saint_Lucia-CIA_WFB_Map.png");
SaintLucia.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Lucia-CIA_WFB_Map.png");
SaintLucia.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Saint_Lucia_in_its_region.svg/640px-Saint_Lucia_in_its_region.svg.png");
SaintLucia.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Lucia_in_its_region.svg");
SaintLucia.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint_Lucia_(location_map_scheme)");

const Grenada = new Country("Grenada", "Grenada","St. George's", "English");
Grenada.setwikiURI("https://en.wikipedia.org/wiki/Grenada");
Grenada.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Grenada_(location_map_scheme)");
Grenada.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Grenada");
Grenada.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/320px-Flag_of_Grenada.svg.png");
Grenada.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Grenada.svg");
Grenada.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/e5/Gj-map.gif");
Grenada.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Gj-map.gif");
Grenada.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grenada_in_its_region.svg/640px-Grenada_in_its_region.svg.png");
Grenada.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Grenada_in_its_region.svg");
Grenada.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Grenada_(location_map_scheme)");




const SaintVincentGrenadines = new Country("Saint Vincent and the Grenadines", "Saint Vincent and the Grenadines", "Kingstown", "English");
SaintVincentGrenadines.setwikiURI("https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines");
SaintVincentGrenadines.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint_Vincent_and_the_Grenadines_(location_map_scheme)");

SaintVincentGrenadines.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Saint_Vincent_and_the_Grenadines_in_its_region.svg/640px-Saint_Vincent_and_the_Grenadines_in_its_region.svg.png");
SaintVincentGrenadines.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Vincent_and_the_Grenadines_in_its_region.svg");

SaintVincentGrenadines.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/92/Saint_Vincent_and_the_Grenadines-CIA_WFB_Map.png");
SaintVincentGrenadines.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Vincent_and_the_Grenadines-CIA_WFB_Map.png");
SaintVincentGrenadines.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/320px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png");
SaintVincentGrenadines.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Vincent_and_the_Grenadines.svg");
SaintVincentGrenadines.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint_Vincent_and_the_Grenadines");
SaintVincentGrenadines.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint_Vincent_and_the_Grenadines_(location_map_scheme)");



const Barbados = new Country("Barbados", "Barbados", "Bridgetown", "English");
Barbados.setwikiURI("https://en.wikipedia.org/wiki/Barbados");
Barbados.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Barbados_(location_map_scheme)");
Barbados.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Barbados_(location_map_scheme)");
Barbados.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Barbados_in_its_region.svg/640px-Barbados_in_its_region.svg.png");
Barbados.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Barbados_in_its_region.svg");
Barbados.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/ed/Bb-map.png");
Barbados.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Bb-map.png");
Barbados.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/320px-Flag_of_Barbados.svg.png");
Barbados.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Barbados.svg");
Barbados.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Barbados");


// LEEWARD ISLANDS

const VirginIslandsUK = new Country("Virgin Islands", "British Virgin Islands", "Road Town", "English");
VirginIslandsUK.setwikiURI("https://en.wikipedia.org/wiki/British_Virgin_Islands");

VirginIslandsUK.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_British_Virgin_Islands_(location_map_scheme)");
VirginIslandsUK.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/British_Virgin_Islands_in_its_region_%28zoom%29.svg/640px-British_Virgin_Islands_in_its_region_%28zoom%29.svg.png");
VirginIslandsUK.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:British_Virgin_Islands_in_its_region_(zoom).svg");
VirginIslandsUK.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/f/ff/BritishVirginIsland_map.png");
VirginIslandsUK.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:BritishVirginIsland_map.png");

VirginIslandsUK.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/320px-Flag_of_the_British_Virgin_Islands.svg.png");
VirginIslandsUK.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_British_Virgin_Islands.svg");

VirginIslandsUK.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_the_British_Virgin_Islands");




const VirginIslandsUSA = new Country("Virgin Islands", "Virgin Islands of the United States", "Charlotte Amalie", "English");
VirginIslandsUSA.setwikiURI("https://en.wikipedia.org/wiki/United_States_Virgin_Islands");    
VirginIslandsUSA.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_the_United_States_Virgin_Islands_(location_map_scheme)");
VirginIslandsUSA.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/United_States_Virgin_Islands_in_its_region_%28zoom%29.svg/640px-United_States_Virgin_Islands_in_its_region_%28zoom%29.svg.png");
VirginIslandsUSA.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:United_States_Virgin_Islands_in_its_region_(zoom).svg");

VirginIslandsUSA.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/c/c5/Virgin_Islands-CIA_WFB_Map.png");
VirginIslandsUSA.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:Virgin_Islands-CIA_WFB_Map.png");

VirginIslandsUSA.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/320px-Flag_of_the_United_States_Virgin_Islands.svg.png");
VirginIslandsUSA.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_States_Virgin_Islands.svg");
VirginIslandsUSA.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_the_United_States_Virgin_Islands");
   


const Anguilla = new Country("Anguilla", "Anguilla", "The Valley", "English");
Anguilla.setwikiURI("https://en.wikipedia.org/wiki/Anguilla");
Anguilla.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Anguilla_in_its_region_(zoom).svg");
Anguilla.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Anguilla_(location_map_scheme)");
Anguilla.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Anguilla_in_its_region_%28zoom%29.svg/640px-Anguilla_in_its_region_%28zoom%29.svg.png");
Anguilla.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/9e/Anguilla-CIA_WFB_Map.png");
Anguilla.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Anguilla-CIA_WFB_Map.png");
Anguilla.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/320px-Flag_of_Anguilla.svg.png");
Anguilla.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Anguilla.svg");
Anguilla.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Anguilla");




const SaintMartin = new Country("Saint Martin", "Collectivity of Saint Martin", "Marigot", "French");
SaintMartin.setwikiURI("https://en.wikipedia.org/wiki/Collectivity_of_Saint_Martin");

SaintMartin.addRefURI("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint-Martin_(France)_(location_map_scheme)");
SaintMartin.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Saint_Martin_in_its_region_%28zoom%29.svg/640px-Saint_Martin_in_its_region_%28zoom%29.svg.png");
SaintMartin.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Martin_in_its_region_(zoom).svg");
SaintMartin.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint-Martin");
SintMaartin.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Sint_Maarten");
SaintMartin.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Saint-Martin_%28fictional%29.svg/320px-Flag_of_Saint-Martin_%28fictional%29.svg.png");
SaintMartin.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint-Martin_(fictional).svg");

SaintMartin.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/2/28/Saint_Martin-CIA_WFB_Map.png");
SaintMartin.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:Saint_Martin-CIA_WFB_Map.png");


const SintMaartin = new Country("Sint Maarten", "Sint Maarten" ,"Philipsburg", "Dutch");
SintMaartin.setwikiURI("https://en.wikipedia.org/wiki/Sint_Maarten");

SintMaartin.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/5/51/Sint_Maarten-CIA_WFB_Map.png");
SintMaartin.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Sint_Maarten-CIA_WFB_Map.png");

SintMaartin.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sint_Maarten_in_its_region_%28zoom%29.svg/640px-Sint_Maarten_in_its_region_%28zoom%29.svg.png");
SintMaartin.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Sint_Maarten_in_its_region_(zoom).svg");

SintMaartin.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Sint_Maarten_(location_map_scheme)");




const StBarths = new Country("Saint Barthélemy", "Collectivité territoriale de Saint-Barthélemy", "Gustavia", "French");
StBarths.setwikiURI("https://en.wikipedia.org/wiki/Saint_Barth%C3%A9lemy");

const Saba = new Country("Saba", "Saba", "The Bottom", "Dutch");
Saba.setwikiURI("https://en.wikipedia.org/wiki/Saba");

const SintEustatius = new Country("Sint Eustatius", "Sint Eustatius", "Oranjestad", "Dutch");
SintEustatius.setwikiURI("https://en.wikipedia.org/wiki/Sint_Eustatius");

const AntiguaandBarbuda = new Country("Antigua and Barbuda", "Antigua and Barbuda", "St. John's", "English");
AntiguaandBarbuda.setwikiURI("https://en.wikipedia.org/wiki/Antigua_and_Barbuda");

const SaintKitts = new Country("Saint Kitts and Nevis", "Federation of Saint Christopher and Nevis", "Basseterre", "English");
SaintKitts.setwikiURI("https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis");

const Montserrat = new Country("Montserrat", "Montserrat", "Plymouth", "English");
Montserrat.setwikiURI("https://en.wikipedia.org/wiki/Montserrat");

const Guadeloupe = new Country("Guadeloupe", "Département d’Outre-Mer de la Guadeloupe", "Basse-Terre", "French");
Guadeloupe.setwikiURI("https://en.wikipedia.org/wiki/Guadeloupe");

const Martinique = new Country("Martinique", "Martinique", "Fort-de-France", "French");
Martinique.setwikiURI("https://en.wikipedia.org/wiki/Martinique");

// ABC ISLANDS 

const Aruba = new Country("Aruba", "Aruba", "Oranjestad", "Dutch");
Aruba.setwikiURI("https://en.wikipedia.org/wiki/Aruba");

const Bonaire = new Country("Bonaire", "Bonaire", "Kralendijk", "Dutch");
Bonaire.setwikiURI("https://en.wikipedia.org/wiki/Bonaire");

const Curacao = new Country("Curaçao", "Curaçao", "Willemstad", "Dutch");
Curacao.setwikiURI("https://en.wikipedia.org/wiki/Cura%C3%A7ao");


/*  CENTRAL AMERICA  */

const Guatemala = new Country("Guatemala", "República de Guatemala", "Guatemala City", "Spanish");
Guatemala.setwikiURI("https://en.wikipedia.org/wiki/Guatemala");
Guatemala.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/320px-Flag_of_Guatemala.svg.png");
Guatemala.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Guatemala.svg");


const Belize = new Country("Belize", "Belize", "Belmopan", "English");
Belize.setwikiURI("https://en.wikipedia.org/wiki/Belize");
Belize.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/320px-Flag_of_Belize.svg.png");
Belize.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Belize.svg");


const Honduras = new Country("Honduras", "República de Honduras", "Tegucigalpa", "Spanish");
Honduras.setwikiURI("https://en.wikipedia.org/wiki/Honduras");
Honduras.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Honduras_%28darker_variant%29.svg/320px-Flag_of_Honduras_%28darker_variant%29.svg.png");
Honduras.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Honduras_(darker_variant).svg");


const ElSalvador = new Country("El Salvador", "República de El Salvador", "San Salvador", "Spanish");
ElSalvador.setwikiURI("https://en.wikipedia.org/wiki/El_Salvador");
ElSalvador.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/320px-Flag_of_El_Salvador.svg.png");
ElSalvador.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_El_Salvador.svg");


const Nicaragua = new Country("Nicaragua", "República de Nicaragua", "Managua", "Spanish");
Nicaragua.setwikiURI("https://en.wikipedia.org/wiki/Nicaragua");
Nicaragua.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/320px-Flag_of_Nicaragua.svg.png");
Nicaragua.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Nicaragua.svg");


const CostaRica = new Country("Costa Rica", "República de Costa Rica", "San José", "Spanish");
CostaRica.setwikiURI("https://en.wikipedia.org/wiki/Costa_Rica");
CostaRica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/320px-Flag_of_Costa_Rica_%28state%29.svg.png");
CostaRica.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Costa_Rica_(state).svg");


const Panama = new Country("Panama", "República de Panamá", "Panama City", "Spanish");
Panama.setwikiURI("https://en.wikipedia.org/wiki/Panama");
Panama.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/320px-Flag_of_Panama.svg.png");
Panama.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Panama.svg");








// SOUTH AMERICA

const TrinidadandTobago = new Country("Trinidad and Tobago", "Republic of Trinidad and Tobago", "Port of Spain", "English");

const Venezuela = new Country("Venezuela", "Bolivarian Republic of Venezuela", "Caracas", "Spanish");
Venezuela.setwikiURI("https://en.wikipedia.org/wiki/Venezuela");

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






/*
  ************************************************************************************************************************************************************************************
*/


const NorthAmerica ={
    _name : "North America",
    _wikiURI : "https://en.wikipedia.org/wiki/North_America",
    _countries : [Canada.name, UnitedStates.name, Mexico.name, Belize.name, ElSalvador.name, Nicaragua.name, Guatemala.name, Honduras.name, Panama.name, CostaRica.name, Cuba.name, Haiti.name, DominicanRepublic.name, PuertoRico.name, Jamaica.name, CaymanIslands.name, 

        /*Antigua and BarbudaThe BahamasBarbadosBelizeCanadaCosta RicaCubaDominicaDominican RepublicEl SalvadorGrenadaGuatemalaHaitiHondurasJamaicaMexicoNicaraguaPanamaSaint Kitts and NevisSaint LuciaSaint Vincent and the GrenadinesTrinidad and TobagoUnited States  	
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

const CentralAmerica = {
    _name : "Central America",
    _wikiURI: "https://en.wikipedia.org/wiki/Central_America",
    _countries : [ElSalvador.name, CostaRica.name, Belize.name, Guatemala.name, Honduras.name, Nicaragua.name, Panama.name],
    _akas : [""],
    _description : "is a region in the southern tip of North America and is sometimes defined as a subregion of the Americas. This region is bordered by Mexico to the north, Colombia to the southeast, the Caribbean Sea to the east and the Pacific Ocean to the west and south. Central America consists of seven countries: El Salvador, Costa Rica, Belize, Guatemala, Honduras, Nicaragua and Panama.",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get description()   {   return this._description;   },

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

const LucayanArchipelago = {
    _name : "Lucayan Archipelago",
    _wikiURI: "https://en.wikipedia.org/wiki/Lucayan_Archipelago",
    _countries : [Bahamas.name, TurksandCaicosIslands.name],
    _akas : ["Bahama Archipelago"],
    _description : " is an island group comprising the Commonwealth of The Bahamas and the British Overseas Territory of the Turks and Caicos Islands. The archipelago is in the western North Atlantic Ocean, north of Cuba along with the other Antilles, and east and southeast of Florida. \n\n William Keegan writes that the Bahama archipelago includes the territories of both the Commonwealth of The Bahamas and the Turks and Caicos Islands, adding: 'Modern political considerations aside, the islands form a single archipelago with common geological, ecological, and cultural roots.' The Lucayan Archipelago is not located within the Caribbean Sea; however, the Lucayan Archipelago still falls within the Caribbean region.",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get description()   {   return this._description;   },
}


const CaribbeanRegion = {
    _name : "Caribbean",
    _wikiURI: "https://en.wikipedia.org/wiki/Caribbean",
    _countries : [Anguilla.name, AntiguaandBarbuda.name, Aruba.name, Bahamas.name, Barbados.name, Bonaire.name, VirginIslandsUK.name, CaymanIslands.name, Cuba.name, Curacao.name, Dominica.name, DominicanRepublic.name, /*VenezuelaDependencies.name,*/ Grenada.name, Guadeloupe.name, Haiti.name, Jamaica.name, Martinique.name, Montserrat.name, /*NavassaIsland.name, NuevaEsparta.name,*/ PuertoRico.name, Saba.name, /*SanAndresandProvidencia.name,*/ StBarths.name, SaintKitts.name, SaintLucia.name, SaintMartin.name, SaintVincentGrenadines.name, SintEustatius.name, SintMaartin.name, TrinidadandTobago.name, TurksandCaicosIslands.name, VirginIslandsUSA.name],
    _akas : [""],
    _description :"is a region of the Americas that consists of the Caribbean Sea, its islands (some surrounded by the Caribbean Sea[5] and some bordering both the Caribbean Sea and the North Atlantic Ocean) and the surrounding coasts. The region is southeast of the Gulf of Mexico and the North American mainland, east of Central America, and north of South America.", 

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get description(){  return this._description;},
}

const WindwardIslands = {
    _name : "Windward Islands",
    _wikiURI: "https://en.wikipedia.org/wiki/Windward_Islands",
    _countries : [SaintLucia.name, SaintVincentGrenadines.name, Grenada.name, Martinique.name, Dominica.name],
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
    _countries : [VirginIslandsUSA.name, VirginIslandsUK.name, Anguilla.name, SaintMartin.name, SintMaartin.name, StBarths.name, Saba.name, SintEustatius, SaintKitts.name, AntiguaandBarbuda.name, Montserrat.name, Guadeloupe.name,],
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
    _countries : [Curacao.name, Aruba.name, Bonaire.name, VirginIslandsUSA.name, VirginIslandsUK.name, Anguilla.name, SaintMartin.name, SintMaartin.name, StBarths.name, Saba.name, SintEustatius.name, SaintKitts.name, AntiguaandBarbuda.name, Montserrat.name, Guadeloupe.name],
    _akas : [""],
    _description : "",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description() {  return this._description},
}


const ABCIslands = {
    _name : "ABC islands",
    _wikiURI: "https://en.wikipedia.org/wiki/ABC_islands_(Leeward_Antilles)",
    _countries : [Aruba.name, Bonaire.name, Curacao.name],
    _akas : [""],
    _description : "The ABC islands are the three western-most islands of the Leeward Antilles in the Caribbean Sea that lie north of Falcón State, Venezuela.[1] In order alphabetically they are Aruba, Bonaire and Curaçao. All three islands are part of the Kingdom of the Netherlands, although they remain outside the European Union. Aruba and Curaçao are autonomous, self-governing constituent countries of the Kingdom of the Netherlands, while Bonaire is a special municipality of the Netherlands.",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get _description() {return this._description},
}


const GreaterAntilles = {
    _name : "Greater Antilles",
    _wikiURI: "https://en.wikipedia.org/wiki/Greater_Antilles",
    _countries : [Cuba.name, DominicanRepublic.name, Haiti.name, PuertoRico.name, Jamaica.name, CaymanIslands.name],
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
    _countries : [VirginIslandsUSA.name, VirginIslandsUK.name, Anguilla.name, SaintMartin.name, SintMaartin.name, StBarths.name, Saba.name, SintEustatius.name, SaintKitts.name, AntiguaandBarbuda.name, Montserrat.name, Guadeloupe.name, Dominica.name, Martinique.name, SaintLucia.name, Barbados.name, SaintVincentGrenadines.name, Grenada.name, TrinidadandTobago, Curacao.name, Aruba.name, Bonaire.name],
    _akas : ["Pequeñas Antillas (Spanish)", "Petites Antilles (French)", "Antias Menor (Papiamento)", "Kleine Antillen (Dutch)"],
    _description : "is a group of islands in the Caribbean Sea. Most form a long, partly volcanic island arc between the Greater Antilles to the north-west and the continent of South America. The islands form the eastern boundary of the Caribbean Sea with the Atlantic Ocean. Together, the Lesser Antilles and the Greater Antilles compose the Antilles (or the Caribbean in its narrowest definition). When combined with the Lucayan Archipelago, all three are known as the West Indies.",

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





const America = {
    _name: "America",
    _wikiURI : "https://en.wikipedia.org/wiki/Americas",
    _regions : [NorthAmerica.name, CentralAmerica.name, CaribbeanRegion.name, SouthAmerica.name],
    _akas : ["The Americas"],
    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get regions()   {   return this._regions; },
    get akas()      {   return this._akas;      },
}



const Commonwealth = {
    _name : "Commonwealth realm",
    _wikiURI: "https://en.wikipedia.org/wiki/Commonwealth_realm",
    _countries : [AntiguaandBarbuda.name, /*Australia.name,*/ Bahamas.name, Barbados.name, Belize.name, Canada.name, Grenada.name, Jamaica.name, /*NewZealand.name, PapuaNewGuinea.name*/ SaintKitts.name, SaintLucia.name, SaintVincentGrenadines.name, /* SolomonIslands.name, Tuvalu.name, UnitedKingdom.name */ ],
    _akas : [""],
    _description : "A Commonwealth realm is a sovereign state in which Queen Elizabeth II is the reigning constitutional monarch and head of state. Each realm functions as an independent co-equal kingdom from the other realms. As of 2020, there are 16 Commonwealth realms: Antigua and Barbuda, Australia, the Bahamas, Barbados, Belize, Canada, Grenada, Jamaica, New Zealand, Papua New Guinea, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Solomon Islands, Tuvalu, and the United Kingdom. All 16 Commonwealth realms are members of the Commonwealth of Nations, an intergovernmental organisation of 54 member states. Elizabeth II is head of the Commonwealth.",
    _URIs : [
        "https://www.royal.uk/commonwealth-and-overseas",
    ],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get description()   {   return this._description;   },
    get URIs()      {   return this._URIs;      },

}

/* ------------------------------------------------------------------------------------*/















/*
0: "Canada"
1: "United States"
2: "México"
3: "The Bahamas"
4: "Turks and Caicos Islands"
5: "Cuba"
6: "Dominican Republic"
7: "Haiti"
8: "Puerto Rico"
9: "Jamaica"
10: "Cayman Islands"
11: "Saint Lucia"
12: "Grenada"
13: "Dominica"
14: "Saint Vincent and the Grenadines"
15: "Barbados"
16: "Virgin Islands"
17: "Virgin Islands"
18: "Anguilla"
19: "Saint Martin"
20: "Sint Maarten"
21: "Saint Barthélemy"
22: "Saba"
23: "Sint Eustatius"
24: "Antigua and Barbuda"
25: "Saint Kitts and Nevis"
26: "Montserrat"
27: "Guadeloupe"
28: "Martinique"
29: "Aruba"
30: "Bonaire"
31: "Curaçao"
32: "Guatemala"
33: "Belize"
34: "Honduras"
35: "El Salvador"
36: "Nicaragua"
37: "Costa Rica"
38: "Panama"
39: "Trinidad and Tobago"
40: "Venezuela"
41: "Argentina"
42: "Bolivia"
43: "Brazil"
44: "Chile"
45: "Colombia"
46: "Ecuador"
47: "Guyana"
48: "Paraguay"
49: "Peru"
50: "Suriname"
51: "Uruguay"
52: "French Guiana"
*/


StBarths.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint-Barth%C3%A9lemy");
SaintKitts.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint_Kitts_and_Nevis");
AntiguaandBarbuda.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Antigua_and_Barbuda");
Montserrat.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Montserrat");
Guadeloupe.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Guadeloupe");
Martinique.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Martinique");

TrinidadandTobago.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Trinidad_and_Tobago");
Curacao.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Cura%C3%A7ao");
Aruba.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Aruba");
TurksandCaicosIslands.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_the_Turks_and_Caicos_Islands");


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



//FLAGS:




// ANTILLES






SintEustatius.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Sint_Eustatius.svg/320px-Flag_of_Sint_Eustatius.svg.png");
SintEustatius.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Sint_Eustatius.svg");








Venezuela.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png");
Venezuela.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Venezuela.svg");

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

TurksandCaicosIslands.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/320px-Flag_of_the_Turks_and_Caicos_Islands.svg.png");
TurksandCaicosIslands.addRefURI("flagFile","https://commons.wikimedia.org/wiki/File:Flag_of_the_Turks_and_Caicos_Islands.svg");

AntiguaandBarbuda.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/320px-Flag_of_Antigua_and_Barbuda.svg.png");
AntiguaandBarbuda.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Antigua_and_Barbuda.svg");



SaintKitts.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/320px-Flag_of_Saint_Kitts_and_Nevis.svg.png");
SaintKitts.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Kitts_and_Nevis.svg");







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








// COUNTRY MAPS



/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");
*/









StBarths.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/8/82/Saint_Barthelemy-CIA_WFB_Map.png");
StBarths.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Barthelemy-CIA_WFB_Map.png");

Saba.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/4/40/Nt-map.png");
Saba.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Nt-map.png");

SintEustatius.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/4/40/Nt-map.png");
SintEustatius.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Nt-map.png");

SaintKitts.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/96/Saint_Kitts_and_Nevis-CIA_WFB_Map.png");
SaintKitts.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Kitts_and_Nevis-CIA_WFB_Map.png");

AntiguaandBarbuda.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/9e/Antigua_and_Barbuda-CIA_WFB_Map_%282004%29.png");
AntiguaandBarbuda.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Antigua_and_Barbuda-CIA_WFB_Map_(2004).png");

Montserrat.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/5/5e/Montserrat-CIA_WFB_Map.png");
Montserrat.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Montserrat-CIA_WFB_Map.png");

Guadeloupe.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/a/a5/Guadeloupe_map.png");
Guadeloupe.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Guadeloupe_map.png");




Martinique.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/f/fd/Martinique-Map.png");
Martinique.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Martinique-Map.png");




TrinidadandTobago.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/8/8a/Td-map.png");
TrinidadandTobago.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Td-map.png");

Curacao.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/a/a5/Curacao-CIA_WFB_Map.png");
Curacao.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Curacao-CIA_WFB_Map.png");


Aruba.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/1b/Aruba_map.png");
Aruba.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Aruba_map.png");

Bonaire.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonaire_island.png/300px-Bonaire_island.png");
Bonaire.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Bonaire_island.png");

TurksandCaicosIslands.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/76/Turks_caicos_islands_sm04.png");
TurksandCaicosIslands.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Turks_caicos_islands_sm04.png");








/*
.addRefURI("wikiAtlas",);
.setCountryMap("");
.addRefURI("CountryMapFile", "");
/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");
*/


TurksandCaicosIslands.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Turks_and_Caicos_Islands_in_its_region.svg/640px-Turks_and_Caicos_Islands_in_its_region.svg.png");
TurksandCaicosIslands.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Turks_and_Caicos_Islands_in_its_region.svg");


Martinique.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Martinique_in_its_region.svg/640px-Martinique_in_its_region.svg.png");
Martinique.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Martinique_in_its_region.svg");










Aruba.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Aruba_in_its_region.svg/640px-Aruba_in_its_region.svg.png");
Aruba.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:Aruba_in_its_region.svg");


Bonaire.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Bonaire_in_its_region.svg/640px-Bonaire_in_its_region.svg.png");
Bonaire.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Bonaire_in_its_region.svg");

Curacao.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Curacao_in_its_region.svg/640px-Curacao_in_its_region.svg.png");
Curacao.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:Curacao_in_its_region.svg");



StBarths.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Saint_Barthelemy_in_its_region_%28zoom%29.svg/640px-Saint_Barthelemy_in_its_region_%28zoom%29.svg.png");
StBarths.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Barthelemy_in_its_region_(zoom).svg");

Saba.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Saba_in_its_region_%28zoom%29.svg/640px-Saba_in_its_region_%28zoom%29.svg.png");
Saba.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saba_in_its_region_(zoom).svg");

SintEustatius.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Sint_Eustatius_in_its_region_%28zoom%29.svg/640px-Sint_Eustatius_in_its_region_%28zoom%29.svg.png");
SintEustatius.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Sint_Eustatius_in_its_region_(zoom).svg");

SaintKitts.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Saint_Kitts_and_Nevis_in_its_region_%28zoomed%29.svg/640px-Saint_Kitts_and_Nevis_in_its_region_%28zoomed%29.svg.png");
SaintKitts.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Kitts_and_Nevis_in_its_region_(zoomed).svg");


AntiguaandBarbuda.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Antigua_and_Barbuda_in_its_region_%28zoomed%29.svg/640px-Antigua_and_Barbuda_in_its_region_%28zoomed%29.svg.png");
AntiguaandBarbuda.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Antigua_and_Barbuda_in_its_region_(zoomed).svg");

Montserrat.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Montserrat_location_detail.svg/640px-Montserrat_location_detail.svg.png");
Montserrat.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Montserrat_location_detail.svg");







Guadeloupe.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Guadeloupe_in_its_region.svg/640px-Guadeloupe_in_its_region.svg.png");
Guadeloupe.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Guadeloupe_in_its_region.svg");


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
/*
.setFlag("");
.addRefURI("flagFile", "");
*/

/*

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("countryMapFile", "");

Egypt.addRefURI("redLocationMap", "");
Egypt.addRefURI("redLocationMapFile", "");
*/



/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/
/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/








// juar SVG LOCATORS






Bonaire.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Bonaire_(location_map_scheme)");














Guadeloupe.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Guadeloupe_(location_map_scheme)");
StBarths.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint-Barth%C3%A9lemy_(location_map_scheme)");
Saba.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saba_(location_map_scheme)");
SintEustatius.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Sint_Eustatius_(location_map_scheme)");
SaintKitts.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint_Kitts_and_Nevis_(location_map_scheme)");
AntiguaandBarbuda.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Antigua_and_Barbuda_(location_map_scheme)");
Montserrat.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Montserrat_(location_map_scheme)");


Martinique.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Martinique_(location_map_scheme)");



/*
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");


/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");

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


/*
  ************************************************************************************************************************************************************************************
*/



// Lucayan Archipielago Islands

const CaicosIslands = new Island("Caicos Islands", TurksandCaicosIslands, "prueba");


const GrandTurkIsland = new Island("Grand Turk Island", TurksandCaicosIslands, "prueba");
//GrandTurkIsland.setwikiURI = "https://en.wikipedia.org/wiki/Grand_Turk_Island";

const SaltCay = new Island("Salt Cay", TurksandCaicosIslands, "test");
//SaltCay.setwikiURI("https://en.wikipedia.org/wiki/Salt_Cay,_Turks_Islands");

//myCountry = SaltCay;
TurksandCaicosIslands.hasIsland(GrandTurkIsland.name);
TurksandCaicosIslands.islands.push(GrandTurkIsland.name);
TurksandCaicosIslands.islands.push(SaltCay.name);
//TurksandCaicosIslands.hasIsland(SaltCay.name);
console.log(SaltCay);
console.log(TurksandCaicosIslands);



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
document.getElementById("wiki").innerHTML = " on " + myCountry.name;
document.getElementById("regionMap").src = myCountry.regionMap;
document.getElementById("ocean").innerHTML = myCountry.ocean;
document.getElementById("sea").innerHTML = myCountry.sea;
document.getElementById("islands").innerHTML = JSON.stringify(myCountry.islands);
document.getElementById("URIs").innerHTML = JSON.stringify(myCountry.URIs);
