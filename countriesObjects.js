
    let countries = [];
    let latinAmericanCountries = [];
    let myCountry = "";


function anySpeakingCountry (name, officialName, capital, continent, language){
    this.name = name,
    this.officialName = officialName;
    this.capital = capital;
    this.continent = continent;
    this.language = language;
    this.languages = [language];
    this.cities = [capital];
}

function EnglishSpeakingCountries (name, officialName, capital, continent) {
    this.name = name; 
    this.officialName = officialName;
    this.capital = capital;
    this.continent = continent;
    this.region = continent;
    this.language = "English";
    this.languages = ["English"];
    this.cities = [capital];
}


function ArabSpeakingCountries(name, officialName, capital, continent){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    if (continent == undefined){
        this.continent = "Africa"
    } else {
        this.continent = continent;
    }
    this.continent = continent;
    this.language = "Arabic";
    this.languages = ["Arabic"];
    this.cities = [capital];
}


function FrenchSpeakingCountries(name, officialName, capital, continent){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    if (continent == undefined){
        this.continent = "Africa"
    } else {
        this.continent = continent;
    }
    this.language = "French";
    this.languages = ["French"];
    this.cities = [capital];
}


function SpanishSpeakingCountry(name, officialName, capital, continent){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    if (continent === undefined){
      this.continent = "America";
    } else {
      this.continent = continent;
    }
    this.language = "Spanish";
    if (this.continent === "America"){
      this.geoRegion = "Latin America";
      latinAmericanCountries.push({name:name});
    } 
    this.languages = ["Spanish"];
    this.cities = [capital];
  };


  function islandCountry(name, officialName, capital, continent, language, ocean, sea){
      this.name = name;
      this.officialName = officialName;
      this.capital = capital;
      this.continent = continent;
      this.language = language;
      this.languages = [language];
      this.island = true;
      this.ocean = ocean;
      if (sea !== undefined){
        this.sea = sea;
      }
      this.cities = [capital];
  };

  function antillesCountry(name, officialName, capital, language, specificRegion){
      this.name = name;
      this.officialName = officialName;
      this.capital = capital;
      this.language = language;
      this.languages = [language];
      this.island = true;
      this.ocean = "Atlantic";
      this.sea = "Caribean";
      this.region = "Antilles";
      this.continent = "America";
      if (specificRegion != undefined){
          this.specificRegion = specificRegion;
      }
      this.cities = [capital];
  };


  function OceaniaCountries(name, officialName, capital, language, specificRegion){
      this.name = name;
      this.officialName = officialName;
      this.capital = capital;
      this.island = true;
      this.ocean = "Pacific";
      this.language = language;
      this.languages = [language];
      this.continent = "Oceania";
      if (specificRegion !== undefined){
          this.specificRegion = specificRegion;
      }
      this.cities = [capital];
  };




  /* *****************************  COUNTRIES ***************************   */

  const Spain = new SpanishSpeakingCountry("España", "Reino de España", "Madrid", "Europe");
  //console.log(Spain);


  // ASIA


  const Cambodia = new anySpeakingCountry("Cambodia", "Kingdom of Cambodia", "Phnom Penh",  "Asia", "Khmer");
  Cambodia.nickname =["Kampuchea"];
  Cambodia.languages = [Cambodia.language, "French", "English"];
  Cambodia.region = "Southeast Asia";
  Cambodia.specificRegion = "Indochina Peninsula";
  Cambodia.wikiURI = "https://en.wikipedia.org/wiki/Cambodia";
  //countries.push(Cambodia);
  //console.log(Cambodia);
  
  Thailand.nickname =["Siam"];
  Thailand.languages = [Thailand.language, "Isan", "Kam Mueang", "Pak Tai"];


  const Turkmenistan = new anySpeakingCountry("Turkmenistan", "Republic of Turkmenistan", "Ashgabat", "Asia", "Turkmen");
  //console.log(Turkmenistan);
  //countries.unshift(Turkmenistan);

  Vietnam.cities = ["Ho Chi Minh City (Saigon)"];
  Indonesia.islands = ["Sumatra", "Java", "Borneo (Kalimantan)", "Sulawesi", "New Guinea (Papua)"];
 






  Singapore.languages = [Singapore.language, "Malay", "Chinese", "Tamil"];
  Singapore.sea = "South China Sea";
  Singapore.nickname = ["Pulau Ujong", "Temasek", "Singapura"];


  // AMERICA

  const Nicaragua = new SpanishSpeakingCountry("Nicaragua", "República de Nicaragua", "Managua", "America");
  Nicaragua.specificRegion = "Central America";
  Nicaragua.languages = [Nicaragua.language, "English", "Miskito", "Rama", "Sumo", "Miskito Coastal Creole", "Garifuna", "Rama", "Cay Creole"];
  //countries.unshift(Nicaragua);
  //console.log(Nicaragua);

const Honduras = new SpanishSpeakingCountry("Honduras", "República de Honduras", "Tegucigalpa", "America");
Honduras.region = "Central America";
Honduras.languages=[Honduras.language, "Garifuna","Miskito", "Mayangna", "Pech/Paya", "Tol", "Ch'orti' (Mayan)","Bay Islands Creole English"];
Honduras.countryMap ="https://i.postimg.cc/j5WNrF9D/Honduras-country-Map.png";
Honduras.wikiURI = "https://en.wikipedia.org/wiki/Honduras"
//console.log(Honduras);
//countries.unshift(Honduras);
//myCountry=Honduras;

const Belize = new EnglishSpeakingCountries("Belize", "Belize", "Belmopan", "America");
Belize.languages = [Belize.language, "Kriol", "Spanish", "Mayan languages","German", "Garifuna", "Chinese"];
Belize.region ="Central America";
Belize.countryMap = "https://i.postimg.cc/J42FVPqS/Belize-country-Map.png";
Belize.regionMap = "https://i.postimg.cc/W3qy4r1X/Belize-region-Map.png";
Belize.wikiURI="https://en.wikipedia.org/wiki/Belize";
//countries.unshift(Belize);
//console.log(Belize);
//myCountry = Belize;

const Guatemala = new SpanishSpeakingCountry("Guatemala", "República de Guatemala", "Guatemala City", "America");
Guatemala.region ="Central America";
Guatemala.countryMap ="https://i.postimg.cc/dtP4r6vK/Guatemala-country-Map.png";
Guatemala.regionMap = "https://i.postimg.cc/bvm2NyYv/Guatemala-region-Map.png";
Guatemala.wikiURI = "https://en.wikipedia.org/wiki/Guatemala";
//countries.unshift(Guatemala);
//console.log(Guatemala);
//myCountry = Guatemala;

const Panama = new SpanishSpeakingCountry("Panama", "República de Panamá", "Panama City", "America");
Panama.region = "Central America";
Panama.languages = [Panama.language, "English"];
Panama.countryMap = "https://i.postimg.cc/MpKjYyNT/Panama-country-Map.png";
Panama.regionMap = "https://i.postimg.cc/tgd3SXDR/Panama-Region.png";
Panama.wikiURI = "https://en.wikipedia.org/wiki/Panama";
Panama.URIs = [{
    SVG_locator : "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Panama_(location_map_scheme)",
    regionMap : "https://commons.wikimedia.org/wiki/File:Panama_in_its_region.svg",
}];
//countries.unshift(Panama);
//console.log(Panama);
//myCountry = Panama;


const CostaRica = new SpanishSpeakingCountry("Costa Rica", "República de Costa Rica", "San José", "America");
CostaRica.region = "Central America";
CostaRica.wikiURI = "https://en.wikipedia.org/wiki/Costa_Rica";
CostaRica.countryMap = "https://i.postimg.cc/3RVPNfF4/Costa-Rica-country-Map.png";
CostaRica.regionMap = "https://i.postimg.cc/mZd0PD8f/Costa-Rica-Region.png";
CostaRica.URIs = [{
    SVG_locator : "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Costa_Rica_(location_map_scheme)",
    regionMap : "https://commons.wikimedia.org/wiki/File:Costa_Rica_in_its_region.svg",
}];
//console.log(CostaRica);
//countries.unshift(CostaRica);
//myCountry = CostaRica;

const Mexico = new SpanishSpeakingCountry("México", "Estados Unidos Mexicanos", "Ciudad de México");
//console.log(Mexico);



