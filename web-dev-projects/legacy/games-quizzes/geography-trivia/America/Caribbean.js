let myCountry;
let countries = []; // Holds all the countries names.

class Country {
    constructor(name, officialName, capital, language){
        this._name = name;
        this._officialName = officialName;
        this._capital = capital;
        this._continent = "America";
        this._continents = [];
        this._language = language;
        this._languages;
        this._region = "Caribbean";
        this._subRegion = [];
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

    addSubRegion(region){
        this._subRegion.push(region);
    }
    get subRegion(){
        return this._subRegion;
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

    isIsland(){
        this._island = true;
    }
    get island(){
        return this._island;
    }

    hasIsland(island){
        if(this._islands) {
            this._islands.push(island);
        } else {
            this._islands = [island];
        }
        
    }
    hasIslands(...islands){
        this._islands = [...islands];
    }
    get islands(){
        return this._islands;
    }
    
}

/*
Country.prototype._continent = "America";
Country.prototype._landlocked = false;
Country.prototype._transcontinental = false;
Country.prototype._island = true;
*/

Country.prototype = {
    constructor: Country,
    _continent : "America",
    _landlocked : false,
    _transcontinental : false,
    _island : true     
}




/* --------------------------------------------------------------------------------- */

const Cuba = new Country("Cuba", "República de Cuba", "Havana", "Spanish");

Cuba.addCities("Varadero", "Santiago de Cuba", "Guantánamo", "Cienfuegos", "Matanzas");
Cuba.addLanguages("Lucumí");
Cuba.addLimits8("Atlantic Ocean","Atlantic Ocean","Atlantic Ocean","Caribbean Sea","Caribbean Sea","Caribbean Sea","Gulf of Mexico","Gulf of Mexico");
Cuba.isIsland();

Cuba.setwikiURI("https://en.wikipedia.org/wiki/Cuba");
Cuba.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/320px-Flag_of_Cuba.svg.png");
//CountryMap is the small map with cities
Cuba.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/b/b1/Cu-map.png");
//RegionMap is the map of the country in its region 
Cuba.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/LocationCuba.svg/640px-LocationCuba.svg.png");

Cuba.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Cuba_(location_map_scheme)");
Cuba.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Cuba.svg");
Cuba.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Cu-map.png");
Cuba.addRefURI("regionMapFile","https://an.wikipedia.org/wiki/Imachen:LocationCuba.svg");
Cuba.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Cuba");
Cuba.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/cu.html");

//myCountry = Cuba;
//console.log(Cuba);

/* --------------------------------------------------------------------------------- */

const Haiti = new Country("Haiti", "Republic of Haiti", "Port-au-Prince", "French");

Haiti.addCities("Port-de-Paix", "Les Cayes", "Saint-Marc", "Cap-Haïtien", "	Jacmel");
Haiti.addLanguages("Haitian Creole");
Haiti.addLimits8("Atlantic Ocean","Atlantic Ocean","Dominican Republic","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea");
Haiti.isIsland();

Haiti.setwikiURI("https://en.wikipedia.org/wiki/Haiti");
Haiti.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/320px-Flag_of_Haiti.svg.png");
//CountryMap is the small map with cities
Haiti.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/14/Haiti_map.png");
//RegionMap is the map of the country in its region 
Haiti.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/LocationHaiti.svg/640px-LocationHaiti.svg.png");

Haiti.setSVG_locator("https://commons.wikimedia.org/wiki/Template:Haiti_imagemap_(location_map_scheme)");
Haiti.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Haiti.svg");
Haiti.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Haiti_map.png");
Haiti.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationHaiti.svg");
Haiti.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Haiti");
Haiti.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ha.html");
Haiti.addRefURI("mapsOf", "https://commons.wikimedia.org/wiki/Maps_of_Haiti");
Haiti.addRefURI("locatorMapsOf", "https://commons.wikimedia.org/wiki/Category:Locator_maps_of_Haiti");

//myCountry = Haiti;
//console.log(Haiti);


/* --------------------------------------------------------------------------------- */


const DominicanRepublic = new Country("Dominican Republic", "República Dominicana", "Santo Domingo", "Spanish");

DominicanRepublic.addCities("Puerto Plata", "Bonao", "San Cristóbal", "Barahona", "Pedernales", "Punta Cana");
DominicanRepublic.addLanguages("Haitian Creole",  "Samaná English");
DominicanRepublic.addLimits8("Atlantic Ocean","Atlantic Ocean","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Haiti","Caribbean Sea");
DominicanRepublic.isIsland();

DominicanRepublic.setwikiURI("https://en.wikipedia.org/wiki/Dominican_Republic");
DominicanRepublic.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/320px-Flag_of_the_Dominican_Republic.svg.png");
//CountryMap is the small map with cities
DominicanRepublic.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/a/a6/Rep%C3%BAblica_Dominicana.png");
//RegionMap is the map of the country in its region 
DominicanRepublic.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/LocationDominicanRepublic.svg/640px-LocationDominicanRepublic.svg.png");

DominicanRepublic.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_the_Dominican_Republic_(location_map_scheme)");
DominicanRepublic.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_Dominican_Republic.svg");
DominicanRepublic.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Rep%C3%BAblica_Dominicana.png");
DominicanRepublic.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationDominicanRepublic.svg");
DominicanRepublic.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_the_Dominican_Republic");
DominicanRepublic.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/dr.html");
DominicanRepublic.addRefURI("mapsOf", "https://commons.wikimedia.org/wiki/Maps_of_the_Dominican_Republic")

//myCountry = DominicanRepublic;
//console.log(DominicanRepublic);

/* --------------------------------------------------------------------------------- */


const PuertoRico = new Country("Puerto Rico", "Commonwealth of Puerto Rico", "San Juan", "Spanish");

PuertoRico.addAKAs("Porto Rico", "PR", "Estado Libre Asociado de Puerto Rico");
PuertoRico.addCities("Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo", "Arecibo", "Toa Baja", "Mayagüez", "Trujillo Alto");
PuertoRico.addLanguages("English");
PuertoRico.addLimits8("Atlantic Ocean","Atlantic Ocean","Sonda de Vieques (Caribbean Sea)","Caribbean Sea","Caribbean Sea","Caribbean Sea","Mona Passage (Caribbean Sea)","Atlantic Ocean");
PuertoRico.isIsland();
PuertoRico.isTerritory("United States of America");

PuertoRico.setwikiURI("https://en.wikipedia.org/wiki/Puerto_Rico");
PuertoRico.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/320px-Flag_of_Puerto_Rico.svg.png");
//CountryMap is the small map with cities
PuertoRico.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/2/2f/Puerto_Rico-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
PuertoRico.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/LocationPuertoRico.svg/640px-LocationPuertoRico.svg.png");

PuertoRico.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Puerto_Rico_(location_map_scheme)");
PuertoRico.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Puerto_Rico.svg");
PuertoRico.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Puerto_Rico-CIA_WFB_Map.png");
PuertoRico.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationPuertoRico.svg");
PuertoRico.addRefURI("locatorMap", "https://commons.wikimedia.org/wiki/Category:Locator_maps_of_Puerto_Rico");
PuertoRico.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Puerto_Rico");
PuertoRico.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/rq.html");

//myCountry = PuertoRico;
//console.log(PuertoRico);


/* --------------------------------------------------------------------------------- */

const Jamaica = new Country("Jamaica", "Jamaica", "Kingston", "English");


Jamaica.addCities("Montego Bay", "Ocho Rios", "Discovery Bay", "Portmore", "Port Esquivel", "Spanish Town");
Jamaica.addLanguages("Jamaican Patois");
Jamaica.addLimits8("Caribbean Sea","Caribbean Sea","Jamaica Channel (Caribbean Sea)","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea");
Jamaica.isIsland();

Jamaica.setwikiURI("https://en.wikipedia.org/wiki/Jamaica");
Jamaica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/320px-Flag_of_Jamaica.svg.png");
//CountryMap is the small map with cities
Jamaica.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/d/dd/Jm-map.png");
//RegionMap is the map of the country in its region 
Jamaica.setRegionMap("https://i.postimg.cc/8CpxdKH0/Jamaica-Region.png");

Jamaica.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Jamaica_(location_map_scheme)");
Jamaica.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Jamaica.svg");
Jamaica.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Jm-map.png");
Jamaica.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:LocationJamaica.svg");
Jamaica.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Jamaica");
Jamaica.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/jm.html");
Jamaica.addRefURI("mapsOf", "https://commons.wikimedia.org/wiki/Maps_of_Jamaica")

//myCountry = Jamaica;
//console.log(Jamaica);


/* --------------------------------------------------------------------------------- */

const CaymanIslands = new Country("Cayman Islands", "Cayman Islands", "George Town", "English");


CaymanIslands.addCities("West Bay", "Bodden Town", "East End","North Side","West End", "Old Man Village", "Savannah", "Blossom Village");
CaymanIslands.addLanguages("Cayman Creole");
CaymanIslands.addLimits8("Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea","Caribbean Sea");
CaymanIslands.isIsland();
CaymanIslands.isTerritory("United Kingdom");
CaymanIslands.hasIslands("Grand Cayman", "Cayman Brac", "Little Cayman");

CaymanIslands.setwikiURI("https://en.wikipedia.org/wiki/Cayman_Islands");
CaymanIslands.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/320px-Flag_of_the_Cayman_Islands.svg.png");
//CountryMap is the small map with cities
CaymanIslands.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/2/20/Cayman_Islands-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
CaymanIslands.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cayman_Islands_in_Caribbean.svg/640px-Cayman_Islands_in_Caribbean.svg.png");

CaymanIslands.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Cayman_Islands_(location_map_scheme)");
CaymanIslands.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_Cayman_Islands.svg");
CaymanIslands.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Cayman_Islands-CIA_WFB_Map.png");
CaymanIslands.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:Cayman_Islands_in_Caribbean.svg");
CaymanIslands.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_the_Cayman_Islands");
CaymanIslands.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/cj.html");
CaymanIslands.addRefURI("mapsOf", "https://commons.wikimedia.org/wiki/Maps_of_Cayman_Islands")


//myCountry = CaymanIslands;
//console.log(CaymanIslands);




/* --------------------------------------------------------------------------------- */

const SaintLucia = new Country("Saint Lucia", "Saint Lucia", "Castries", "America", "English");

//SaintLucia.specificRegion ="Lesser Antilles";
//SaintLucia.region = "Antilles";
SaintLucia.addCities("Cul de Sac", "Dennery", "Micoud", "Vieux Fort", "Soufrière", "Choiseul");
SaintLucia.addLanguages("Kwéyòl (Saint Lucian French Creole ) AKA Patois(Patwa)");
SaintLucia.addLimits8("Saint Lucia Channel","North Atlantic Ocean","North Atlantic Ocean","North Atlantic Ocean","Saint Vincent Passage","Caribbean Sea","Caribbean Sea","Caribbean Sea");
SaintLucia.isIsland();
SaintLucia.addAKA("Iyonola");

SaintLucia.setwikiURI("https://en.wikipedia.org/wiki/Saint_Lucia");
SaintLucia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/320px-Flag_of_Saint_Lucia.svg.png");
//CountryMap is the small map with cities
SaintLucia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/d/d9/Saint_Lucia-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
SaintLucia.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Saint_Lucia_in_its_region.svg/640px-Saint_Lucia_in_its_region.svg.png");

SaintLucia.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint_Lucia_(location_map_scheme)");
SaintLucia.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Lucia.svg");
SaintLucia.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Lucia-CIA_WFB_Map.png");
SaintLucia.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Lucia_in_its_region.svg");
SaintLucia.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint_Lucia");SaintLucia.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/st.html");

//myCountry = SaintLucia;
//console.log(SaintLucia);


/* --------------------------------------------------------------------------------- */


const Grenada = new Country("Grenada", "Grenada","St. George's", "English");

Grenada.addCities("Grenville", "Gouyave", "Hillsborough");
Grenada.addLanguages("Grenadian Creole English", "Grenadian Creole French");
Grenada.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
Grenada.isIsland();
Grenada.hasIslands("Carriacou", "Petite Martinique", "Ronde Island", "Caille Island", "Diamond Island", "Large Island", "Saline Island", "Frigate Island");

Grenada.setwikiURI("https://en.wikipedia.org/wiki/Grenada");
Grenada.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/320px-Flag_of_Grenada.svg.png");
//CountryMap is the small map with cities
Grenada.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/e5/Gj-map.gif");
//RegionMap is the map of the country in its region 
Grenada.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grenada_in_its_region.svg/640px-Grenada_in_its_region.svg.png");

Grenada.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Grenada_(location_map_scheme)");
Grenada.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Grenada.svg");
Grenada.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Gj-map.gif");
Grenada.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Grenada_in_its_region.svg");
Grenada.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Grenada");
Grenada.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/gj.html");

//myCountry = Grenada;
//console.log(Grenada);

/* --------------------------------------------------------------------------------- */


const Dominica = new Country("Dominica", "Commonwealth of Dominica", "Roseau", "English");

Dominica.addCities("Portsmouth", "Rosalie", "Marigot");
Dominica.addLanguages("Dominican Creole", "French");
Dominica.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest"); 
Dominica.isIsland();

Dominica.setwikiURI("https://en.wikipedia.org/wiki/Dominica");
Dominica.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/320px-Flag_of_Dominica.svg.png");
//CountryMap is the small map with cities
Dominica.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/a/ad/Do-map.png");
//RegionMap is the map of the country in its region 
//Dominica.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dominica_in_its_region.svg/640px-Dominica_in_its_region.svg.png");
Dominica.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LocationDominica.svg/640px-LocationDominica.svg.png");
Dominica.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Dominica_(location_map_scheme)");

Dominica.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Dominica.svg");
Dominica.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Do-map.png");
//Dominica.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Dominica_in_its_region.svg");
Dominica.addRefURI("regionMapFile", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LocationDominica.svg/640px-LocationDominica.svg.png");
Dominica.addRefURI("redLocationMapFile", "https://commons.wikimedia.org/wiki/File:LocationDominica.svg");
Dominica.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Dominica");
Dominica.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/do.html");

//myCountry = Dominica;
//console.log(Dominica);

/* --------------------------------------------------------------------------------- */


const SaintVincentGrenadines = new Country("Saint Vincent and the Grenadines", "Saint Vincent and the Grenadines", "Kingstown", "English");
SaintVincentGrenadines.addCities("Port Elizabeth", "Chateaubelair", "Barrouallie", "Kingstown", "Layou");
SaintVincentGrenadines.addLanguages("Vincentian Creole");
SaintVincentGrenadines.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
SaintVincentGrenadines.isIsland();
SaintVincentGrenadines.hasIslands("Saint Vincent", "Young Island", "Bequia", "Mustique", "Canouan", "Union Island", "Mayreau", "Petit St Vincent", "Palm Island", "Petit Nevis", "Petit Mustique");

SaintVincentGrenadines.setwikiURI("https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines");
SaintVincentGrenadines.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/320px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png");
//CountryMap is the small map with cities
SaintVincentGrenadines.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/92/Saint_Vincent_and_the_Grenadines-CIA_WFB_Map.png");

//RegionMap is the map of the country in its region 
SaintVincentGrenadines.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Saint_Vincent_and_the_Grenadines_in_its_region.svg/640px-Saint_Vincent_and_the_Grenadines_in_its_region.svg.png");

SaintVincentGrenadines.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint_Vincent_and_the_Grenadines_(location_map_scheme)");

SaintVincentGrenadines.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Vincent_and_the_Grenadines.svg");
SaintVincentGrenadines.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Vincent_and_the_Grenadines-CIA_WFB_Map.png");

SaintVincentGrenadines.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Vincent_and_the_Grenadines_in_its_region.svg");
SaintVincentGrenadines.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint_Vincent_and_the_Grenadines");
SaintVincentGrenadines.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/vc.html");

//myCountry = SaintVincentGrenadines;
//console.log(SaintVincentGrenadines);



/* --------------------------------------------------------------------------------- */


const Barbados = new Country("Barbados", "Barbados", "Bridgetown", "English");

Barbados.addCities("Speightstown", "Bathsheba", "Holetown", "The Crane");
Barbados.addLanguages("Bajan Creole");
Barbados.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
Barbados.isIsland();

Barbados.setwikiURI("https://en.wikipedia.org/wiki/Barbados");
Barbados.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/320px-Flag_of_Barbados.svg.png");
//CountryMap is the small map with cities
Barbados.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/ed/Bb-map.png");
//RegionMap is the map of the country in its region 
Barbados.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Barbados_in_its_region.svg/640px-Barbados_in_its_region.svg.png");

Barbados.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Barbados_(location_map_scheme)");
Barbados.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Barbados.svg");
Barbados.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Bb-map.png");
Barbados.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Barbados_in_its_region.svg");
Barbados.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Barbados");Barbados.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/bb.html");

//myCountry = Barbados;
//console.log(Barbados);
/* --------------------------------------------------------------------------------- */

const VirginIslandsUK = new Country("Virgin Islands", "British Virgin Islands", "Road Town", "British English");

VirginIslandsUK.addCities("East End-Long Look", "Belle Vue", "Great Harbour", "Spanish Town", "The Settlement");
VirginIslandsUK.addLanguages("Virgin Islands Creole");
VirginIslandsUK.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
VirginIslandsUK.isIsland();
VirginIslandsUK.isTerritory("United Kingdom"); 
VirginIslandsUK.hasIslands("Tortola, Virgin Gorda, Anegada, and Jost Van Dyke");


VirginIslandsUK.setwikiURI("https://en.wikipedia.org/wiki/British_Virgin_Islands");
VirginIslandsUK.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/320px-Flag_of_the_British_Virgin_Islands.svg.png");
//CountryMap is the small map with cities
VirginIslandsUK.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/f/ff/BritishVirginIsland_map.png");
//RegionMap is the map of the country in its region 
VirginIslandsUK.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/British_Virgin_Islands_in_its_region_%28zoom%29.svg/640px-British_Virgin_Islands_in_its_region_%28zoom%29.svg.png");

VirginIslandsUK.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_British_Virgin_Islands_(location_map_scheme)");
VirginIslandsUK.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_British_Virgin_Islands.svg");
VirginIslandsUK.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:BritishVirginIsland_map.png");
VirginIslandsUK.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:British_Virgin_Islands_in_its_region_(zoom).svg");
VirginIslandsUK.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_the_British_Virgin_Islands");
VirginIslandsUK.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/vi.html");


//myCountry = VirginIslandsUK;
//console.log(VirginIslandsUK);



/* --------------------------------------------------------------------------------- */

const VirginIslandsUSA = new Country("Virgin Islands", "Virgin Islands of the United States", "Charlotte Amalie", "English");

VirginIslandsUSA.addCities("St Croix", "Cruz Bay");
VirginIslandsUSA.addLanguages("Virgin Islands Creole English");
VirginIslandsUSA.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
VirginIslandsUSA.isIsland();
VirginIslandsUSA.hasIslands("Saint Croix", "Saint John", "Saint Thomas");
VirginIslandsUSA.addAKAs("U.S. Virgin Islands", "American Virgin Islands", "Danish West Indies");
VirginIslandsUSA.isTerritory("United States of America");

VirginIslandsUSA.setwikiURI("https://en.wikipedia.org/wiki/United_States_Virgin_Islands");    
VirginIslandsUSA.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/320px-Flag_of_the_United_States_Virgin_Islands.svg.png");
//CountryMap is the small map with cities
VirginIslandsUSA.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/c/c5/Virgin_Islands-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
VirginIslandsUSA.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/United_States_Virgin_Islands_in_its_region_%28zoom%29.svg/640px-United_States_Virgin_Islands_in_its_region_%28zoom%29.svg.png");

VirginIslandsUSA.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_the_United_States_Virgin_Islands_(location_map_scheme)");
VirginIslandsUSA.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_States_Virgin_Islands.svg");
VirginIslandsUSA.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:United_States_Virgin_Islands_in_its_region_(zoom).svg");
VirginIslandsUSA.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:Virgin_Islands-CIA_WFB_Map.png");
VirginIslandsUSA.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_the_United_States_Virgin_Islands");
VirginIslandsUSA.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/vq.html");

//myCountry = VirginIslandsUSA;
//console.log(VirginIslandsUSA);


/* --------------------------------------------------------------------------------- */

const Anguilla = new Country("Anguilla", "Anguilla", "The Valley", "English");

Anguilla.addCities("Blowing Point Village", "Sandy Ground Village", "Sandy Hill", "East End Village");
Anguilla.addLanguages("English-lexifier Creole");
Anguilla.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
Anguilla.isIsland();
Anguilla.isTerritory("United Kingdom");
Anguilla.hasIslands("Anguillita", "Blowing Rock", "Cove Cay", "Crocus Cay", "Deadman's Cay", "Dog Island", "East Cay", "Little Island", "Little Scrub Island", "Mid Cay", "North Cay", "Prickly Pear Cays", "Rabbit Island", "Sandy Island", "Scilly Cay", "Scrub Island", "Seal Island", "Sombrero (Hat Island)", "South Cay", "South Wager Island", "West Cay");


Anguilla.setwikiURI("https://en.wikipedia.org/wiki/Anguilla");
Anguilla.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/320px-Flag_of_Anguilla.svg.png");
//CountryMap is the small map with cities
Anguilla.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/9e/Anguilla-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
Anguilla.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Anguilla_in_its_region_%28zoom%29.svg/640px-Anguilla_in_its_region_%28zoom%29.svg.png");

Anguilla.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Anguilla_(location_map_scheme)");
Anguilla.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Anguilla.svg");
Anguilla.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Anguilla-CIA_WFB_Map.png");
Anguilla.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Anguilla_in_its_region_(zoom).svg");
Anguilla.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Anguilla");Anguilla.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/av.html");


