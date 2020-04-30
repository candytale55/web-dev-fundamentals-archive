
    let countries = [];
    let latinAmericanCountries = [];
    let myCountry = "";

function anySpeakingCountry (name, officialName, capital, continent, language){
    this.name = name;
    this.officialName = officialName;
    this.capital = capital;
    this.continent = continent;
    this.language = language;
    //countries.push({name:name, capital:capital, continent:continent, language:language });
    //countries.push({name:name});
}

function EnglishSpeakingCountries (name, officialName, capital, continent) {
    this.name = name; 
    this.officialName = officialName;
    this.capital = capital;
    this.continent = continent;
    this.region = continent;
    this.language = "English";
    //englishCountries.push({name:name, capita:capital, continent:continent});
    //countries.push({name:name, continent:continent });
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
    if (continent = "Asia"){
        this.region = "Middle East";
    } else {
        this.region = "Continent"
    }
    //countries.push({name:name, continent:continent });
    //countries.unshift[{name:name, capital:capital, continent:continent}];
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
    //countries.push({name:name, continent:continent });
    //countries.push({name:name, capital:capital, continent:continent});
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
    } else {
      this.region = continent;
    }
      // countries.push({name:name, continent:continent });
      //countries.push([{name:name, capital:capital, language: this.language}]);
      //countries.push([this.name, this.capital, this.officialName, this.continent, this.language]);     
  }


  function islandCountry(name, officialName, capital, continent, language, ocean, sea){
      this.name = name;
      this.officialName = officialName;
      this.capital = capital;
      this.continent = continent;
      this.language = language;
      this.island = true;
      this.ocean = ocean;
      if (sea !== undefined){
        this.sea = sea;
      }
      //countries.push({name:name, continent:continent });
  }

  function antillesCountry(name, officialName, capital, language, specificRegion){
      this.name = name;
      this.officialName = officialName;
      this.capital = capital;
      this.language = language;
      this.island = true;
      this.ocean = "Atlantic";
      this.sea = "Caribean";
      this.region = "Antilles";
      this.continent = "America";
      if (specificRegion != undefined){
          this.specificRegion = specificRegion;
      }
  }


  function OceaniaCountries(name, officialName, capital, language, specificRegion){
      this.name = name;
      this.officialName = officialName;
      this.capital = capital;
      this.island = true;
      this.ocean = "Pacific";
      this.language = language;
      this.continent = "Oceania";
      if (specificRegion !== undefined){
          this.specificRegion = specificRegion;
      }
  }




  /* *****************************  COUNTRIES ***************************   */

  const Spain = new SpanishSpeakingCountry("España", "Reino de España", "Madrid", "Europe");
  //console.log(Spain);


  // ASIA

  const Cambodia = new anySpeakingCountry("Cambodia", "Kingdom of Cambodia", "Phnom Penh",  "Asia", "Khmer");
  Cambodia.nickname =["Kampuchea"];
  Cambodia.languages = [Cambodia.language, "French", "English"];
  Cambodia.region = "Southeast Asia";
  Cambodia.specificRegion = "Indochina Peninsula";
  //countries.push(Cambodia);
  Cambodia.src = "https://postimg.cc/HcrsF8wc";
      /*
      "Direct link": "https://i.postimg.cc/503YYwj3/Cambodia-Cities.png",
      "Android markdown": "[Cambodia-Cities.png](https://postimg.cc/HcrsF8wc)";
      "GitHub markdown": "[![Cambodia-Cities.png](https://i.postimg.cc/503YYwj3/Cambodia-Cities.png)](https://postimg.cc/HcrsF8wc)";
      "Direct link": "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/503YYwj3/Cambodia-Cities.png' border='0' alt='Cambodia-Cities'/></a>"*/

  //console.log(Cambodia);
  
  const Singapore = new anySpeakingCountry("Singapore", "Republic of Singapore", "Singapore", "Asia", "English");
  Singapore.languages = [Singapore.language, "Malay", "Chinese", "Tamil"];
  Singapore.region = "South East Asia";
  Singapore.island = true;
  Singapore.sea = "South China Sea";
  //countries.unshift(Singapore);
  //console.log(Singapore);
  
     //
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

const Mexico = new SpanishSpeakingCountry("México", "Estados Unidos Mexicanos", "Ciudad de México");
//console.log(Mexico);

const Cuba = new antillesCountry("Cuba", "República de Cuba", "Havana", "Spanish", "Greater Antilles");
//console.log(Cuba);
//countries.unshift(Cuba);