const Cuba = new antillesCountry("Cuba", "República de Cuba", "Havana", "Spanish", "Greater Antilles");
Cuba.countryMap = "https://i.postimg.cc/L8ZB9v67/Cuba-country-map.png";
Cuba.regionMap = "https://i.postimg.cc/h42FF8jT/Cuba-region-Map.png";
Cuba.wikiURI = "https://en.wikipedia.org/wiki/Cuba";
Cuba.URIs = [{
    SVG_locator : "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Cuba_(location_map_scheme)",
}];
//console.log(Cuba);
//countries.unshift(Cuba);
//myCountry = Cuba;

const ElSalvador = new SpanishSpeakingCountry("El Salvador", "República de El Salvador", "San Salvador");
ElSalvador.languages = [ElSalvador.language, "Caliche","Nawat", "Maya"]
ElSalvador.region = "Central America";
ElSalvador.wikiURI ="https://en.wikipedia.org/wiki/El_Salvador";
ElSalvador.countryMap = "https://upload.wikimedia.org/wikipedia/commons/9/98/El_Salvador-CIA_WFB_Map.png";
ElSalvador.regionMap = "https://i.postimg.cc/C13ZX6cF/El-Salvador-Region.png";
ElSalvador.URIs = [{
    countryMapFile : "https://ca.wikipedia.org/wiki/Fitxer:El_Salvador-CIA_WFB_Map.png",

    locationMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/El_Salvador_-_Location_Map_%282013%29_-_SLV_-_UNOCHA.svg/480px-El_Salvador_-_Location_Map_%282013%29_-_SLV_-_UNOCHA.svg.png",
    locationMapFile : "https://en.wikipedia.org/wiki/File:El_Salvador_-_Location_Map_(2013)_-_SLV_-_UNOCHA.svg",
}];
//console.log(ElSalvador);
//countries.unshift(ElSalvador)
//myCountry = ElSalvador;

const Venezuela = new SpanishSpeakingCountry("Venezuela", "Bolivarian Republic of Venezuela", "Caracas");
Venezuela.nickname = ["República Bolivariana de Venezuela"],
Venezuela.region = "South America";
Venezuela.languages.push("Piapoco", "Baniwa", "Locono", "Wayúu", "Warao", "Pemón", "Panare", "Yek'uana", "Yukpa", "Carib", "Akawaio", "Japrería", "Mapoyo", "Yawarana", "Hodï", "Puinave", "Jivi", "Barí", "Uruak", "Sapé", "Pumé", "Piaroa", "Yanomamö", "Sanemá", "Yanam", "Yeral");
Venezuela.wikiURI = "https://en.wikipedia.org/wiki/Venezuela";
//console.log(Venezuela);
//countries.unshift(Venezuela);



const Suriname = new anySpeakingCountry("Suriname", "Republic of Suriname", "Paramaribo", "America", "Dutch");
Suriname.languages = [Suriname.language, "Sranan Tongo", "English", "Caribbean Hindustani", "Javanese", "Maroon", "Carib", "Arawak", "Hakka", "Cantonese"];
Suriname.region = "South America";
Suriname.countryMap = "https://i.postimg.cc/02XYvZ3R/Surinam-country-Map.png";
Suriname.wikiURI = "https://en.wikipedia.org/wiki/Suriname";
//countries.unshift(Suriname);
//console.log(Suriname);
//myCountry = Suriname;


const Paraguay = new SpanishSpeakingCountry("Paraguay", "Republic of Paraguay", "Asunción");
Paraguay.nickname= ["República del Paraguay"];
Paraguay.region = "South America";
Paraguay.landlocked = true;
Paraguay.cities.push("Ciudad del Este");
Paraguay.wikiURI = "https://en.wikipedia.org/wiki/Paraguay";
Paraguay.URIs = {

    countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Paraguay_-_Location_Map_%282012%29_-_PRY_-_UNOCHA.svg/480px-Paraguay_-_Location_Map_%282012%29_-_PRY_-_UNOCHA.svg.png",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Paraguay_-_Location_Map_(2012)_-_PRY_-_UNOCHA.svg",
};
Paraguay.countryMap = Paraguay.URIs.countryMap;
//console.log(Paraguay);
//myCountry = Paraguay;



const Peru = new SpanishSpeakingCountry("Peru", "República del Perú ", "Lima" );
Peru.region = "South America";
Peru.wikiURI = "https://en.wikipedia.org/wiki/Peru";
Peru.cities.push("Arequipa");
Peru.nickname = ["Piruw Republika (Quechua)", "Piruw Suyu (Aymara)"];
Peru.URIs = {
    countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Peru_-_Location_Map_%282011%29_-_PER_-_UNOCHA.svg/480px-Peru_-_Location_Map_%282011%29_-_PER_-_UNOCHA.svg.png",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Peru_-_Location_Map_(2011)_-_PER_-_UNOCHA.svg",
};
Peru.countryMap = Peru.URIs.countryMap;
//console.log(Peru);
//myCountry = Peru;


const Bolivia = new SpanishSpeakingCountry("Bolivia", "Plurinational State of Bolivia", "Sucre");
Bolivia.nickname = ["Estado Plurinacional de Bolivia"];
Bolivia.landlocked = true;
Bolivia.region = "South America";
Bolivia.cities.push("La Paz", "Santa Cruz de la Sierra");
Bolivia.languages.push(" Guarani", "Aymara", "Quechua");
Bolivia.wikiURI = "https://en.wikipedia.org/wiki/Bolivia";
Bolivia.URIs = {
    countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bolivia_-_Location_Map_%282011%29_-_BOL_-_UNOCHA.svg/480px-Bolivia_-_Location_Map_%282011%29_-_BOL_-_UNOCHA.svg.png",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Bolivia_-_Location_Map_(2011)_-_BOL_-_UNOCHA.svg",
};
Bolivia.countryMap = Bolivia.URIs.countryMap;
//console.log(Bolivia);
//myCountry = Bolivia;

const Ecuador = new SpanishSpeakingCountry("Ecuador", "Republic of Ecuador", "Quito");
Ecuador.nickname = ["República del Ecuador", "Ikwadur Ripuwlika (Quechua)", "Ekuatur Nunka (Shuar)"];
Ecuador.region = "South America";
Ecuador.languages.push("Quechua", "Shuar");
Ecuador.wikiURI = "https://en.wikipedia.org/wiki/Ecuador";
Ecuador.URIs = {
    countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ecuador_-_Location_Map_%282013%29_-_ECU_-_UNOCHA.svg/480px-Ecuador_-_Location_Map_%282013%29_-_ECU_-_UNOCHA.svg.png",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Ecuador_-_Location_Map_(2013)_-_ECU_-_UNOCHA.svg",
};
Ecuador.countryMap = Ecuador.URIs.countryMap;
//console.log(Ecuador);
//myCountry = Ecuador;



const Uruguay = new SpanishSpeakingCountry("Uruguay", "República Oriental del Uruguay", "Montevideo");
Uruguay.nickname = ["República Oriental del Uruguay"];
Uruguay.region = "South America";
Uruguay.wikiURI = "https://en.wikipedia.org/wiki/Uruguay";
Uruguay.URIs = {
    countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Uruguay_-_Location_Map_%282013%29_-_URY_-_UNOCHA.svg/480px-Uruguay_-_Location_Map_%282013%29_-_URY_-_UNOCHA.svg.png",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Uruguay_-_Location_Map_(2013)_-_URY_-_UNOCHA.svg",
};
Uruguay.countryMap = Uruguay.URIs.countryMap;
//console.log(Uruguay);

const Colombia = new SpanishSpeakingCountry("Colombia", "República de Colombia", "Bogotá");
Colombia.wikiURI = "https://en.wikipedia.org/wiki/Colombia";
Colombia.cities.push("Cartagena", "Medellín", "Barranquilla", "Cali");
Colombia.region = "South America";
Colombia.URIs = {
    countryMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Colombia_-_Location_Map_%282013%29_-_COL_-_UNOCHA.svg/480px-Colombia_-_Location_Map_%282013%29_-_COL_-_UNOCHA.svg.png",
    countryMapFile: "https://en.wikipedia.org/wiki/File:Colombia_-_Location_Map_(2013)_-_COL_-_UNOCHA.svg",
};
Colombia.countryMap = Colombia.URIs.countryMap;
//console.log(Colombia);
//myCountry = Colombia;

const Brazil = new anySpeakingCountry("Brazil", "Federative Republic of Brazil", "Brasilia", "America", "Portuguese" );
Brazil.geoRegion = "Latin America";
Brazil.region = "South America";
Brazil.cities.push("Sao Paulo");
Brazil.languages.push("Tucano", "Nheengatu", "Baniwa");
Brazil.wikiURI = "https://en.wikipedia.org/wiki/Brazil";


