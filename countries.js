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

// ASIA



const China = new Country("China", "People's Republic of China", "Beijing", "Standard Chinese");
China.languages.push("Mongolian", "Uyghur", "Tibetan", "Zhuang");
China.setRegion("East Asia");
China.cities.push("Shangai", "Chongqing");
China._URIs = {
    countryMapFile : "https://ast.wikipedia.org/wiki/Ficheru:China_CIA_map.png",
    flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/320px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_the_People%27s_Republic_of_China.svg",
};
China.setwikiURI("https://en.wikipedia.org/wiki/China");
China.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/7f/China_CIA_map.png"); 
China.addRefURI("globeFile", "https://commons.wikimedia.org/wiki/File:CHN_orthographic.svg");
China.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CHN_orthographic.svg/480px-CHN_orthographic.svg.png");
China.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_China_(location_map_scheme)");
//console.log(China);
//myCountry = China;
//asianCountriesArray.push(China);
//console.log(China._URIs);

const Cambodia = new Country("Cambodia", "Kingdom of Cambodia", "Phnom Penh", "Khmer");
Cambodia.addAKA("Kampuchea");
Cambodia.languages.push("French", "English");
Cambodia.setRegion("Southeast Asia");
//Cambodia.addSpecificRegion("Indochina Peninsula");
Cambodia._URIs = {
    countryMapFile :"https://commons.wikimedia.org/wiki/File:Cb-map.png",
    flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/320px-Flag_of_Cambodia.svg.png",
    flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_Cambodia.svg",
}
Cambodia.setwikiURI("https://en.wikipedia.org/wiki/Cambodia");
Cambodia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/12/Cb-map.png");
Cambodia.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Cambodia_(location_map_scheme)");
Cambodia.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Cambodia_in_its_region.svg");
Cambodia.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cambodia_in_its_region.svg/640px-Cambodia_in_its_region.svg.png");
//countries.push(Cambodia);
//console.log(Cambodia);
//myCountry = Cambodia;
//console.log(Cambodia._URIs);

const Thailand = new Country("Thailand", "Kingdom of Thailand", "Bangkok", "Thai");
  Thailand.addAKA("Siam");
  Thailand.setRegion("Southeast Asia");
  //Thailand.addSpecificRegion("Indochine Peninsula");
  Thailand.languages.push("Isan", "Kam Mueang", "Pak Tai");
  Thailand._URIs = {
      countryMapFile : "https://commons.wikimedia.org/wiki/File:Thailand_map_CIA.png",
      regionMapFile: "https://ast.wikipedia.org/wiki/Ficheru:LocationThailand.svg",
      flagFile: "https://en.wikipedia.org/wiki/File:Flag_of_Thailand.svg",
      wikiAtlas: "https://commons.wikimedia.org/wiki/Atlas_of_Thailand",
      ciaFactBook : "https://www.cia.gov/library/publications/the-world-factbook/geos/th.html",
  }
  Thailand.setwikiURI("https://en.wikipedia.org/wiki/Thailand");
  Thailand.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thailand_map_CIA.png/276px-Thailand_map_CIA.png");
  Thailand.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LocationThailand.svg/640px-LocationThailand.svg.png");
  Thailand.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/320px-Flag_of_Thailand.svg.png");
  Thailand.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Thailand_(location_map_scheme)");
  //countries.unshift(Thailand);
  //console.log(Thailand);
  //myCountry = Thailand;
  //console.log(Thailand._URIs);


  const Singapore = new Island("Singapore", "Republic of Singapore", "Singapore", "English", "Indian", "South China Sea");
  Singapore.languages.push("Malay", "Chinese", "Tamil");
  Singapore.setRegion("Southeast Asia");
  Singapore.addAKA("Pulau Ujong","Temasek", "Singapura"); // ONLY THE FIRST ONE IS ADDED
  Singapore.AKAs.push("Temasek", "Singapura");
  Singapore._URIs = {
      flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_Singapore.svg",
      regionMapFile: "https://commons.wikimedia.org/wiki/File:Singapore_in_its_region_(zoom).svg",
      countryMapFile : "https://en.wikipedia.org/wiki/File:CIA_World_Factbook_map_of_Singapore_(English).png",
  };
  Singapore.setwikiURI("https://en.wikipedia.org/wiki/Singapore");
  Singapore.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/320px-Flag_of_Singapore.svg.png");
  Singapore.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Singapore_in_its_region_%28zoom%29.svg/640px-Singapore_in_its_region_%28zoom%29.svg.png");
  Singapore.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/0/07/CIA_World_Factbook_map_of_Singapore_%28English%29.png");
  //countries.unshift(Singapore);
  //console.log(Singapore);
  //myCountry = Singapore;
  //console.log(Singapore._URIs);

  const arrAsia = [China, Cambodia, Thailand, Singapore];  





// OCEANIA

