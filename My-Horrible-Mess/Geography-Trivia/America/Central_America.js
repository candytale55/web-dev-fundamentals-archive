let myCountry;
let countries = []; // Holds all the countries names.

class Country {
    constructor(name, officialName, capital, language){
        this._name = name;
        this._officialName = officialName;
        this._capital = capital;
        this._continents = [];
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
Country.prototype._region = "Central America";
Country.prototype._landlocked = false;
Country.prototype._transcontinental = false;



/* --------------------------------------------------------------------------------- */

const Guatemala = new Country("Guatemala", "República de Guatemala", "Guatemala City", "Spanish");

Guatemala.addLimits4("Mexico", "Honduras", "Pacific Ocean", "Mexico");
Guatemala.addLimitNE("Belize");
Guatemala.addLimitSE("El Salvador");
Guatemala.addLimitNE("Caribbean Sea");
Guatemala.addLimitNW("Mexico");
Guatemala.addLimitSW("Pacific Ocean");

Guatemala.addCities("Cobán", "Huehuetenango", "Puerto Barrios", "Antigua");
Guatemala.addLanguages("Mayan", "Xinca", "Garifuna", "Arawakan");

Guatemala.setwikiURI("https://en.wikipedia.org/wiki/Guatemala");
Guatemala.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/320px-Flag_of_Guatemala.svg.png");
Guatemala.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/14/Guatemala-CIA_WFB_Map.png");
Guatemala.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/LocationGuatemala.svg/640px-LocationGuatemala.svg.png");

Guatemala.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Guatemala_(location_map_scheme)");
Guatemala.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Guatemala.svg");
Guatemala.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Guatemala-CIA_WFB_Map.png");
Guatemala.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationGuatemala.svg");
Guatemala.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Guatemala");
Guatemala.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/gt.html");


//myCountry = Guatemala;
//console.log(Guatemala);



/* --------------------------------------------------------------------------------- */


const Belize = new Country("Belize", "Belize", "Belmopan", "English");

Belize.addLanguages("Kriol", "Spanish", "Mayan","German", "Garifuna", "Chinese");
Belize.addCities("Orange Walk", "San Ignacio", "Punta Gorda", "Big Creek");
Belize.addLimits8("Mexico", "Caribbean Sea", "Caribbean Sea", "Caribbean Sea", "Guatemala", "Guatemala", "Mexico");

Belize.setwikiURI("https://en.wikipedia.org/wiki/Belize");
Belize.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/320px-Flag_of_Belize.svg.png");
//CountryMap is the small map with cities
Belize.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/0/06/Belize-CIA_WFB_Map.png");
//RegionMap is the map of the country in its 
Belize.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/LocationBelize.svg/640px-LocationBelize.svg.png");

Belize.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Belize_(location_map_scheme)");
Belize.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Belize.svg");
Belize.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Belize-CIA_WFB_Map.png");
Belize.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationBelize.svg");
Belize.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Belize");
Belize.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/bh.html");

// myCountry= Belize;
// console.log(Belize);


/* --------------------------------------------------------------------------------- */


const Honduras = new Country("Honduras", "República de Honduras", "Tegucigalpa", "Spanish");

Honduras.addCities("Choluteca", "San Pedro Sula", "Puerto Lempira", "La Ceiba", "Santa Rosa de Copán");
Honduras.addLanguages("Garifuna","Miskito", "Mayangna", "Tol", "Mayan", "Bay Islands Creole English");
Honduras.addLimits8("Caribbean Sea","Caribbean Sea","Nicaragua","Nicaragua","Pacific Ocean (Golfo de Fonseca)","El Salvador", "Guatemala", "Guatemala");

Honduras.setwikiURI("https://en.wikipedia.org/wiki/Honduras");
Honduras.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Honduras_%28darker_variant%29.svg/320px-Flag_of_Honduras_%28darker_variant%29.svg.png");
//CountryMap is the small map with cities
Honduras.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/ef/Honduras-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
Honduras.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/LocationHonduras.svg/640px-LocationHonduras.svg.png");

Honduras.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Honduras_(location_map_scheme)");
Honduras.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Honduras_(darker_variant).svg");
Honduras.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Honduras-CIA_WFB_Map.png");
Honduras.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationHonduras.svg");
Honduras.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Honduras");
Honduras.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ho.html");


//myCountry = Honduras;
//console.log(Honduras);


/* --------------------------------------------------------------------------------- */

const ElSalvador = new Country("El Salvador", "República de El Salvador", "San Salvador", "Spanish");


ElSalvador.addCities("Santa Ana", "Sonsonante", "Usulután", "Acajutla", "San Miguel");
ElSalvador.addLanguages("Caliche","Nawat", "Mayan");
ElSalvador.addLimits8("Honduras","Honduras","Honduras","Pacific Ocean","Pacific Ocean","Pacific Ocean","Guatemala","Guatemala");
ElSalvador.addLimitN("Guatemala");

ElSalvador.setwikiURI("https://en.wikipedia.org/wiki/El_Salvador");
ElSalvador.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/320px-Flag_of_El_Salvador.svg.png");


//CountryMap is the small map with cities
ElSalvador.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/98/El_Salvador-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
ElSalvador.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/LocationElSalvador.svg/640px-LocationElSalvador.svg.png");

ElSalvador.setSVG_locator("https://commons.wikimedia.org/wiki/Template:El_Salvador_imagemap_(location_map_scheme)");
ElSalvador.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_El_Salvador.svg");
ElSalvador.addRefURI("countryMapFile","https://ca.wikipedia.org/wiki/Fitxer:El_Salvador-CIA_WFB_Map.png");
ElSalvador.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationElSalvador.svg");
ElSalvador.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_El_Salvador");
ElSalvador.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/es.html");


//myCountry = ElSalvador;
//console.log(ElSalvador);


/* --------------------------------------------------------------------------------- */

const Nicaragua = new Country("Nicaragua", "República de Nicaragua", "Managua", "Spanish");

Nicaragua.addCities("Bluefields", "San Carlos", "Corinto", "Puerto Sandino", "Puerto Cabezas", "Rama");
Nicaragua.addLanguages("English", "Miskito", "Rama", "Sumo", "Miskito Coastal Creole", "Garifuna", "Rama", "Cay Creole");

Nicaragua.addLimits8("Honduras","Caribbean Sea","Caribbean Sea","Caribbean Sea","Costa Rica","Pacific Ocean","Pacific Ocean","Honduras");

Nicaragua.setwikiURI("https://en.wikipedia.org/wiki/Nicaragua");
Nicaragua.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/320px-Flag_of_Nicaragua.svg.png");
//CountryMap is the small map with cities
Nicaragua.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/c/cf/Nu-map-EN.jpg");
//RegionMap is the map of the country in its region 
Nicaragua.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LocationNicaragua.svg/640px-LocationNicaragua.svg.png");

Nicaragua.setSVG_locator("https://commons.wikimedia.org/wiki/Template:Nicaragua_imagemap_(location_map_scheme)");
Nicaragua.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Nicaragua.svg");
Nicaragua.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Nu-map-EN.jpg");
Nicaragua.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationNicaragua.svg");
Nicaragua.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Nicaragua");
Nicaragua.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/nu.html");

//myCountry = Nicaragua;
//console.log(Nicaragua);


/* --------------------------------------------------------------------------------- */

const CostaRica = new Country("Costa Rica", "República de Costa Rica", "San José", "Spanish");

CostaRica.addCities("Puerto Limón", "Golfito", "Puerto Quepos", "Puntarenas", "Nicoya");
CostaRica.addLanguages("Mekatelyu","Bribri","Patois");
CostaRica.addLimits8("Nicaragua","Caribbean Sea","Panama","Panama","Pacific Ocean","Pacific Ocean","Pacific Ocean","Nicaragua");
CostaRica.addLimitE("Caribbean Sea");
CostaRica.addLimitSE("Pacific Ocean");

CostaRica.setwikiURI("https://en.wikipedia.org/wiki/Costa_Rica");
CostaRica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/320px-Flag_of_Costa_Rica_%28state%29.svg.png");
//CountryMap is the small map with cities
CostaRica.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/4/43/Cs-map-EN.png");
//RegionMap is the map of the country in its region 
CostaRica.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/LocationCostaRica.svg/640px-LocationCostaRica.svg.png");

CostaRica.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Costa_Rica_(location_map_scheme)");
CostaRica.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Costa_Rica_(state).svg");
CostaRica.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Cs-map-EN.png");
CostaRica.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationCostaRica.svg");
CostaRica.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Costa_Rica");
CostaRica.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/cs.html");

//myCountry = CostaRica;
//console.log(CostaRica);



/* --------------------------------------------------------------------------------- */
const Panama = new Country("Panama", "República de Panamá", "Panama City", "Spanish");

Panama.addCities("Coco Solo", "David", "Bocas del Toro", "El Porvenir", "Vista Alegre");
Panama.addLanguages("English", "Ngäbere");
Panama.addLimits8("Caribbean Sea","Caribbean Sea","Colombia","Colombia","Pacific Ocean","Pacific Ocean","Costa Rica","Costa Rica");
Panama.isTrancontinental("Central America", "South America");

Panama.setwikiURI("https://en.wikipedia.org/wiki/Panama");
Panama.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/320px-Flag_of_Panama.svg.png");
//CountryMap is the small map with cities
Panama.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/8/81/Pm-map.png");
//RegionMap is the map of the country in its region 
Panama.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/LocationPanama.svg/640px-LocationPanama.svg.png");

Panama.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Panama_(location_map_scheme)");
Panama.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Panama.svg");
Panama.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Pm-map.png");
Panama.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationPanama.svg");
Panama.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Panama");
Panama.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/pm.html");

myCountry = Panama;
console.log(Panama);

/* --------------------------------------------------------------------------------- */

/*
FORM FORM FORM FORM

SUSTITUTYEME.addCities("");
SUSTITUTYEME.addLanguages("");
SUSTITUTYEME.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");

SUSTITUTYEME.setwikiURI("");
SUSTITUTYEME.setFlag("");
//CountryMap is the small map with cities
SUSTITUTYEME.setCountryMap("");
//RegionMap is the map of the country in its region 
SUSTITUTYEME.setRegionMap("");

SUSTITUTYEME.setSVG_locator("");
SUSTITUTYEME.addRefURI("flagFile", "");
SUSTITUTYEME.addRefURI("countryMapFile","");
SUSTITUTYEME.addRefURI("regionMapFile","");
SUSTITUTYEME.addRefURI("wikiAtlas","");
SUSTITUTYEME.addRefURI("ciaFactbook", "");


*/


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

document.getElementById("north-limit").innerHTML = myCountry.limits["N"];
document.getElementById("northeast-limit").innerHTML = myCountry.limits["NE"];
document.getElementById("east-limit").innerHTML = myCountry.limits["E"];
document.getElementById("southeast-limit").innerHTML = myCountry.limits["SE"];
document.getElementById("south-limit").innerHTML = myCountry.limits["S"];
document.getElementById("southwest-limit").innerHTML = myCountry.limits["SW"];
document.getElementById("west-limit").innerHTML = myCountry.limits["W"];
document.getElementById("northwest-limit").innerHTML = myCountry.limits["NW"];

/*
document.getElementById("ocean").innerHTML = myCountry.ocean;
document.getElementById("sea").innerHTML = myCountry.sea;
document.getElementById("islands").innerHTML = JSON.stringify(myCountry.islands);
document.getElementById("URIs").innerHTML = JSON.stringify(myCountry.URIs);
*/