const Chile = new SpanishSpeakingCountry("Chile", "República de Chile", "Santiago");
//console.log(Chile);
Chile.region = "South America";
Chile.wikiURI = "https://en.wikipedia.org/wiki/Chile";

const UnitedStates = new EnglishSpeakingCountries("United States", "United States of America", "Washington, D.C.", "America");
UnitedStates.region = "North America";
UnitedStates.wikiURI = "https://en.wikipedia.org/wiki/United_States";

const FrenchGuiana = new FrenchSpeakingCountries("French Guiana", "Department of French Guiana", "Cayenne", "America");
FrenchGuiana.region = "South America";
FrenchGuiana.territory = true;
FrenchGuiana.wikiURI = "https://en.wikipedia.org/wiki/French_Guiana";


const Guyana = new anySpeakingCountry("Guyana", "Co-operative Republic of Guyana", "Georgetown", "America", "English");
Guyana.languages.push("Guyanese Creole", "Akawaio", "Macushi", "Waiwai", "Arawak (Lokono)", "Patamona", "Warrau", "Carib", "Wapishana", "Pemon (Arekuna)", "Mawayana");
Guyana.region = "South America";
Guyana.geoRegion = "Anglophone-Caribbean";
Guyana.wikiURI = "https://en.wikipedia.org/wiki/Guyana";
Guyana.URIs = {
    countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Guyana_-_Location_Map_%282013%29_-_GUY_-_UNOCHA.svg/480px-Guyana_-_Location_Map_%282013%29_-_GUY_-_UNOCHA.svg.png",
    countryMapFile : "https://en.wikipedia.org/wiki/File:Guyana_-_Location_Map_(2013)_-_GUY_-_UNOCHA.svg",
};
Guyana.countryMap = Guyana.URIs.countryMap;
//myCountry = Guyana;

const Canada = new anySpeakingCountry("Canada", "Canada", "	Ottawa", "America", "English");
Canada.languages.push("French");
Canada.region = "North America";
Canada.cities.push("Toronto", "Quebec City");
Canada.wikiURI = "https://en.wikipedia.org/wiki/Canada";

const Jamaica = new antillesCountry("Jamaica", "Jamaica", "Kingston", "English", "Greater Antilles");
Jamaica.languages = [Jamaica.language, "Jamaican Patois"];
Jamaica.wikiURI = "https://en.wikipedia.org/wiki/Jamaica";
Jamaica.regionMap = "https://i.postimg.cc/8CpxdKH0/Jamaica-Region.png";
Jamaica.countryMap = "https://upload.wikimedia.org/wikipedia/commons/d/dd/Jm-map.png";
Jamaica.URIs = [{
    SVG_locator: "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Jamaica_(location_map_scheme)",

    regionMapFile: "https://commons.wikimedia.org/wiki/File:Jamaica_in_its_region.svg",
    
    locationMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jamaica_-_Location_Map_%282013%29_-_JAM_-_UNOCHA.svg/480px-Jamaica_-_Location_Map_%282013%29_-_JAM_-_UNOCHA.svg.png",
    locationMapFile: "https://en.wikipedia.org/wiki/File:Jamaica_-_Location_Map_(2013)_-_JAM_-_UNOCHA.svg",
}];
//console.log(Jamaica);
//countries.unshift(Jamaica);
//myCountry = Jamaica;

const DominicanRepublic = new antillesCountry("Dominican Republic", "República Dominicana", "Santo Domingo", "Spanish", "Greater Antilles");
//console.log(DominicanRepublic);
//countries.unshift(DominicanRepublic);

const Haiti = new antillesCountry("Haiti", "Republic of Haiti", "Port-au-Prince", "French", "Greater Antilles");
Haiti.languages= [Haiti.language, "Haitian Creole"];
Haiti.wikiURI = "https://en.wikipedia.org/wiki/Haiti";
Haiti.countryMap = "https://upload.wikimedia.org/wikipedia/commons/1/14/Haiti_map.png";
Haiti.regionMap = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/LocationHaiti.svg/640px-LocationHaiti.svg.png";
Haiti.atlasURI = "https://commons.wikimedia.org/wiki/Atlas_of_Haiti";
Haiti.URIs = [{
    countryMapFile : "https://nn.wikipedia.org/wiki/Fil:Haiti_map.png",
    regionMapFile : "https://nn.wikipedia.org/wiki/Fil:LocationHaiti.svg",
    locationMapFile : "https://en.wikipedia.org/wiki/File:Haiti_-_Location_Map_(2013)_-_HTI_-_UNOCHA.svg",
    locationMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Haiti_-_Location_Map_%282013%29_-_HTI_-_UNOCHA.svg/480px-Haiti_-_Location_Map_%282013%29_-_HTI_-_UNOCHA.svg.png",

}];
//console.log(Haiti);
//countries.unshift(Haiti);
//myCountry = Haiti;

