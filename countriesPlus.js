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
  //console.log(NewZealand._URIs);
  //countries.push(NewZealand);
  //myCountry = NewZealand;


  const NewCaledonia = new Island("New Caledonia", "New Caledonia", "Nouméa", "French", "Pacific");
  NewCaledonia.isTerritory("France");
  NewCaledonia.setwikiURI("https://en.wikipedia.org/wiki/New_Caledonia");
  NewCaledonia.addAKA("Nouvelle-Calédonie");
  NewCaledonia.addLanguages("Nengone", "Paicî", "Ajië", "Drehu");
  NewCaledonia.addSpecificRegion("Melanesia");
  NewCaledonia.isArchipielago("Grande Terre (Le Caillou)", "Loyalty Islands", "Chesterfield Islands", "Belep archipelago", "Isle of Pines");
  NewCaledonia.setFlag("https://en.wikipedia.org/wiki/File:Flag_of_FLNKS.svg");
  NewCaledonia.addRefURI("flagFile", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_FLNKS.svg/320px-Flag_of_FLNKS.svg.png");
  NewCaledonia.addRefURI("geographyOf", "https://fr.wikipedia.org/wiki/G%C3%A9ographie_de_la_Nouvelle-Cal%C3%A9donie");
  NewCaledonia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/18/New_Caledonia-CIA_WFB_Map.png");
  NewCaledonia.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:New_Caledonia-CIA_WFB_Map.png");
  NewCaledonia.addRefURI("politicalMapFile","https://commons.wikimedia.org/wiki/File:New_Caledonia_and_Vanuatu_map-fr.svg");
  NewCaledonia.addRefURI("plainCountryMapFile", "https://commons.wikimedia.org/wiki/File:Carte_de_la_Nouvelle-Caledonie.svg");
  NewCaledonia.addRefURI("plainCountryMap","https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Carte_de_la_Nouvelle-Caledonie.svg/618px-Carte_de_la_Nouvelle-Caledonie.svg.png");
  NewCaledonia.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:New_Caledonia_in_Oceania.svg");
  NewCaledonia.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/New_Caledonia_in_Oceania.svg/560px-New_Caledonia_in_Oceania.svg.png");
  //console.log(NewCaledonia._URIs);
  //myCountry = NewCaledonia;
  
  const Palau = new Island("Palau", "Republic of Palau", "Ngerulmud", "Palauan", "Pacific");
  Palau.addAKA("Beluu er a Belau","Belau", "Palaos", "Pelew");
  //Palau.addCities("Koror", "Test"); // TEST IS NOT ADDED, Check method up there
  Palau.cities.push("Koror");
  Palau.setwikiURI("https://en.wikipedia.org/wiki/Palau");
  Palau.addSpecificRegion("Caroline Islands");
  Palau.isArchipielago("Angaur", "Babeldaob", "Koror", "Peleliu");
  //Palau.addLanguages("English", "Japanese", "Sonsorolese", "Tobian"); // Add them as an array. 
  Palau.languages.push("English", "Japanese", "Sonsorolese", "Tobian");
  Palau.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/320px-Flag_of_Palau.svg.png");
  Palau.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/74/Palau-CIA_WFB_Map.png");
  Palau.setRegionMap("https://i.postimg.cc/x1kR40Bp/Palau-region-Map.jpg");
  //URIs section:
  Palau.addRefURI("geographyOf" ,"https://en.wikipedia.org/wiki/Geography_of_Palau");
  Palau.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Palau.svg");
  Palau.addRefURI("blueCountryMap","https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Palau_-_Location_Map_%282013%29_-_PLW_-_UNOCHA.svg/480px-Palau_-_Location_Map_%282013%29_-_PLW_-_UNOCHA.svg.png");
  Palau.addRefURI("blueCountryMapFile", "https://en.wikipedia.org/wiki/File:Palau_-_Location_Map_(2013)_-_PLW_-_UNOCHA.svg");
  Palau.addRefURI("countryMapFile","https://en.wikipedia.org/wiki/File:Palau-CIA_WFB_Map.png");
  Palau.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Palau");
  Palau.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Palau_(location_map_scheme)");
  Palau.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ps.html");
  Palau.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Palau_in_Oceania.svg");
  //myCountry = Palau;
  //console.log(Palau);

  const Niue = new Island("Niue", "Niue", "Alofi", "English", "South Pacific Ocean");
  Niue.languages.push("Niuean");
  Niue.setRegion("Polynesia");
  Niue.addAKA("Rock of Polynesia");
  Niue.isTerritory("New Zealand (free associated state)");
  Niue.setwikiURI("https://en.wikipedia.org/wiki/Niue");
  Niue.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/c/cb/Niue-cia-world-factbook-map.png");
  Niue.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/320px-Flag_of_Niue.svg.png");
  Niue.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Niue_in_New_Zealand_%28zomm%29.svg/640px-Niue_in_New_Zealand_%28zomm%29.svg.png");
  // URIS section
  Niue.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Niue_in_New_Zealand_(zomm).svg");
  Niue.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Niue_(location_map_scheme)");
  Niue.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:Niue-cia-world-factbook-map.png");
  Niue.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ne.html");
  Niue.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Niue");
  Niue.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Niue.svg");
  Niue.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_Niue");
  //countries.unshift(Niue);
  //myCountry = Niue;
  //console.log(Niue._URIs);

  const SolomonIslands = new Island("Solomon Islands", "Solomon Islands", "Honiara", "English", "Pacific");
  SolomonIslands.setwikiURI("https://en.wikipedia.org/wiki/Solomon_Islands");
  SolomonIslands.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_Solomon_Islands.svg");
  SolomonIslands.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/320px-Flag_of_the_Solomon_Islands.svg.png");
  SolomonIslands.isArchipielago("Choiseul", "Shortland Islands", "New Georgia Islands", "Santa Isabel", "Russell Islands", "Nggela (the Florida Islands)", "Malaita", "Guadalcanal", "Sikaiana", "Maramasike", "Ulawa", "Uki", "Makira (San Cristobal)", "Santa Ana", "Rennell and Bellona", "Santa Cruz Islands", "Tikopia", "Anuta", "Fatutaka");
  SolomonIslands.addRefURI("geographyOf","https://en.wikipedia.org/wiki/Geography_of_the_Solomon_Islands");
  SolomonIslands.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_the_Solomon_Islands_(location_map_scheme)");
  SolomonIslands.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Solomon_Islands_in_its_region_(special_marker).svg");
  SolomonIslands.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Solomon_Islands_in_its_region_%28special_marker%29.svg/640px-Solomon_Islands_in_its_region_%28special_marker%29.svg.png");
  SolomonIslands.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Solomon_Islands-CIA_WFB_Map.png");
  SolomonIslands.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/a/ac/Solomon_Islands-CIA_WFB_Map.png");
  SolomonIslands.setRegion("Melanesia");
  SolomonIslands.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/bp.html");
  //myCountry = SolomonIslands;
  //console.log(SolomonIslands);

  const WallisandFutuna = new Island("Wallis and Futuna", "Territory of the Wallis and Futuna Islands", "Matā'Utu", "French", "Pacific");
  WallisandFutuna.addLanguages("Wallisian", "Futunan");
  WallisandFutuna.addAKA("Wallis-et-Futuna");
  WallisandFutuna.addAKA("Uvea mo Futuna (Wallisian and Futunan)");
  WallisandFutuna.setFlag("https://en.wikipedia.org/wiki/File:Flag_of_Wallis_and_Futuna.svg");
  WallisandFutuna.addRefURI("flagFile", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Wallis_and_Futuna.svg/320px-Flag_of_Wallis_and_Futuna.svg.png");
  WallisandFutuna.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/wf.html");
  WallisandFutuna.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Wallis_and_Futuna");
  WallisandFutuna.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Wallis_and_Futuna-CIA_WFB_Map.png");
  WallisandFutuna.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/f/f4/Wallis_and_Futuna-CIA_WFB_Map.png");
  WallisandFutuna.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Wallis_and_Futuna_in_France_%28zoomed%29.svg/640px-Wallis_and_Futuna_in_France_%28zoomed%29.svg.png");
  WallisandFutuna.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Wallis_and_Futuna_in_France_(zoomed).svg");
  WallisandFutuna.isTerritory("France");
  WallisandFutuna.setwikiURI("https://en.wikipedia.org/wiki/Wallis_and_Futuna");
  WallisandFutuna.isArchipielago("Wallis", "Futuna", "Hoorn Islands (Futuna and Alofi)", "Fugalei", "Luaniva","Nukuhifala", "Alofi", "Faioa");

  //myCountry = WallisandFutuna;
  //console.log(WallisandFutuna);
  
  
  const EastTimor = new Island("East Timor", "Democratic Republic of Timor-Leste", "Dili", "Tetum", "Pacific", "Timor Sea");
  EastTimor.addAKA=("Timor-Leste");
  EastTimor.addLanguages("Portuguese", "Atauru", "Baikeno", "Bekais", "Bunak", "Fataluku", "Galoli", "Habun", "Idalaka", "Kawaimina", "Kemak", "Makalero", "Makasae", "Makuva", "Mambai", "Tokodede");
  EastTimor.isArchipielago("Timor (half)", "Atauro", "Jaco", "Oecusse");
  EastTimor.addRefURI("blueCountryMap", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/East_Timor_-_Location_Map_%282013%29_-_TLS_-_UNOCHA.svg/480px-East_Timor_-_Location_Map_%282013%29_-_TLS_-_UNOCHA.svg.png");
  EastTimor.addRefURI("blueCountryMapFile","https://en.wikipedia.org/wiki/File:East_Timor_-_Location_Map_(2013)_-_TLS_-_UNOCHA.svg");
  EastTimor.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/tt.html");
  EastTimor.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_East_Timor");
  EastTimor.addRefURI("redLocationMap", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/LocationEastTimor.svg/640px-LocationEastTimor.svg.png");
  EastTimor.addRefURI("redLocationMapFile", "https://commons.wikimedia.org/wiki/File:LocationEastTimor.svg");
  //console.log(EastTimor._URIs);
  //myCountry = EastTimor;


// ASIA




const Cambodia = new Country("Cambodia", "Kingdom of Cambodia", "Phnom Penh", "Khmer");
Cambodia.addAKA("Kampuchea");
Cambodia.languages.push("French", "English");


const Thailand = new Country("Thailand", "Kingdom of Thailand", "Bangkok", "Thai");
  Thailand.addAKA("Siam");
  Thailand.languages.push("Isan", "Kam Mueang", "Pak Tai");
  Thailand._URIs = {
      ciaFactBook : "https://www.cia.gov/library/publications/the-world-factbook/geos/th.html",
  }



  const Singapore = new Island("Singapore", "Republic of Singapore", "Singapore", "English", "Indian", "South China Sea");
  Singapore.languages.push("Malay", "Chinese", "Tamil");
  Singapore.addAKA("Pulau Ujong","Temasek", "Singapura"); // ONLY THE FIRST ONE IS ADDED
  Singapore.AKAs.push("Temasek", "Singapura");

  const Japan = new Island("Japan", "Japan", "Tokyo", "Japanese", "Pacific", "Sea of Japan");
  Japan.isArchipielago("Hokkaido", "Honshu", "Kyushu", "Shikoku", "Okinawa");
  Japan.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_Japan");
  Japan.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ja.html");
  
  const Singapore = new Island("Singapore", "Republic of Singapore", "Singapore", "English", "Indian", "South China Sea");



  Mongolia.addAKA("Mongolië (Dutch)");
  Mongolia.addAKA("Mongòlia (Catalan)");
  Mongolia.isLandlocked();
  Mongolia.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/mg.html");
  

  const Taiwan = new Island("Taiwan", "Republic of China", "Taipei", "Taiwanese Mandarin", "Pacific", "South China Sea");
  Taiwan.addLanguages("Formosan languages", "Hakka", "Hokkien", "Matsu");
  Taiwan.addAKA("Formosa");
  Taiwan.addAKA("ROC");
  Taiwan.cities.push("Kaohsiung", "Taichung", "Tainan", "Taoyuan");
  Taiwan.addRefURI("geographyOf","https://en.wikipedia.org/wiki/Geography_of_Taiwan");
  Taiwan.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/tw.html");
  Taiwan.addRefURI("redLocationMapFile", "https://en.wikipedia.org/wiki/File:Locator_map_of_the_ROC_Taiwan.svg");
  Taiwan.addRefURI("redLocationMap","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Locator_map_of_the_ROC_Taiwan.svg/640px-Locator_map_of_the_ROC_Taiwan.svg.png");
  Taiwan.addRefURI("plainCountryMapFile", "https://commons.wikimedia.org/wiki/File:Taiwan_location_map.svg");

  
  const Macau = new Country ("Macau", "Macao Special Administrative Region of the People's Republic of China", "Macau", "Cantonese");
  Macau.languages.push("Portuguese", "Traditional Chinese", );
  Macau.isTerritory("China (special administrative region)");

  Macau.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/mc.html");
  Macau.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_Macau");
  //Macau.addRefURI("plainCountryMapFile", "");
  Macau.addRefURI("locator_mapsOf","https://commons.wikimedia.org/wiki/Category:Maps_of_Macau");

  const HongKong = new Country("Hong Kong", "Hong Kong Special Administrative Region of the People's Republic of China", "Hong Kong", "Cantonese");
  HongKong._islands=["Hong Kong Island", "Lantau Island", "Cheung Chau", "Lamma Island", "Peng Chau", "Tsing Yi Island"];
  HongKong.languages.push("English", "Traditional Chinese");
  HongKong.isTerritory("China (special administrative region )");
  HongKong.addRefURI("locator_mapsOf", "https://commons.wikimedia.org/wiki/Category:Locator_maps_of_Hong_Kong");
  HongKong.addRefURI("redLocationMap","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Hong_Kong_Location.svg/640px-Hong_Kong_Location.svg.png");
  HongKong.addRefURI("redLocationMapFile","https://commons.wikimedia.org/wiki/File:Hong_Kong_Location.svg");
  HongKong.addRefURI("plainCountryMap","https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/China_Hong_Kong_location_map.svg/307px-China_Hong_Kong_location_map.svg.png");
  HongKong.addRefURI("plainCountryMapFile","https://commons.wikimedia.org/wiki/File:China_Hong_Kong_location_map.svg");
  HongKong.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/hk.html");
  HongKong.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_Hong_Kong");


  const SouthKorea = new Country("South Korea", "Republic of Korea", "Seoul", "Korean");
  SouthKorea.addAKA("ROK");
  SouthKorea.setwikiURI("https://en.wikipedia.org/wiki/South_Korea");

  SouthKorea.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/South_Korea_in_its_region.svg/640px-South_Korea_in_its_region.svg.png");
  SouthKorea.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:South_Korea_in_its_region.svg");

  SouthKorea.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/ks.html");
  SouthKorea.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_South_Korea");
  SouthKorea.addRefURI("plainCountryMapFile", "https://commons.wikimedia.org/wiki/File:South_Korea_location_map.svg");

  const NorthKorea = new Country("North Korea", "Democratic People's Republic of Korea", "Pyongyang", "Korean");
  NorthKorea.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/North_Korea_in_its_region.svg/640px-North_Korea_in_its_region.svg.png");
  NorthKorea.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:North_Korea_in_its_region.svg");
  NorthKorea.addRefURI("ciaFactBook", "https://www.cia.gov/library/publications/the-world-factbook/geos/kn.html");
  NorthKorea.addRefURI("geographyOf", "https://en.wikipedia.org/wiki/Geography_of_North_Korea");
  NorthKorea.addRefURI("plainCountryMapFile", "https://commons.wikimedia.org/wiki/File:North_Korea_location_map.svg");