const Tuvalu = new Island("Tuvalu", "Tuvalu", "Funafuti", "English", "Polynesia");
Tuvalu.addAKA("Ellice Islands");
Tuvalu.addLanguages("Tuvaluan");
//Tuvalu.addIsland("Test"); // Solo de una en una, ver que pues con spread operator ...
Tuvalu.islands.push("Nanumanga", "Niutao", "Niulakita", "Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu");
//countries.unshift(Tuvalu);
Tuvalu._URIs = {
    SVG_locator : "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Tuvalu_(location_map_scheme)",
    flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_Tuvalu.svg",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Tv-map.png",
    regionMapFile : "https://commons.wikimedia.org/wiki/File:Tuvalu_in_Oceania.svg",
    wikiAtlas : "https://commons.wikimedia.org/wiki/Atlas_of_Tuvalu",
}
// Because I didn't want to use the function addRefURI with what I already worked, the following setURI function calls have to be set after the block above, or they will be wiped.
Tuvalu.setwikiURI("https://en.wikipedia.org/wiki/Tuvalu");
Tuvalu.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/95/Tv-map.png");
Tuvalu.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/320px-Flag_of_Tuvalu.svg.png");
Tuvalu.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tuvalu_in_Oceania.svg/699px-Tuvalu_in_Oceania.svg.png");
//console.log(Tuvalu);
//myCountry = Tuvalu;
//console.log(Tuvalu._URIs);