const Salvador = new SpanishSpeakingCountry("El Salvador", "República de El Salvador", "San Salvador");
//console.log(Salvador);

const Venezuela = new SpanishSpeakingCountry("Venezuela", "República Bolivariana de Venezuela", "Caracas");
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


const Paraguay = new SpanishSpeakingCountry("Paraguay", "República del Paraguay", "Asunción");
//console.log(Paraguay);

const Peru = new SpanishSpeakingCountry("Peru", "República del Perú ", "Lima" );
//console.log(Peru);

const Bolivia = new SpanishSpeakingCountry("Bolivia", "Estado Plurinacional de Bolivia", "La Paz");
//console.log(Bolivia);

const Ecuador = new SpanishSpeakingCountry("Ecuador", "República del Ecuador", "Quito");
//console.log(Ecuador);



const Uruguay = new SpanishSpeakingCountry("Uruguay", "República Oriental del Uruguay", "Montevideo");
//console.log(Uruguay);

const Colombia = new SpanishSpeakingCountry("Colombia", "República de Colombia", "Bogotá");
//console.log(Colombia);

const Chile = new SpanishSpeakingCountry("Chile", "República de Chile", "Santiago");
//console.log(Chile);

const Jamaica = new antillesCountry("Jamaica", "Jamaica", "Kingston", "English", "Greater Antilles");
Jamaica.languages = [Jamaica.language, "Jamaican Patois"];
//console.log(Jamaica);
//countries.unshift(Jamaica);

const DominicanRepublic = new antillesCountry("Dominican Republic", "República Dominicana", "Santo Domingo", "Spanish", "Greater Antilles");
//console.log(DominicanRepublic);
//countries.unshift(DominicanRepublic);

const Haiti = new antillesCountry("Haiti", "Republic of Haiti", "Port-au-Prince", "French", "Greater Antilles");
Haiti.languages= [Haiti.language, "Haitian Creole"];
//console.log(Haiti);
//countries.unshift(Haiti);