//myCountry = Anguilla;
//console.log(Anguilla);


/* --------------------------------------------------------------------------------- */


const SaintMartin = new Country("Saint Martin", "Collectivity of Saint Martin", "Marigot", "French");

SaintMartin.addCities("Grand-Case", "Quartier-d'Orleans");
SaintMartin.addLanguages("English", "Dutch", "Papiamento", "Spanish");
SaintMartin.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
SaintMartin.isIsland();
SaintMartin.isTerritory("France");
SaintMartin.addAKAs("Sint Maarten", "The Friendly Island");

SaintMartin.setwikiURI("https://en.wikipedia.org/wiki/Collectivity_of_Saint_Martin");
SaintMartin.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Saint-Martin_%28fictional%29.svg/320px-Flag_of_Saint-Martin_%28fictional%29.svg.png");
//CountryMap is the small map with cities
SaintMartin.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/2/28/Saint_Martin-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
SaintMartin.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Saint_Martin_in_its_region_%28zoom%29.svg/640px-Saint_Martin_in_its_region_%28zoom%29.svg.png");

SaintMartin.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Saint-Martin_(France)_(location_map_scheme)");
SaintMartin.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Saint-Martin_(fictional).svg");
SaintMartin.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:Saint_Martin-CIA_WFB_Map.png");
SaintMartin.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Saint_Martin_in_its_region_(zoom).svg");
SaintMartin.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Saint-Martin");
SaintMartin.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/rn.html");