const Tonga = new OceaniaIsland("Tonga", "Kingdom of Tonga", "Nukuʻalofa", "Polynesia");
  Tonga.languages.push("Tongan");
  Tonga.islands = ["Tongatapu"];
  Tonga._URIs = {
      SVG_locator : "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Tonga_(location_map_scheme)",
      countryMapFile : "https://commons.wikimedia.org/wiki/File:Tonga_sm04.gif",
      regionMapFile : "https://commons.wikimedia.org/wiki/File:Tonga_in_its_region.svg",
      flagFile : "https://en.wikipedia.org/wiki/File:Flag_of_Tonga.svg",
      wikiAtlas : "https://commons.wikimedia.org/wiki/Atlas_of_Tonga",
      ciaFactBook : "https://www.cia.gov/library/publications/the-world-factbook/geos/tn.html",
      blueCountryMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tonga_-_Location_Map_%282013%29_-_TON_-_UNOCHA.svg/480px-Tonga_-_Location_Map_%282013%29_-_TON_-_UNOCHA.svg.png",
      blueCountryMapFile: "https://en.wikipedia.org/wiki/File:Tonga_-_Location_Map_(2013)_-_TON_-_UNOCHA.svg",
      geographyOf : "https://en.wikipedia.org/wiki/Geography_of_Tonga",
  }
  // Because I didn't want to use the function addRefURI with what I already worked, the following setURI function calls have to be set after the block above, or they will be wiped.
  Tonga.setwikiURI("https://en.wikipedia.org/wiki/Tonga");
  Tonga.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/9/9b/Tonga_sm04.gif"),
  Tonga.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/320px-Flag_of_Tonga.svg.png");
  Tonga.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tonga_in_its_region.svg/640px-Tonga_in_its_region.svg.png");
  //console.log(Tonga);
  //countries.push(Tonga);
  //myCountry = Tonga;
  //console.log(Tonga._URIs);

  const Vanuatu = new Island("Vanuatu", "Republic of Vanuatu", "Port Vila", "Bislama", "Pacific");
  Vanuatu.isArchipielago();
  Vanuatu.languages.push("English", "French");
  Vanuatu.islands.push("Espiritu Santo", "Malakula", "Efate", "Erromango", "Ambrym", "Tanna", "Pentecost", "Epi", "Ambae or Aoba", "Gaua", "Vanua Lava", "Maewo", "Malo", "Aneityum or Anatom");
 // URI Section:
  Vanuatu.setwikiURI("https://en.wikipedia.org/wiki/Vanuatu");
  Vanuatu.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/6/69/Nh-map.png");
  Vanuatu.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Vanuatu_in_Oceania.svg/560px-Vanuatu_in_Oceania.svg.png");
  Vanuatu.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/320px-Flag_of_Vanuatu.svg.png");
  Vanuatu.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Nh-map.png");
  Vanuatu.addRefURI("flagFile","https://commons.wikimedia.org/wiki/File:Flag_of_Vanuatu.svg");
  Vanuatu.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_Vanuatu");
  Vanuatu.addRefURI("blueCountryMapFile", "https://en.wikipedia.org/wiki/File:Vanuatu_-_Location_Map_(2013)_-_VUT_-_UNOCHA.svg");
  Vanuatu.addRefURI("blueCountryMap" ,"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Vanuatu_-_Location_Map_%282013%29_-_VUT_-_UNOCHA.svg/480px-Vanuatu_-_Location_Map_%282013%29_-_VUT_-_UNOCHA.svg.png");
  Vanuatu.addRefURI("geographyWiki", "https://en.wikipedia.org/wiki/Geography_of_Vanuatu");
  Vanuatu.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Template:Vanuatu_imagemap_(location_map_scheme)");
  Vanuatu.addRefURI("globeFile","https://en.wikipedia.org/wiki/File:Vanuatu_on_the_globe_(Polynesia_centered).svg");
  Vanuatu.addRefURI("globe", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29.svg/480px-Vanuatu_on_the_globe_%28Polynesia_centered%29.svg.png");
  Vanuatu.addRefURI("plainCountryMap","https://commons.wikimedia.org/wiki/File:Vanuatu_location_map.svg");
  Vanuatu.addRefURI("plainCountry", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Vanuatu_location_map.svg/259px-Vanuatu_location_map.svg.png");
  //myCountry = Vanuatu;
  //console.log(Vanuatu);
  //console.log(Vanuatu._URIs);

  const Fiji = new Island("Fiji", "Republic of Fiji", "Suva", "iTaukei", "South Pacific");
  Fiji.languages.push("English", "Fiji Hindi", "Rotuman");
  Fiji.isArchipielago();
  Fiji.islands.push("Ono-i-Lau", "Viti Levu", "Vanua Levu");
  Fiji.setRegion("Melanesia");
  Fiji.cities.push("Nadi", "Lautoka");
  Fiji.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Fiji.svg");
  Fiji.addRefURI("flag", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/320px-Flag_of_Fiji.svg.png");
  Fiji.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Template:Fiji_imagemap_(location_map_scheme)");
  Fiji.addRefURI("countryMapFile","https://en.wikipedia.org/wiki/File:Fiji_map.png");
  Fiji.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/e1/Fiji_map.png");
  Fiji.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/fj.html");
  Fiji.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Fiji");
  Fiji.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_Fiji");
  Fiji.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/a/a8/Fiji_and_oceania.jpg");
  Fiji.addRefURI("globeFile", "https://commons.wikimedia.org/wiki/File:Fiji_(orthographic_projection).svg");
  Fiji.addRefURI("globe", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Fiji_%28orthographic_projection%29.svg/480px-Fiji_%28orthographic_projection%29.svg.png");

  //console.log(Fiji);
  //console.log(Fiji._URIs);
  //myCountry = Fiji;


  const NewZealand = new Island("New Zealand", "New Zealand", "Wellington", "English", "Pacific");
  NewZealand.islands.push("North Island (Te Ika-a-Māui)", "South Island (Te Waipounamu)");   
  NewZealand.cities.push("Auckland");
  NewZealand.languages.push("Maori");
  NewZealand.setRegion("Australasia");
  NewZealand.addAKA("Aotearoa (Maori)");
  NewZealand.addRefURI("wikiAtlas","https://commons.wikimedia.org/wiki/Atlas_of_New_Zealand");
  NewZealand.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/nz.html");
  NewZealand.setwikiURI("https://en.wikipedia.org/wiki/New_Zealand");
  NewZealand.setCountryMap("https://www.cia.gov/library/publications/the-world-factbook/attachments/maps/NZ-map.gif");
  NewZealand.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_New_Zealand");
  NewZealand.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_New_Zealand.svg");
  NewZealand.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/320px-Flag_of_New_Zealand.svg.png");
  NewZealand.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_New_Zealand_(location_map_scheme)");
  NewZealand.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_Zealand_in_its_region.svg/640px-New_Zealand_in_its_region.svg.png");
  NewZealand.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:New_Zealand_in_its_region.svg");
  console.log(NewZealand._URIs);
  //countries.push(NewZealand);
  myCountry = NewZealand;


  const arrOceania = ["Tonga", "Tuvalu", "Vanuatu", "Fiji"];

  const Oceania = {
      description : "is a geographic region that includes Australasia, Melanesia, Micronesia and Polynesia. Spanning the eastern and western hemispheres, Oceania has a land area of 8,525,989 square kilometres (3,291,903 sq mi) and a population of over 47 million. Situated in the southeast of the Asia-Pacific region, Oceania, when compared to continental regions, is the smallest in land area and the second smallest in population after Antarctica.",
      wikiURI : "https://en.wikipedia.org/wiki/Oceania",
      regions : ["Melanesia"],
  }

  const Melanesia = {
    description : "a subregion of Oceania extending from New Guinea island in the southwestern Pacific Ocean to the Arafura Sea, and eastward to Tonga.          The region includes the five independent countries of Fiji, Vanuatu, Solomon Islands, Papua New Guinea, East Timor as well as the French special collectivity of New Caledonia, and parts of Indonesia – particularly Western New Guinea, East Nusa Tenggara, and Maluku. Most of the region is in the Southern Hemisphere, most of North Maluku and a few small northwestern islands of Western New Guinea are in the Northern Hemisphere.", 
    wikiURI : "https://en.wikipedia.org/wiki/Melanesia",
    countries : ["Fiji", "Vanuatu", /* SolomonIslands, PapuaNewGuinea, EastTimor, NewCaledonia, Indonesia*/],
};


  /*
  const NewCaledonia;

  const Palaos;
 

  const Gales;
  const Ukraine;
  const Argentina;
  const Laos;
  const Armenia;
  */

  
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