const PuertoRico = new antillesCountry("Puerto Rico", "Commonwealth of Puerto Rico", "San Juan", "Spanish", "Greater Antilles");
PuertoRico.territory = "United States of America";
PuertoRico.languages.push("English");
PuertoRico.nickname = ["Porto Rico", "PR", "Estado Libre Asociado de Puerto Rico"];
PuertoRico.wikiURI = "https://en.wikipedia.org/wiki/Puerto_Rico";
PuertoRico.URIs = {
    SVG_locator: "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Puerto_Rico_(location_map_scheme)",

    locationMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Puerto_Rico_in_its_region.svg/640px-Puerto_Rico_in_its_region.svg.png",
    locationMapFile : "https://commons.wikimedia.org/wiki/File:Puerto_Rico_in_its_region.svg",

    countryMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Puerto_Rico_-_Location_Map_%282013%29_-_PRI_-_UNOCHA.svg/480px-Puerto_Rico_-_Location_Map_%282013%29_-_PRI_-_UNOCHA.svg.png",
    countryMapFile: "https://en.wikipedia.org/wiki/File:Puerto_Rico_-_Location_Map_(2013)_-_PRI_-_UNOCHA.svg",

    worldMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Puerto_Rico_on_the_globe_%28Caribbean_special%29_%28Americas_centered%29.svg/480px-Puerto_Rico_on_the_globe_%28Caribbean_special%29_%28Americas_centered%29.svg.png",
    worldMapFile: "https://de.wikipedia.org/wiki/Datei:Puerto_Rico_on_the_globe_(Caribbean_special)_(Americas_centered).svg",

    wikimediaAtlas: "https://commons.wikimedia.org/wiki/Atlas_of_Puerto_Rico",
};
PuertoRico.regionMap = PuertoRico.URIs.locationMap;
PuertoRico.countryMap = PuertoRico.URIs.countryMap;
//console.log(PuertoRico);
//countries.unshift(PuertoRico);
//myCountry = PuertoRico;




  // AFRICA



  

  const Madagascar = new islandCountry("Madagascar", "Republic of Madagascar", "Antananarivo", "Africa", "Malagasy", "Indian", "Mozambique Channel");
  Madagascar.languages.push("French");
  Madagascar.region = "East Africa";
  Madagascar.wikiURI = "https://en.wikipedia.org/wiki/Madagascar";

  const Angola = new anySpeakingCountry("Angola", "Republic of Angola", "Luanda", "Africa", "Portuguese");
  Angola.region = "Southern Africa";
  Angola.languages.push("Chokwe","Kikongo","Kimbundu","Umbundu");
  Angola.wikiURI = "https://en.wikipedia.org/wiki/Angola";

  const BurkinaFasso = new FrenchSpeakingCountries("Burkina Fasso", "Republic of Burkina Faso", "Ouagadougou", "Africa");
  BurkinaFasso.languages.push("Mossi", "Mòoré","Fula","Dioula");
  BurkinaFasso.landlocked = true;
  BurkinaFasso.nickname =["Republic of Upper Volta "];
  BurkinaFasso.region = "West Africa";
  BurkinaFasso.wikiURI="https://en.wikipedia.org/wiki/Burkina_Faso";
  BurkinaFasso.URIs = {
      SVG_locator: "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Burkina_Faso_(location_map_scheme)",

      locationMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Burkina_Faso_in_its_region.svg/320px-Burkina_Faso_in_its_region.svg.png",
      locationMapFile: "https://commons.wikimedia.org/wiki/File:Burkina_Faso_in_its_region.svg",
  };
  BurkinaFasso.regionMap = BurkinaFasso.URIs.locationMap;
  //myCountry = BurkinaFasso;

  const Burundi = new anySpeakingCountry("Burundi", "Republic of Burundi", "Gitega", "Africa", "Kirundi");
  Burundi.languages.push("French", "English");
  Burundi.cities.push("Bujumbura");
  Burundi.specificRegion = "Great Rift Valley";
  Burundi.landlocked = true;
  Burundi.wikiURI = "https://en.wikipedia.org/wiki/Burundi";
  Burundi.URIs={
      SVG_locator: "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Burundi_(location_map_scheme)",
  };
  //myCountry=Burundi;



  const Algeria = new ArabSpeakingCountries("Algeria", "People's Democratic Republic of Algeria", "Algiers", "Africa");
  Algeria.specificRegion = "Maghreb";
  Algeria.region = "North Africa";
  Algeria.languages.push("Darja","Berber", "French");
  Algeria.wikiURI = "https://en.wikipedia.org/wiki/Algeria";
  Algeria.URIs = {
      SVG_locator : "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Algeria_(location_map_scheme)",
      regionMapFile : "https://commons.wikimedia.org/wiki/File:Algeria_in_its_region.svg",
      locationMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Algeria_-_Location_Map_%282013%29_-_DZA_-_UNOCHA.svg/480px-Algeria_-_Location_Map_%282013%29_-_DZA_-_UNOCHA.svg.png",
      locationMapFile : "https://en.wikipedia.org/wiki/File:Algeria_-_Location_Map_(2013)_-_DZA_-_UNOCHA.svg",    
  };
  //myCountry = Algeria;


  const SaoTome = new islandCountry("São Tomé and Príncipe", "Democratic Republic of  São Tomé and Príncipe", "São Tomé", "Africa", "Portuguese", "Atlantic", "Gulf of Guinea" );
  SaoTome.languages.push("Forro", "Angolar", "Principense");
  SaoTome.islands= ("São Tomé ", "Príncipe");
  SaoTome.region = "Central Africa";
  SaoTome.wikiURI = "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe";
  //myCountry = SaoTome;

  const Eswatini = new anySpeakingCountry("Eswatini", "Kingdom of Eswatini", "Mbabane", "Africa", "Swazi");
  Eswatini.nickname = ["Swaziland"];
  Eswatini.languages.push("English");
  Eswatini.cities =[Eswatini.capital, "Lobamba"];
  Eswatini.landlocked = true;
  Eswatini.region = "Southern Africa";
  Eswatini.wikiURI = "https://en.wikipedia.org/wiki/Eswatini";


  const CentralAfrica = new FrenchSpeakingCountries("Central African Republic", "Central African Republic", "Bangui", "Africa");
  CentralAfrica.region = "Central Africa";
  CentralAfrica.landlocked = true;
  CentralAfrica.nickname = ["CAR"];
  CentralAfrica.languages.push("Sango");
  CentralAfrica.wikiURI = "https://en.wikipedia.org/wiki/Central_African_Republic";

  const Comoros = new islandCountry("Comoros", "Union of the Comoros", "Moroni", "Africa", "Comorian", "Indian");
  Comoros.languages.push("French", "Arabic");
  Comoros.islands = ["Grande Comore (Ngazidja)", "Mohéli (Mwali)", "Anjouan (Nzwani)"];
  Comoros.wikiURI = "https://en.wikipedia.org/wiki/Comoros";
  //myCountry = Comoros;

  const CongoBrazaville = new FrenchSpeakingCountries("Congo Republic", "Republic of the Congo", "Brazzaville", "Africa");
  CongoBrazaville.nickname = ["Congo-Brazzaville", "RotC", "Congo"];
  CongoBrazaville.languages.push("Kituba", "Kikongo", "Lingala");
  CongoBrazaville.region = "Central Africa";
  CongoBrazaville.wikiURI = "https://en.wikipedia.org/wiki/Republic_of_the_Congo";

  const CongoKinshasa = new FrenchSpeakingCountries("Democratic Republic of the Congo", "Democratic Republic of the Congo", "Kinshasa", "Africa");
  CongoKinshasa.nickname = ["DR Congo", "DRC", "DROC", "Congo-Kinshasa", "Congo", "Zaire"];
  CongoKinshasa.region = "Central Africa";
  CongoKinshasa.wikiURI = "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo";

  const Ethiopia = new anySpeakingCountry("Ethiopia", "Federal Democratic Republic of Ethiopia", "Addis Ababa", "Africa", "Oromo");
  Ethiopia.languages.push("Amharic", "Somali", "Tigrinya", "Sidamo", "Wolaytta", "Gurage", "Afar", "Hadiyya", "Gamo-Gofa-Dawro");
  Ethiopia.landlocked = true;
  Ethiopia.specificRegion = "Horn of Africa";
  Ethiopia.wikiURI = "https://en.wikipedia.org/wiki/Ethiopia";
  //myCountry = Ethiopia;

  const Somalia = new anySpeakingCountry("Somalia", "Federal Republic of Somalia", "Mogadishu", "Africa","Somali");
  Somalia.languages.push("Arabic");
  Somalia.specificRegion = "Horn of Africa";
  Somalia.wikiURI = "https://en.wikipedia.org/wiki/Somalia";

  const Sudan = new ArabSpeakingCountries("Sudan", "Republic of the Sudan", "Khartoum", "Africa");
  Sudan.cities = [Sudan.capital, "Omdurman"];
  Sudan.region = "Nordeast Africa";
  Sudan.wikiURI = "https://en.wikipedia.org/wiki/Sudan";

  const SouthSudan = new EnglishSpeakingCountries("South Sudan", "Republic of South Sudan", "Juba", "Africa");
  SouthSudan.region = "East-Central Africa";
  SouthSudan.landlocked;
  SouthSudan.languages.push("Bari", "Shilluk", "Jur (Luo)", "Murle", "Nuer", "Zande");
  SouthSudan.wikiURI = "https://en.wikipedia.org/wiki/South_Sudan";

  const Tanzania = new anySpeakingCountry("Tanzania", "United Republic of Tanzania", "Dodoma", "Africa", "Swahili");
  Tanzania.languages.push("English", "Arabic (Zanzibar)");
  Tanzania.region = "East Africa";
  Tanzania.specificRegion = "African Great Lakes";
  Tanzania.wikiURI = "https://en.wikipedia.org/wiki/Tanzania";

  const Tunisia = new ArabSpeakingCountries("Tunisia", "Republic of Tunisia", "Tunis", "Africa");
  Tunisia.languages.push("Berber", "French");
  Tunisia.region = "North Africa";
  Tunisia.specificRegion = "Maghreb";
  Tunisia.wikiURI = "https://en.wikipedia.org/wiki/Tunisia";
  //myCountry = Tunisia;

  const Zimbabwe = new EnglishSpeakingCountries("Zimbabwe", "Republic of Zimbabwe", "Harare", "Africa");
  Zimbabwe.nickname = ["Rhodesia"];
  Zimbabwe.region = "Southern Africa";
  Zimbabwe.landlocked = true;
  Zimbabwe.cities = [Zimbabwe.capital, "Bulawayo"];
  Zimbabwe.wikiURI = "https://en.wikipedia.org/wiki/Zimbabwe";
  Zimbabwe.languages.push("Shona", "Ndebele",  "Venda", "Tsonga", "Shangaan", "Kalanga", "Sotho", "Ndau", "Nambya");

  const Nigeria = new EnglishSpeakingCountries("Nigeria", "Federal Republic of Nigeria", "Abuja", "Africa");
  Nigeria.region = "West Africa";
  Nigeria.cities = [Nigeria.capital, "Lagos"];
  Nigeria.languages.push("Hausa", "Igbo", "Yoruba");
  Nigeria.wikiURI = "https://en.wikipedia.org/wiki/Nigeria";

  const Lesotho = new anySpeakingCountry("Lesotho", "Kingdom of Lesotho", "Maseru", "Africa", "Sesotho");
  Lesotho.languages.push("English");
  Lesotho.landlocked = true;
  Lesotho.enclaved = true;
  Lesotho.wikiURI = "https://en.wikipedia.org/wiki/Lesotho";

  const Uganda = new EnglishSpeakingCountries("Uganda", "Republic of Uganda", "Kampala", "Africa");
  Uganda.languages.push("Swahili");
  Uganda.region = "East-Central Africa"
  Uganda.landlocked = true;
  Uganda.wikiURI = "https://en.wikipedia.org/wiki/Uganda";

  const SierraLeone = new EnglishSpeakingCountries("Sierra Leone", "Republic of Sierra Leone", "Freetown", "Africa");
  //console.log(SierraLeone);
  //countries.push(SierraLeone);

  const Djibouti = new anySpeakingCountry("Dibouti", "Republic of Djibouti", "Djibouti", "Africa", "Somali");
  Djibouti.languages = ["Somali", "Afar", "Arabic", "French"];
  Djibouti.region = "East Africa";
  Djibouti.specificRegion = "Horn of Africa";
  //console.log(Djibouti);
  //countries.push(Djibouti);

  const Rwanda = new anySpeakingCountry("Rwanda", "Republic of Rwanda", "Kigali", "Africa", "Kinyarwanda");
  Rwanda.languages = ["Kinyarwanda","English","French","Swahili"];
  Rwanda.landlocked = true;
  Rwanda.specificRegion = "Great Rift Valley"
  //console.log(Rwanda);
  //countries.push(Rwanda);

  const Chad = new ArabSpeakingCountries("Chad", "Republic of Chad", "N'Djamena", "Africa");
  Chad.languages. push("French");
  Chad.landlocked = true;
  Chad.region = "North Central Africa";
  Chad.wikiURI = "https://en.wikipedia.org/wiki/Chad";
  //console.log(Chad);
  //countries.push(Chad);
  //myCountry = Chad;

  const SouthAfrica = new EnglishSpeakingCountries("South Africa", "Republic of South Africa", "Pretoria", "Africa");
  SouthAfrica.cities = [SouthAfrica.capital, "Johannesburg","Cape Town", "Bloemfontein"];
  SouthAfrica.languages.push("Afrikaans", "Zulu", "Xhosa", "Northern Sotho", "Tswana", "Southern Sotho", "Tsonga", "Swazi", "Venda", "Southern Ndebele");
  SouthAfrica.region = "Southern Africa";
  SouthAfrica.wikiURI = "https://en.wikipedia.org/wiki/South_Africa";


  const Morocco = new ArabSpeakingCountries("Morocco", "Kingdom of Morocco", "Rabat", "Africa");
  Morocco.cities = ["Casablanca"];
  Morocco.languages = [Morocco.language, "French"];
  Morocco.region = "North Africa";
  Morocco.specificRegion = "Maghreb";
  //console.log(Morocco);
  //countries.push(Morocco);

  const Gambia = new anySpeakingCountry("The Gambia","Republic of The Gambia" ,"Banjul", "Africa","Mandinka");
  Gambia.languages = [Gambia.language, "English", "Fula","Wolof","Serer","Jola"];
  Gambia.region = "Western Africa";
  Gambia.nickname = "The Smiling Coast";
  Gambia.cities = ["Serekunda", "Brikama"];
  //console.log(Gambia);
  //countries.push(Gambia);

  const Seychelles = new islandCountry("Seychelles", "Republic of Seychelles", "Victoria", "Africa", "English", "Indian", "Somali");
  Seychelles.languages.push("French", "Seychellois Creole");
  Seychelles.islands = ["Mahé","Praslin", "La Digue"];
  Seychelles.wikiURI = "https://en.wikipedia.org/wiki/Seychelles";
  //myCountry = Seychelles;
  
   const EquatorialGuinea = new SpanishSpeakingCountry("Guinea Ecuatorial", "República de Guinea Ecuatorial", "Malabo", "Africa");
   //console.log(EquatorialGuinea);
   //countries.unshift(EquatorialGuinea);

    const Gabon = new FrenchSpeakingCountries("Gabon", "Gabonese Republic", "Libreville", "Africa");
    Gabon.languages = [Gabon.language, "Fang", "Myene", "Punu", "Nzebi"];
    Gabon.region = "Central Africa";
    //console.log(Gabon);
    //countries.unshift(Gabon);

    const Ghana = new EnglishSpeakingCountries("Ghana", "Republic of Ghana", "Accra", "Africa");
    Ghana.languages = [Ghana.language, "Akran", "Ga", "Akan", "Asante Twi", "Akuapem Twi","Fante", "Nzema", "Dagaare", "Dagbanli", "Ewe", "Dangme", "Guan", "Kasem"];
    Ghana.region = "West Africa";
    Ghana.specificRegion = "West African Coast";
    //countries.unshift(Ghana);
    //console.log(Ghana);

    const Liberia = new EnglishSpeakingCountries("Liberia", "Republic of Liberia", "Monrovia", "Africa");
    Liberia.region = "West Africa";
    Liberia.specificRegion = "West African Coast";
    //countries.unshift(Liberia);
    //console.log(Liberia);

    const Libya = new ArabSpeakingCountries("Libya", "State of Libya", "Tripoli", "Africa");
    Libya.region = "North Africa";
    Libya.specificRegion = "Maghreb";
    Libya.languages = [Libya.language ,"Berber"];
    //countries.unshift(Libya);
    //console.log(Libya);

    const Malawi = new EnglishSpeakingCountries("Malawi", "Republic of Malawi","Lilongwe", "Africa");
    Malawi.landlocked = true;
    Malawi.region = "Southeastern Africa";
    Malawi.languages = [Malawi.language, "Chewa"];
    //countries.unshift(Malawi);
    //console.log(Malawi);

    const Mali = new FrenchSpeakingCountries("Mali", "Republic of Mali", "Bamako", "Africa");
    Mali.landlocked = true;
    Mali.languages = [Mali.language, "Bambara"];
    Mali.region = "West Africa";

    const Mauritania = new ArabSpeakingCountries("Mauritania", " Islamic Republic of Mauritania", "Nouakchott", "Africa");
    Mauritania.language = [Mauritania.language, "Hassaniya Arabic", "Pulaar", "Soninke", "Wolof", "French"];
    Mauritania.region = "Northwest Africa";
    //countries.unshift(Mauritania);
    //console.log(Mauritania);

    const Namibia = new EnglishSpeakingCountries("Namibia", "Republic of Namibia", "Windhoek", "Africa");
    Namibia.languages = [Namibia.language, "Oshiwambo", "Khoekhoegowab", "Afrikaans","Otjiherero", "RuKwangali", "siLozi", "German", "San", "Setswana"];
    Namibia.region = "Southern Africa";
    //countries.unshift(Namibia);
    //console.log(Namibia);

    const Niger = new FrenchSpeakingCountries("Niger", "Republic of the Niger", "Niamey", "Africa");
    Niger.languages = [Niger.language, "Arabic", "Buduma", "Fulfulde", "Gourmanchéma", "HausaKanuri", "Zarma", "Songhai", "Tamasheq", "Tassawaq", "Tebu"];
    Niger.landlocked = true;
    Niger.region = "West Africa";
    //countries.unshift(Niger);
    //console.log(Niger);

    const Cameroon = new FrenchSpeakingCountries("Cameroon", "République du Cameroun", "Yaoundé")
    Cameroon.languages = ["English", "Cameroonian Pidgin","Fula","Ewondo", "Camfranglais"];
    Cameroon.region = "Central Africa";
    //console.log(Cameroon);
    //countries.unshift(Cameroon);

    const Zambia = new EnglishSpeakingCountries("Zambia", "Republic of Zambia", "Lusaka", "Africa");
    Zambia.languages = [Zambia.language, "Bemba", "Nyanja", "Tonga", "Lozi", "Chewa", "Nsenga", "Tumbuka", "Lunda"];
    Zambia.region = "Southern Central Africa";
    Zambia.landlocked = true;
    //countries.unshift(Zambia);
    //console.log(Zambia);

    const Senegal = new FrenchSpeakingCountries("Senegal", "Republic of Senegal", "Dakar", "Africa");
    Senegal.languages.push("Wolof");
    Senegal.region = "West Africa";
    Senegal.wikiURI = "https://en.wikipedia.org/wiki/Senegal";

    

  // Islands


    // African Islands

    const Mauritius = new islandCountry("Mauritius", "Republic of Mauritius", "Port Louis", "Africa", "English", "Indian");
    Mauritius.islands = ["Mauritius", "Rodrigues", "Agaléga", "St. Brandon"];
    Mauritius.languages = [Mauritius.language, "Creole", "Bhojpuri", "French"];
    //console.log(Mauritius);
    //countries.unshift(Mauritius);

    const CapeVerde = new anySpeakingCountry("Cape Verde", "República de Cabo Verde", "Praia", "Africa", "Portuguese");
    CapeVerde.languages = [CapeVerde.language, "Cape Verdean Creole"];
    CapeVerde.island = true;
    CapeVerde.ocean = "Atlantic";
    CapeVerde.region = "Macaronesia";
    //console.log(Cape_Verde);
    //countries.unshift(CapeVerde);




    // American Islands

    const CaymanIslands = new antillesCountry("Cayman Islands", "Cayman Islands", "George Town", "English", "Greater Antilles");
    CaymanIslands.territory = "United Kingdom";
    CaymanIslands.islands = ["Grand Cayman", "Cayman Brac", "Little Cayman,"];
    //console.log(CaymanIslands);
    //countries.unshift(CaymanIslands);


    const Aruba = new EnglishSpeakingCountries("Aruba", "Aruba", "Oranjestad", "America");
    Aruba.language = "Dutch";
    Aruba.island = true;
    Aruba.territory = "Neatherlands";
    Aruba.ocean = "Atlantic";
    Aruba.sea = "Caribean";
    Aruba.specificRegion = "Lesser Antilles";
    //console.log(Aruba);
    //countries.unshift(Aruba);

    const SaintLucia = new islandCountry("Saint Lucia", "Saint Lucia", "Castries", "America", "English", "Atlantic", "Caribean");
    SaintLucia.specificRegion ="Lesser Antilles";
    SaintLucia.region = "Antilles";
    //console.log(SaintLucia);
    //countries.unshift(SaintLucia);

    const Grenada = new EnglishSpeakingCountries("Grenada", "Grenada","St. George's", "America")
    Grenada.region="Antillas";
    Grenada.specificRegion = "Lesser Antilles";
    Grenada.island = true;
    Grenada.islands = ["Carriacou", "Petite Martinique", "Ronde Island", "Caille Island", "Diamond Island", "Large Island", "Saline Island", "Frigate Island"];
    Grenada.ocean = "Atlantic";
    Grenada.sea = "Caribean";
    Grenada.languages = [Grenada.language, "Grenadian Creole English", "Grenadian Creole French"];
    //console.log(Grenada);
    //countries.unshift(Grenada);

    const AntiguaandBarbuda = new EnglishSpeakingCountries("Antigua and Barbuda", "Antigua and Barbuda", "St. John's", "America");
    AntiguaandBarbuda.region = "Antillas"
    AntiguaandBarbuda.specificRegion = "Lesser Antilles";
    AntiguaandBarbuda.island = true;
    AntiguaandBarbuda.islands = ["Antigua","Barbuda"," Great Bird", "Green Island", "Guiana Island", "Long Island", "Maiden Island", "Prickly Pear", "York Island", "Redonda"];
    AntiguaandBarbuda.ocean = "Atlantic";
    AntiguaandBarbuda.sea = "Caribean";
    AntiguaandBarbuda.languages = [AntiguaandBarbuda.language, "Creole"];
    //console.log(AntiguaandBarbuda);
    //countries.unshift(AntiguaandBarbuda);

    const Bahamas = new antillesCountry("The Bahamas", "Commonwealth of The Bahamas", "Nassau", "English");
    Bahamas.languages = [Bahamas.language, "Bahamian Creole"];
    //console.log(Bahamas);
    //countries.unshift(Bahamas);

    const TrinidadandTobago = new islandCountry("Trinidad and Tobago", "Republic of Trinidad and Tobago", "Port of Spain", "America", "English", "Atlantic", "Caribean");
    TrinidadandTobago.cities = ["Chaguanas"];
    TrinidadandTobago.islands = ["Trinidad", "Tobago", "Monos", "Huevos", "Gaspar Grande (Gasparee)", "Little Tobago", "St. Giles Island"];
    TrinidadandTobago.specificRegion = "Lesser Antilles";
    //console.log(TrinidadandTobago);
    //countries.unshift(TrinidadandTobago);

    const Barbados = new antillesCountry("Barbados", "Barbados", "Bridgetown", "English", "Lesser Antilles");
    Barbados.languages= [Barbados.language, "Bajan Creole"];
    //console.log(Barbados);
    //countries.unshift(Barbados);

    const Dominica = new antillesCountry("Dominica", "Commonwealth of Dominica", "Roseau", "English", "Lesser Antilles");
    Dominica.languages = [Dominica.language, "Dominican Creole", "French"];
    //console.log(Dominica);    
    //countries.unshift(Dominica);

    const SaintKitts = new antillesCountry("Saint Kitts and Nevis", "Federation of Saint Christopher and Nevis", "Basseterre", "English", "Lesser Antilles");
    SaintKitts.cities = [SaintKitts.capital, "Charlestown"];
    SaintKitts.languages = [SaintKitts.language, "Saint Kitts Creole"];
    SaintKitts.islands = ["Saint Kitts", "Nevis"];
    //console.log(SaintKitts);
    //countries.unshift(SaintKitts);

    const SaintVincentGrenadines = new antillesCountry("Saint Vincent and the Grenadines", "Saint Vincent and the Grenadines", "Kingstown", "English", "Lesser Antilles");
    SaintVincentGrenadines.islands = ["Saint Vincent", "Young Island", "Bequia", "Mustique", "Canouan", "Union Island", "Mayreau", "Petit St Vincent", "Palm Island", "Petit Nevis", "Petit Mustique"];
    SaintVincentGrenadines.languages = [SaintVincentGrenadines.language, "Vincentian Creole"];
    //console.log(SaintVincentGrenadines);
    //countries.unshift(SaintVincentGrenadines);

    const Anguilla = new antillesCountry("Anguilla", "Anguilla", "The Valley", "English", "Lesser Antilles");
    Anguilla.territory = "United Kingdom";
    //console.log(Anguilla);
    //countries.unshift(Anguilla);

    const Bonaire = new antillesCountry("Bonaire", "Bonaire", "Kralendijk", "Dutch", "Lesser Antilles");
    Bonaire.territory = "Neatherlands";
    Bonaire.languages = [Bonaire.language, "Papiamento"];
    //console.log(Bonaire);
    //countries.unshift(Bonaire);

    const VirginIslandsUK = new antillesCountry("Virgin Islands", "British Virgin Islands", "Road Town", "English", "Lesser Antilles" );
    VirginIslandsUK.territory = "United Kingdom";
    //console.log(VirginIslandsUK);
    //countries.unshift(VirginIslandsUK);

    const VirginIslandsUSA = new antillesCountry("Virgin Islands", "Virgin Islands of the United States", "Charlotte Amalie", "English", "Lesser Antilles");
    VirginIslandsUSA.territory = "United States of America";
    VirginIslandsUSA.languages = [VirginIslandsUSA.language, "Virgin Islands Creole English"];
    VirginIslandsUSA.nickname = ["U.S. Virgin Islands", "American Virgin Islands"];
    //console.log(VirginIslandsUSA);
    //countries.unshift(VirginIslandsUSA);

    const Curacao = new antillesCountry("Curaçao", "Curaçao", "Willemstad", "Dutch", "Lesser Antilles");
    Curacao.territory = "Neatherlands";
    Curacao.languages = [Curacao.language, "Papiamento", "English"];
    //console.log(Curacao);
    //countries.unshift(Curacao);

    const Guadeloupe = new antillesCountry("Guadeloupe", "Département d’Outre-Mer de la Guadeloupe", "Basse-Terre", "French", "Lesser Antilles");
    Guadeloupe.islands = ["Basse-Terre", "Grande-Terre", "Marie-Galante", "La Désirade","Îles des Saintes"];
    Guadeloupe.territory = "France";
    Guadeloupe.languages = [Guadeloupe.language ,"Guadeloupean Creole", "Antillean Creole"];
    //console.log(Guadeloupe);
    //countries.unshift(Guadeloupe);

    const Martinique = new antillesCountry("Martinique", "Martinique", "Fort-de-France", "French", "Lesser Antilles");
    Martinique.territory = "France";
    Martinique.languages = [Martinique.language, "Antillean Creole", "Créole Martiniquais"];
    Martinique.territory = "United Kingdom";
    //console.log(Martinique);
    //countries.unshift(Martinique);

    const Montserrat = new antillesCountry("Montserrat", "Montserrat", "Plymouth", "English", "Lesser Antilles");
    Montserrat.territory = "United Kingdom";
    Montserrat.cities = [Montserrat.capital, "Brades", "Little Bay"];
    //console.log(Montserrat);
    //countries.unshift(Montserrat);

    const Saba = new antillesCountry("Saba", "Saba", "The Bottom", "Dutch", "Lesser Antilles");
    Saba.languages =  [Saba.language, "English"];
    Saba.territory = "Neatherlands";
    //console.log(Saba);
    //countries.unshift(Saba);

    const StBarths = new antillesCountry("Saint Barthélemy", "Collectivité territoriale de Saint-Barthélemy", "Gustavia", "French", "Lesser Antilles");
    StBarths.nickname = ["St-Barth", "St. Barths","St. Barts"];
    StBarths.territory = "France";
    StBarths.languages = [StBarths.language, "Saint-Barthélemy French", "Antillean Creole"];
    //console.log(StBarths);
    //countries.unshift(StBarths);

    const SaintMartin = new antillesCountry("Saint Martin", "Saint Martin", "Marigot", "French", "Lesser Antilles");
    SaintMartin.territory = "France";
    SaintMartin.nickname = ["Sint Maarten", "The Friendly Island"];
    //console.log(SaintMartin);
    //countries.unshift(SaintMartin);

    const SintMaartin = new antillesCountry("Sint Maarten", "Sint Maarten" ,"Philipsburg", "Dutch", "Lesser Antilles");
    SintMaartin.territory = "Netherlands";
    SintMaartin.languages = [SintMaartin.language, "English"];
    SintMaartin.cities = [SintMaartin.capital, "Lower Prince's Quarter"]
    //console.log(SintMaartin);
    //countries.unshift(SintMaartin);

    const SintEustatius = new antillesCountry("Sint Eustatius", "Sint Eustatius", "Oranjestad", "Dutch", "Lesser Antilles");
    SintEustatius.languages = [SintEustatius.language, "English"];
    SintEustatius.territory = "Netherlands";
    SintEustatius.nickname = ["Statia"];
    //console.log(SintEustatius);
    //countries.unshift(SintEustatius);

    const NuevaSparta = new antillesCountry("Nueva Sparta", "Estado Nueva Sparta", "La Asunción", "Spanish", "Lesser Antilles");
    NuevaSparta.territory = "Venezuela";
    NuevaSparta.islands = ["Margarita Island", "Coche", "Cubagua"];
    //console.log(NuevaSparta);

    // Europe

    const NorthMacedonia = new anySpeakingCountry("Macedonia", "Republic of North Macedonia", "Skopje", "Europe", "Macedonian");
    NorthMacedonia.nickname =["Macedonia"];
    NorthMacedonia.region = "Southest Europe";
    NorthMacedonia.specificRegion = "Balkan Peninsula";
    NorthMacedonia.landlocked = true;
    NorthMacedonia.languages.push("Albanian");
    NorthMacedonia.wikiURI = "https://en.wikipedia.org/wiki/North_Macedonia"; 

    const Guernesey = new anySpeakingCountry("Guernsey", "Guernsey", "Saint Peter Port", "Europe", "English");
    Guernesey.languages.push("Guernésiais", "Sercquiais", "Auregnais");
    Guernesey.territory = "United Kingdom";
    Guernesey.sea = "English Channel";
    Guernesey.island = true;
    Guernesey.region = "Northern Europe";
    Guernesey.wikiURI = "https://en.wikipedia.org/wiki/Bailiwick_of_Guernsey";

    const IsleOfMan = new anySpeakingCountry("Isle of Man", "Isle of Man", "Douglas", "Europe", "English");
    IsleOfMan.languages.push("Manx");
    IsleOfMan.nickname = ["Manx", "Mannin" ,"Ellan Vannin", "Mann"];
    IsleOfMan.territory = "United Kingdom";
    IsleOfMan.island = true;
    IsleOfMan.region = "Northern Europe";
    IsleOfMan.sea = "Irish Sea";
    IsleOfMan.geoRegion = "Crown dependency";
    IsleOfMan.wikiURI = "https://en.wikipedia.org/wiki/Isle_of_Man";


    const Austria = new anySpeakingCountry("Austria", "Republic of Austria", "Vienna", "Europe", "German");
    Austria.landlocked = true;
    Austria.region = "Central Europe";
    Austria.specificRegion = "East Alpine";
    //countries.unshift(Austria);
    //console.log(Austria);

    const Switzerland = new anySpeakingCountry("Switzerland", "Swiss Confederation", "Bern", "Europe", "German");
    Switzerland.languages = [Switzerland.language, "French", "Italian", "Romansh"];
    Switzerland.region = "Central Europe";
    Switzerland.landlocked = true;
    Switzerland.cities = [Switzerland.capital, "Zurich"];
    //countries.unshift(Switzerland);
    //console.log(Switzerland);

    const Denmark = new anySpeakingCountry("Denmark", "Kingdom of Denmark", "Copenhagen", "Europe", "Danish");
    Denmark.languages = [Denmark.language, "Faroese", "Greenlandic", "German"];
    Denmark.region = "Northwest Europe";
    //countries.unshift(Denmark);
    //console.log(Denmark);

    const UnitedKingdom = new EnglishSpeakingCountries("United Kingdom", "United Kingdom of Great Britain and Northern Ireland", "London", "Europe");
    UnitedKingdom.nickname = ["Great Britain", "UK"];
    UnitedKingdom.countries = [];
    UnitedKingdom.island = "true";
    UnitedKingdom.ocean = "Atlantic";
    UnitedKingdom.sea = "North Sea";
    UnitedKingdom.cities = [UnitedKingdom.capital, "Birmingham", "Glasgow", "Leeds", "Liverpool", "Manchester", "Cardiff", "Edinburg", "Belfast"];
    UnitedKingdom.languages = [UnitedKingdom.language, "Scots", "Ulster Scots", "Welsh", "Cornish", "Scottish", "Gaelic", "Irish"];
    //countries.unshift(UnitedKingdom);
    //console.log(UnitedKingdom);

    const Slovakia = new anySpeakingCountry("Slovakia", "Slovak Republic", "Bratislava", "Europe", "Slovak");
    Slovakia.landlocked = true;
    Slovakia.region = "Central Europe";
    Slovakia.cities = [Slovakia.capital, "Košice"];
    //console.log(Slovakia);
    //countries.unshift(Slovakia);

    const Slovenia = new anySpeakingCountry("Slovenia", "Republic of Slovenia", "Ljubljana", "Europe", "Slovene");
    Slovenia.region = "Central Europe";
    //countries.unshift(Slovenia);
    //console.log(Slovenia);



    
      // ASIA

        const Kyrgyzstan = new anySpeakingCountry("Kyrgyzstan", "Kyrgyz Republic", "Bishkek", "Asia", "Kyrgyz");
        Kyrgyzstan.nickname = ["Kirghizia"];
        Kyrgyzstan.region = "Central Asia";
        Kyrgyzstan.landlocked = true;
        Kyrgyzstan.languages = [Kyrgyzstan.language, "Russian"];
        Kyrgyzstan.wikiURI = "https://en.wikipedia.org/wiki/Kyrgyzstan";

        const Uzbekistan = new anySpeakingCountry("Uzbekistan", "Republic of Uzbekistan", "Tashkent", "Asia", "Uzbek");
        Uzbekistan.languages = [Uzbekistan.language, "Karakalpak"];
        Uzbekistan.landlocked = true;
        Uzbekistan.region = "Central Asia";
        //countries.push(Uzbekistan);
        //console.log(Uzbekistan);

        Pakistan.cities =[Pakistan.capital, "Karachi"];
        Pakistan.languages =[Pakistan.language, "Urdu", "Punjabi", "Pashto", "Sindhi", "Balochi"];
    
        
        SriLanka.cities = [SriLanka.capital, "Colombo"];
        SriLanka.languages.push("Tamil");
        SriLanka.URIs = {
            countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sri_Lanka_-_Location_Map_%282011%29_-_LKA_-_UNOCHA.svg/480px-Sri_Lanka_-_Location_Map_%282011%29_-_LKA_-_UNOCHA.svg.png",
            countryMapFile : "https://en.wikipedia.org/wiki/File:Sri_Lanka_-_Location_Map_(2011)_-_LKA_-_UNOCHA.svg",
        };
        // EURASIA - WEST ASIA - EAST EUROPE



 


        const Iraq = new AraFSpeakingCountries("Iraq", "Republic of Iraq", "Baghdad", "Asia");
        Iraq.languages.push("Kurdish","Mandaic", "Shabaki", "Persian");
        Iraq.region = "Western Asia";
        Iraq.geoRegion = "Middle East";
        Iraq.wikiURI = "https://en.wikipedia.org/wiki/Iraq";

        const Jordan = new ArabSpeakingCountries("Jordan", "Hashemite Kingdom of Jordan", "Amman", "Asia");
        Jordan.region = "Western Asia";
        Jordan.cities.push("Petra");
        Jordan.wikiURI = "https://en.wikipedia.org/wiki/Jordan";
        Jordan.URIs = {
            countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Jordan_-_Location_Map_%282013%29_-_JOR_-_UNOCHA.svg/480px-Jordan_-_Location_Map_%282013%29_-_JOR_-_UNOCHA.svg.png",
            countryMapFile : "https://en.wikipedia.org/wiki/File:Jordan_-_Location_Map_(2013)_-_JOR_-_UNOCHA.svg",
        };
        Jordan.countryMap = Jordan.URIs.countryMap;
        //myCountry = Jordan;

  
        Malaysia.cities.push("Putrajaya");
    
        const Nepal = new anySpeakingCountry("Nepal", " Federal Democratic Republic of Nepal", "Kathmandu", "Asia", "Nepali");
        Nepal.region = "South Asia";
        Nepal.landlocked = true;
        Nepal.wikiURI = "https://en.wikipedia.org/wiki/Nepal";
        Nepal.URIs = {
            countryMap :"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nepal_-_Location_Map_%282013%29_-_NPL_-_UNOCHA.svg/482px-Nepal_-_Location_Map_%282013%29_-_NPL_-_UNOCHA.svg.png",
            countryMapFile : "https://en.wikipedia.org/wiki/File:Nepal_-_Location_Map_(2013)_-_NPL_-_UNOCHA.svg",
        };
        Nepal.countryMap = Nepal.URIs.countryMap;
        //myCountry = Nepal;


        India.languages.push("English","Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Kokborok","Konkani","Maithili","Malayalam","Manipuri","Marathi","MizoNepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","TeluguUrdu");
        India.cities.push("Mumbai");
        