//myCountry = SaintMartin;
//console.log(SaintMartin);



/* --------------------------------------------------------------------------------- */

const SintMaartin = new Country("Sint Maarten", "Sint Maarten" ,"Philipsburg", "Dutch");

SintMaartin.addCities("Lower Prince's Quarter", "Cul de Sac", "Koolbaai", "Simson Bay Village");
SintMaartin.addLanguages("English");
SintMaartin.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
SintMaartin.isIsland();
SintMaartin.isTerritory("Netherlands");

SintMaartin.setwikiURI("https://en.wikipedia.org/wiki/Sint_Maarten");
SintMaartin.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/320px-Flag_of_Sint_Maarten.svg.png");
//CountryMap is the small map with cities
SintMaartin.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/5/51/Sint_Maarten-CIA_WFB_Map.png");
//RegionMap is the map of the country in its region 
SintMaartin.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sint_Maarten_in_its_region_%28zoom%29.svg/640px-Sint_Maarten_in_its_region_%28zoom%29.svg.png");

SintMaartin.setSVG_locator("https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Sint_Maarten_(location_map_scheme)");
SintMaartin.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Sint_Maarten.svg");
SintMaartin.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Sint_Maarten-CIA_WFB_Map.png");
SintMaartin.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Sint_Maarten_in_its_region_(zoom).svg");
SintMaartin.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Sint_Maarten");
SintMaartin.addRefURI("ciaFactbook", "https://www.cia.gov/library/publications/the-world-factbook/geos/nn.html");


myCountry = SintMaartin;
console.log(SintMaartin);

/* --------------------------------------------------------------------------------- */

/*
FORM FORM FORM FORM

SUSTITUTYEME.addCities("");
SUSTITUTYEME.addLanguages("");
SUSTITUTYEME.addLimits8("north","northeast","east","southeast","south","southwest","west","northwest");
SUSTITUTYEME.isIsland();

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