const PuertoRico = new antillesCountry("Puerto Rico", "Commonwealth of Puerto Rico", "San Juan", "Spanish", "Greater Antilles");
PuertoRico.territory = "United States of America";
PuertoRico.languages = ["Spanish", "English"];
//console.log(PuertoRico);
//countries.unshift(PuertoRico);




  // AFRICA

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
  Chad.languages = [Chad.language, "French"];
  Chad.landlocked = true;
  Chad.region = "North Central Africa"
  //console.log(Chad);
  //countries.push(Chad);

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

        // OCEANIA

        const Tuvalu = new islandCountry("Tuvalu", "Tuvalu", "Funafuti", "Oceania", "English", "Pacific");
        Tuvalu.nickname = ["Ellice Islands"];
        Tuvalu.languages = [Tuvalu.language, "Tuvaluan"];
        Tuvalu.islands = ["Nanumanga", "Niutao", "Niulakita", "Funafuti", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu"];
      //  countries.unshift(Tuvalu);
        //console.log(Tuvalu);
    
        const Tonga = new EnglishSpeakingCountries("Tonga", "Kingdom of Tonga", "Nukuʻalofa", "Oceania");
        Tonga.island = true;
        Tonga.region = "Polynesia";
        Tonga.languages = ["Tongan"];
        Tonga.islands = ["Tongatapu"];
        //console.log(Tonga);
        //countries.push(Tonga);
    
        const NewZealand = new EnglishSpeakingCountries("New Zealand", "New Zealand", "Wellington", "Oceania");
        NewZealand.island = true;
        NewZealand.ocean = "Pacific";
        NewZealand.islands = ["North Island (Te Ika-a-Māui)", "South Island (Te Waipounamu)"];   
        NewZealand.cities = ["Auckland"];
        NewZealand.languages = [NewZealand.language, "Maori"];
        //console.log(NewZealand);
        //countries.push(NewZealand);
    
        const Niue = new OceaniaCountries("Niue", "Niue", "Alofi", "English", "South Pacific Ocean");
        Niue.languages = [Niue.language, "Niuean"];
        // console.log(Niue);
        //countries.unshift(Niue);    

        const Palau = new OceaniaCountries("Palau", "Republic of Palau", "Ngerulmud", "English", "Caroline Islands");
        Palau.cities = [Palau.capital, "Koror"];
        Palau.languages = [Palau.language, "Palauan", "Japanese", "Sonsorolese", "Tobian"];
        //console.log(Palau);
        //countries.unshift(Palau);

        // ASIA

        const Kyrgyzstan = new anySpeakingCountry("Kyrgyzstan", "Kyrgyz Republic", "Bishkek", "Asia", "Kyrgyz");
        Kyrgyzstan.nickname = ["Kirghizia"];
        Kyrgyzstan.region = "Central Asia";
        Kyrgyzstan.landlocked = true;
        Kyrgyzstan.languages = [Kyrgyzstan.language, "Russian"];

        const Uzbekistan = new anySpeakingCountry("Uzbekistan", "Republic of Uzbekistan", "Tashkent", "Asia", "Uzbek");
        Uzbekistan.languages = [Uzbekistan.language, "Karakalpak"];
        Uzbekistan.landlocked = true;
        Uzbekistan.region = "Central Asia";
        //countries.push(Uzbekistan);
        //console.log(Uzbekistan);

        const Pakistan = new anySpeakingCountry("Pakistan", "Islamic Republic of Pakistan", "Islamabad", "Asia", "English");
        Pakistan.cities =[Pakistan.capital, "Karachi"];
        Pakistan.languages =[Pakistan.language, "Urdu", "Punjabi", "Pashto", "Sindhi", "Balochi"];
        Pakistan.region = "South Asia";
        //countries.push(Pakistan);
        //console.log(Pakistan);

        const SriLanka = new islandCountry("Sri Lanka", "Democratic Socialist Republic of Sri Lanka", "Sri Jayawardenepura Kotte", "Asia", "Sinhala", "Indian");
        SriLanka.cities = [SriLanka.capital, "Colombo"];
        SriLanka.languages = [SriLanka.language, "Tamil"];
        //countries.unshift(SriLanka);
        //console.log(SriLanka);

        // EURASIA - WEST ASIA - EAST EUROPE

        const Georgia = new anySpeakingCountry("Georgia", "Georgia", "Tbilisi", "Asia", "Georgian");
        Georgia.specificRegion ="Western Asia";
        Georgia.languages = [Georgia.language, "Abkhazian"];
        //countries.unshift(Georgia);
        //console.log(Georgia);

        const Thailand = new anySpeakingCountry("Thailand", "Kingdom of Thailand", "Bangkok", "Asia", "Thai");
        Thailand.nickname =["Siam"];
        Thailand.region = "Southeast Asia";
        Thailand.specificRegion = "Indochine Peninsula";
        Thailand.languages = [Thailand.language, "Isan", "Kam Mueang", "Pak Tai"];
        //countries.unshift(Thailand);
        //console.log(Thailand);

        const Turkmenistan = new anySpeakingCountry("Turkmenistan", "Republic of Turkmenistan", "Ashgabat", "Asia", "Turkmen");
        Turkmenistan.region = "Central Asia";
        countries.unshift(Turkmenistan);
        //console.log(Turkmenistan);
        //countries.unshift(Turkmenistan);

        const Vietnam = new anySpeakingCountry("Vietnam", "Socialist Republic of Vietnam", "Hanoi", "Asia", "Vietnamese");
        Vietnam.region = "Southeast Asia";
        Vietnam.specificRegion = "Indochine Peninsula";
        Vietnam.cities = [Vietnam.capital, "Ho Chi Minh City (Saigon)"];
        //countries.unshift(Vietnam);
        //console.log(Vietnam);

        const Yemen = new ArabSpeakingCountries("Yemen", "Republic of Yemen", "Sana'a", "Asia");
        Yemen.nickname = ["Yaman"];
        Yemen.region = "Western Asia";
        Yemen.specificRegion = "Arabic Peninsula";
        Yemen.cities = [Yemen.capital, "Aden", "Taiz"];
        //countries.unshift(Yemen);
        //console.log(Yemen);



    /* *****************************  ***************************   */

    
  //document.getElementById("main").innerHTML = JSON.stringify(countries);

    document.getElementById("name").innerHTML = myCountry.name;
    document.getElementById("officialName").innerHTML = myCountry.officialName;
    document.getElementById("capital").innerHTML = myCountry.capital;
    document.getElementById("continent").innerHTML = myCountry.continent;
    document.getElementById("region").innerHTML = myCountry.region;
    document.getElementById("language").innerHTML = myCountry.language;
    document.getElementById("languages").innerHTML = JSON.stringify(myCountry.languages);
    document.getElementById("countryMap").src = myCountry.countryMap;
    document.getElementById("wiki").href = myCountry.wikiURI;
    document.getElementById("regionMap").src = myCountry.regionMap;
    
