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
        this._limits={};
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

    addLimits4(north, east, south, west){
        this._limits = {
            N: [north],
            E: [east],
            S: [south],
            W: [west]
        }
    }
    addLimitN(north){
        if(this._limits.N){
            this._limits.N.push(north);
        } else {
            this._limits.N = [north];
        }
    }
    addLimitNE(northeast){
        if(this._limits.NE){
            this._limits.NE.push(northeast);
        } else {
            this._limits.NE = [northeast];
        }
    }
    addLimitE(east){
        if(this._limits.E){
            this._limits.E.push(east);
        } else {
            this._limits.E = [east];
        }
    }
    addLimitSE(southeast){
        if(this._limits.SE){
            this._limits.SE.push(southeast);
        } else {
            this._limits.SE = [southeast];
        }
    }
    addLimitS(south){
        if(this._limits.S){
            this._limits.S.push(south);
        } else {
            this._limits.S = [south];
        }
    }
    addLimitSW(southwest){
        if(this._limits.SW){
            this._limits.SW.push(southwest);
        } else {
            this._limits.SW = [southwest];
        }
    }
    addLimitW(west){
        if(this._limits.W){
            this._limits.W.push(west);
        } else {
            this._limits.W = [west];
        }
    }
    addLimitNW(northwest){
        if(this._limits.NW){
            this._limits.NW.push(northwest);
        } else {
            this._limits.NW = [northwest];
        }
    }
    addLimits8(north, northeast, east, southeast, south, southwest, west, northwest){
        this._limits = {
            N:  [north], 
            NE: [northeast],
            E:  [east],
            SE: [southeast],
            S:  [south],
            SW: [southwest],
            W:  [west],
            NW: [northwest]
        }        
    }
    
    
    get continent(){
        return this._continent;
    }

    get language(){
        return this._language;
    }
    addLanguages(...languages){
            this._languages = [...languages];
            if(this._languages[0]!==this._language)
            {
                this._languages.unshift(this._language);
            }
    }
    get languages(){
        return this._languages;
    }


    get cities(){
        return this._cities;
    }
    addCities(...cities){
            this._cities=[...cities];
            if(this._cities[0]!==this._capital){
                this._cities.unshift(this._capital);
            }
    }

    addCity(city){
        this._cities.push(city);
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
        this._URIs["wikiURI"] = URI;
    }
    get wikiURI(){
        return this._wikiURI;
    }

    setSVG_locator(URI){
        this._SVG_locator = URI;
        this._URIs["SVG_locator"] = URI;
    }
    get SVG_locator(){
        return this._SVG_locator;
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

    addAKAs(...names){
            this._akas = [...names];
     }
    addAKA(name){
        if(this._akas){
            this._akas.push(name);
        } else {
            this._akas = [name];
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
Country.prototype._region = "North America";
Country.prototype._landlocked = false;
Country.prototype._transcontinental = false;


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




/* --------------------------------------------------------------------------------- */

const Canada = new Country("Canada", "Canada", "Ottawa", "English");

Canada.addCities("Québec", "Winnipeg", "Calgary", "Vancouver", "Toronto", "Montreal");
Canada.addLanguages("French");
Canada.addLimits4("Artic Ocean", "Atlantic Ocean", "United States", "Pacific Ocean");
Canada.addLimitNW("Alaska");

Canada.setwikiURI("https://en.wikipedia.org/wiki/Canada");

Canada.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png");

Canada.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/77/Ca-map.png");
Canada.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CAN_orthographic.svg/240px-CAN_orthographic.svg.png");

Canada.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Canada_(location_map_scheme)");
Canada.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Canada_(Pantone).svg");
Canada.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Canada");
Canada.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ca.html");

//myCountry = Canada;
//console.log(Canada);


/* --------------------------------------------------------------------------------- */


const UnitedStates = new Country("United States", "United States of America", "Washington, D.C.", "English");
UnitedStates.addCities("San Francisco", "New York", "Chicago", "Denver", "Seattle", "Dallas", "Houston", "Memphis", "New Orleans", "Boston", "Philadelphia", "San Antonio");
UnitedStates.addCity("Miami");
UnitedStates.addLimits4("Canada","Atlantic Ocean","Mexico","Pacific Ocean");
UnitedStates.addLimitSE("Gulf of Mexico");
UnitedStates.addLimitSW("Bering Strait (Alaska)");
UnitedStates.addLimitN("Arctic Ocean (Alaska)");

UnitedStates.addAKAs("USA", "US", "America");

UnitedStates.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png");
UnitedStates.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/USA_orthographic.svg/240px-USA_orthographic.svg.png");
UnitedStates.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/c/cb/Unitedstatesmap.png");
UnitedStates.setwikiURI("https://en.wikipedia.org/wiki/United_States");
UnitedStates.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_the_United_States_(location_map_scheme)");

UnitedStates.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_States.svg");
UnitedStates.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:USA_orthographic.svg");
UnitedStates.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Unitedstatesmap.png");
UnitedStates.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_the_United_States");
UnitedStates.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/us.html");


//myCountry = UnitedStates;
//console.log(UnitedStates);

/* --------------------------------------------------------------------------------- */



const Mexico = new Country("México", "Estados Unidos Mexicanos", "Mexico City", "Spanish");
Mexico.addCities("Leon", "Queretaro", "Tijuana", "Ensenada", "Guadalajara", "Toluca", "Cuernavaca", "San Luis Potosi");

Mexico.setwikiURI("https://en.wikipedia.org/wiki/Mexico");
Mexico.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/320px-Flag_of_Mexico.svg.png");
Mexico.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MEX_orthographic.svg/240px-MEX_orthographic.svg.png");
Mexico.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/18/Mx-map.png");
Mexico.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Mexico_(location_map_scheme)");

Mexico.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg");
Mexico.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:MEX_orthographic.svg");
Mexico.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Mx-map.png");
Mexico.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Mexico");
Mexico.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/mx.html");

myCountry = Mexico;
console.log(Mexico);





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
document.getElementById("URI_SVG_locator").href = myCountry.SVG_locator;


/*
document.getElementById("ocean").innerHTML = myCountry.ocean;
document.getElementById("sea").innerHTML = myCountry.sea;
document.getElementById("islands").innerHTML = JSON.stringify(myCountry.islands);
document.getElementById("URIs").innerHTML = JSON.stringify(myCountry.URIs);
*/