//  ANATOLIA AND ARABIC PENINSULA Turkey Yemen.name, Oman.name, Qatar.name, Bahrain.name, Kuwait.name, SaudiArabia.name, ArabEmirates.name


/*
        Kuwait.URIs = {
            countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kuwait_-_Location_Map_%282013%29_-_KWT_-_UNOCHA.svg/480px-Kuwait_-_Location_Map_%282013%29_-_KWT_-_UNOCHA.svg.png",
            countryMapFile : "https://en.wikipedia.org/wiki/File:Kuwait_-_Location_Map_(2013)_-_KWT_-_UNOCHA.svg",
        };
        Kuwait.countryMap = Kuwait.URIs.countryMap;
        //myCountry = Kuwait;

*/


/*
        Turkey.cities.push("Istambul");
        Turkey.languages.push("Kurmanji", "Zaza", "Laz", "Kabardian-Cherkess", "Bosnian", "Syrian Arabic");
        Turkey.transcontinental = true;

*/

/*
        Yemen.nickname = ["Yaman"];
        Yemen.region = "Western Asia";
        Yemen.specificRegion = "Arabic Peninsula";
        Yemen.cities = [Yemen.capital, "Aden", "Taiz"];
        Yemen.wikiURI = "https://en.wikipedia.org/wiki/Yemen";
        Yemen.URIs = {
            countryMap : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Yemen_-_Location_Map_%282013%29_-_YEM_-_UNOCHA.svg/480px-Yemen_-_Location_Map_%282013%29_-_YEM_-_UNOCHA.svg.png",
            countryMapFile : "https://en.wikipedia.org/wiki/File:Yemen_-_Location_Map_(2013)_-_YEM_-_UNOCHA.svg",
        };
        Yemen.countryMap = Yemen.URIs.countryMap;
        //countries.unshift(Yemen);
        //console.log(Yemen);
        //myCountry = Yemen;
*/










    // Mediterranean Countries


    const Malta = new anySpeakingCountry("Malta", "Republic of Malta", "Valletta", "Europe", "Maltese");
    Malta.island = true;
    Malta.sea = "Mediterranean";
    Malta.cities = [Malta.capital, "St. Paul's Bay"];
    Malta.languages = [Malta.language, "English"];
    Malta.wikiURI = "https://en.wikipedia.org/wiki/Malta";

    const Ireland = new anySpeakingCountry("Ireland", "Republic of Ireland", "Dublin", "Europe", "Irish");
    Ireland.languages.push("English");
    Ireland.island = true;
    Ireland.ocean = "Atlantic";
    Ireland.region = "North-western Europe";
    Ireland.wikiURI = "https://en.wikipedia.org/wiki/Republic_of_Ireland";
    //myCountry = Ireland;
    //console.log(Ireland);

    const Germany = new anySpeakingCountry("Germany", "Federal Republic of Germany", "Berlin", "Europe", "German");
    Germany.region = "Central-Western Europe";
    Germany.wikiURI = "https://en.wikipedia.org/wiki/Germany";
    

    const Lithuania = new anySpeakingCountry("Lithuania", "Republic of Lithuania", "Vilnius", "Europe", "Lithuanian");
    Lithuania.languages = [Lithuania.language, "Polish", "Russian"];
    Lithuania.wikiURI = "https://en.wikipedia.org/wiki/Lithuania";
    Lithuania.specificRegion = "Baltic Region";
    //console.log(Lithuania);
    //countries.unshift(Lithuania);
    //myCountry = Lithuania;
    
    const Luxembourg = new anySpeakingCountry("Luxembourg", "Grand Duchy of Luxembourg", "Luxembourg City", "Europe", "Luxembourgish");
    Luxembourg.languages = [Luxembourg.language, "French", "German"];
    Luxembourg.region = "Western Europe";
    Luxembourg.landlocked = true;
    Luxembourg.wikiURI = "https://en.wikipedia.org/wiki/Luxembourg";
    //console.log(Luxembourg);
    //countries.unshift(Luxembourg);
    //myCountry = Luxembourg;

    const Netherlands = new anySpeakingCountry("Netherlands", "Netherlands", "Amsterdam", "Europe", "Dutch");
    Netherlands.region = "Western Europe";
    Netherlands.territories = [Bonaire, Saba, SintEustatius];
    Netherlands.cities = [Netherlands.capital, "Rotterdam", "The Hague", "Utrecht"];
    Netherlands.nickname = ["Holand"];
    Netherlands.languages = [Netherlands.language, "English", "Papiamentu", "West Frisian", "Dutch Low Saxon", "Limburgish", "Sinte Romani", "Yiddish"];
    Netherlands.wikiURI = "https://en.wikipedia.org/wiki/Netherlands";





    /* *****************************  ***************************   */


    const MediterraneanSea = {
        countries : [Spain, France, Monaco, Italy, Slovenia, Croatia, Bosnia, Montenegro, Albania, Greece, Turkey, Syria, Lebannon, Israel, Egypt, Lybia, Tunisia, Algeria, Morocco, Malta, Cyprus, Gaza, Gibraltar],
        description : "The Mediterranean Sea is a sea connected to the Atlantic Ocean, surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Southern Europe and Anatolia, on the south by North Africa and on the east by the Levant. Although the sea is sometimes considered a part of the Atlantic Ocean, it is usually referred to as a separate body of water. ",
        wikiURI : "https://en.wikipedia.org/wiki/Mediterranean_Sea",
    };


    const Antilles = {

        lesserAntilles : {
            countries: [AntiguaandBarbuda, Barbados, Dominica, Grenada, SaintKitts, SaintLucia, SaintVincentGrenadines, TrinidadandTobago, Aruba, Anguilla, Bonaire, VirginIslandsUK, VirginIslandsUSA, Curacao, Guadeloupe, Martinique, Montserrat, Saba, StBarths, SaintMartin, SintMaartin, SintEustatius, NuevaSparta],
            wikiURI : "https://en.wikipedia.org/wiki/Lesser_Antilles",
        },

        greaterAntilles : { 
            countries: [CaymanIslands, Cuba, DominicanRepublic, Haiti, Jamaica, "PuertoRico"],
            wikiURI : "https://en.wikipedia.org/wiki/Greater_Antilles",
        },

        allCountries : [],
           
        wikiURI : "https://en.wikipedia.org/wiki/Antilles",
        regionMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LocationAntilles.svg/800px-LocationAntilles.svg.png",
        regionMapFile: "https://en.wikipedia.org/wiki/File:LocationAntilles.svg",
    };



    /* *****************************  ***************************   */

    
  //document.getElementById("main").innerHTML = JSON.stringify(countries);

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
    
