let myCountry;

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

/*  -------  OceaniaIsland SUBCLASS    ----------- */

class OceaniaIsland extends Island {  ///// NOT USING AT THE MOMENT. I don't think it's worth to have an additional specific Oceania or Antillas island object - BUT HAVE TO SOLVE PROBLEMS OF INHERITANCE  - (my problems, not the program - I need to understand how it works)
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











/*  -------  Antillas SUBCLASS    ----------- */


/*  -------  Instances   ----------- */



// OCEANIA

const Tuvalu = new Island("Tuvalu", "Tuvalu", "Funafuti", "English", "Polynesia");
Tuvalu.setwikiURI("https://en.wikipedia.org/wiki/Tuvalu");

const Tonga = new OceaniaIsland("Tonga", "Kingdom of Tonga", "Nukuʻalofa", "Polynesia");
Tonga.setwikiURI("https://en.wikipedia.org/wiki/Tonga");

const Vanuatu = new Island("Vanuatu", "Republic of Vanuatu", "Port Vila", "Bislama", "Pacific");
Vanuatu.setwikiURI("https://en.wikipedia.org/wiki/Vanuatu");

const Fiji = new Island("Fiji", "Republic of Fiji", "Suva", "iTaukei", "South Pacific");
Fiji.setwikiURI("https://en.wikipedia.org/wiki/Fiji");

const NewZealand = new Island("New Zealand", "New Zealand", "Wellington", "English", "Pacific");
NewZealand.setwikiURI("https://en.wikipedia.org/wiki/New_Zealand");

const NewCaledonia = new Island("New Caledonia", "New Caledonia", "Nouméa", "French", "Pacific");
NewCaledonia.setwikiURI("https://en.wikipedia.org/wiki/New_Caledonia");
  
const Palau = new Island("Palau", "Republic of Palau", "Ngerulmud", "Palauan", "Pacific");
Palau.setwikiURI("https://en.wikipedia.org/wiki/Palau");

const Niue = new Island("Niue", "Niue", "Alofi", "English", "South Pacific Ocean");
Niue.setwikiURI("https://en.wikipedia.org/wiki/Niue");

const SolomonIslands = new Island("Solomon Islands", "Solomon Islands", "Honiara", "English", "Pacific");
SolomonIslands.setwikiURI("https://en.wikipedia.org/wiki/Solomon_Islands");

const WallisandFutuna = new Island("Wallis and Futuna", "Territory of the Wallis and Futuna Islands", "Matā'Utu", "French", "Pacific");
WallisandFutuna.setwikiURI("https://en.wikipedia.org/wiki/Wallis_and_Futuna");










  const arrOceania = [Tonga.name, Tuvalu.name, Vanuatu.name, Fiji.name];
  // console.log(arrOceania);
 
  
   const Melanesia = {
     name : "Melanesia",
     description : "a subregion of Oceania extending from New Guinea island in the southwestern Pacific Ocean to the Arafura Sea, and eastward to Tonga. The region includes the five independent countries of Fiji, Vanuatu, Solomon Islands, Papua New Guinea, East Timor as well as the French special collectivity of New Caledonia, and parts of Indonesia – particularly Western New Guinea, East Nusa Tenggara, and Maluku. Most of the region is in the Southern Hemisphere, most of North Maluku and a few small northwestern islands of Western New Guinea are in the Northern Hemisphere.", 
     wikiURI : "https://en.wikipedia.org/wiki/Melanesia",
     countries : [Fiji.name, Vanuatu.name, SolomonIslands.name, "PapuaNewGuinea", "EastTimor", NewCaledonia.name, "Indonesia"],
 };
 
 const Polynesia = {
     name : "Polynesia",
     description : "is a subregion of Oceania, made up of more than 1,000 islands scattered over the central and southern Pacific Ocean. The indigenous people who inhabit the islands of Polynesia are termed Polynesians, sharing many similar traits including language family, culture, and beliefs. They had a strong tradition of sailing and using stars to navigate at night. The largest country in Polynesia is New Zealand.",
     
     countries : ["Samoa", "Cook Islands", "Easter Island", "French Polynesia", "Hawaii", "New Zealand", "Niue", "Norfolk Island", "Pitcairn Island", "American Samoa", "Tokelau", "Tonga", "Tuvalu", "Wallis and Fortuna", "Rotuma"],
     
     wikiURI : "https://en.wikipedia.org/wiki/Polynesia",
 }; /* -------------Polynesia------------*/
 
 const Oceania = {
     description : "is a geographic region that includes Australasia, Melanesia, Micronesia and Polynesia. Spanning the eastern and western hemispheres, Oceania has a land area of 8,525,989 square kilometres (3,291,903 sq mi) and a population of over 47 million. Situated in the southeast of the Asia-Pacific region, Oceania, when compared to continental regions, is the smallest in land area and the second smallest in population after Antarctica.",
       wikiURI : "https://en.wikipedia.org/wiki/Oceania",
       regions : [Melanesia.name, "Micronesia", Polynesia.name],
   }
 
     const Overseas_France = {
         AKAs: ["France d'outre-mer"],
         countries: [NewCaledonia.name, WallisandFutuna.name  
         /*Réunion: 7
         Guadeloupe: 4
         Martinique: 4
         French Polynesia: 3
         French Guiana: 2
         Mayotte
         Saint Barthélemy and Saint Martin: 1
         Saint Pierre and Miquelon: 1*/],
         wikiURI: "https://en.wikipedia.org/wiki/Overseas_France",
         description : "consists of all the French-administered territories outside Europe, mostly remains of the French colonial empire. These territories have varying legal status and different levels of autonomy, although all (except those with no permanent inhabitants) have representation in both France's National Assembly and Senate, which together make up the French Parliament. Their citizens have French nationality and vote for the president of France. They have the right to vote in elections to the European Parliament (French citizens living overseas currently vote in the Overseas constituency). Overseas France includes island territories in the Atlantic, Pacific and Indian Oceans, French Guiana on the South American continent, and several periantarctic islands as well as a claim in Antarctica.",
     }
 
     const Caroline_Islands = {
         name : "Caroline Islands",
         AKAs : ["Carolines", "Nuevas Filipinas", "New Philippines"],
         wikiURI : "https://en.wikipedia.org/wiki/Caroline_Islands",
         countries : ["Federate States of Micronesia", "Palau"],
         description : "are a widely scattered archipelago of tiny islands in the western Pacific Ocean, to the north of New Guinea. Politically they are divided between the Federated States of Micronesia in the eastern part of the group, and Palau at the extreme western end. Historically, this area was also called Nuevas Filipinas or New Philippines[1] as they were part of the Spanish East Indies and governed from Manila in the Philippines. \n\nThe Carolines span a distance of approximately 3540 kilometers (2200 miles), from Tobi, Palau at the westernmost point to Kosrae at the easternmost.",
     }
     //console.log(Caroline_Islands.description);
     //myCountry = Caroline_Islands;
 
   
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
 