
    let countries = [];
    let latinAmericanCountries = [];

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
      this.region = "Latin America";
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
      this.sea = sea;
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




  /* *****************************  COUNTRIES ***************************   */

  const Spain = new SpanishSpeakingCountry("España", "Reino de España", "Madrid", "Europe");
  //console.log(Spain);

  
  // AMERICA

const Honduras = new SpanishSpeakingCountry("Honduras", "República de Honduras", "Tegucigalpa", "America");
//console.log(Honduras);
countries.unshift(Honduras);

const Mexico = new SpanishSpeakingCountry("México", "Estados Unidos Mexicanos", "Ciudad de México");
//console.log(Mexico);

const Cuba = new antillesCountry("Cuba", "República de Cuba", "Havana", "Spanish", "Greater Antilles");
//console.log(Cuba);
countries.unshift(Cuba);

const Salvador = new SpanishSpeakingCountry("El Salvador", "República de El Salvador", "San Salvador");
//console.log(Salvador);

const Venezuela = new SpanishSpeakingCountry("Venezuela", "República Bolivariana de Venezuela", "Caracas");
//console.log(Venezuela);
countries.unshift(Venezuela);

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
countries.unshift(Jamaica);

const DominicanRepublic = new antillesCountry("Dominican Republic", "República Dominicana", "Santo Domingo", "Spanish", "Greater Antilles");
//console.log(DominicanRepublic);
countries.unshift(DominicanRepublic);

const Haiti = new antillesCountry("Haiti", "Republic of Haiti", "Port-au-Prince", "French", "Greater Antilles");
Haiti.languages= [Haiti.language, "Haitian Creole"];
//console.log(Haiti);
countries.unshift(Haiti);

const PuertoRico = new antillesCountry("Puerto Rico", "Commonwealth of Puerto Rico", "San Juan", "Spanish", "Greater Antilles");
PuertoRico.territory = "United States of America";
PuertoRico.languages = ["Spanish", "English"];
console.log(PuertoRico);
countries.unshift(PuertoRico);


  // AFRICA

  const SierraLeone = new EnglishSpeakingCountries("Sierra Leone", "Republic of Sierra Leone", "Freetown", "Africa");
  //console.log(SierraLeone);
  countries.push(SierraLeone);

  const Djibouti = new anySpeakingCountry("Dibouti", "Republic of Djibouti", "Djibouti", "Africa", "Somali");
  Djibouti.languages = ["Somali", "Afar", "Arabic", "French"];
  Djibouti.region = "East Africa";
  Djibouti.specificRegion = "Horn of Africa";
  //console.log(Djibouti);
  countries.push(Djibouti);

  const Rwanda = new anySpeakingCountry("Rwanda", "Republic of Rwanda", "Kigali", "Africa", "Kinyarwanda");
  Rwanda.languages = ["Kinyarwanda","English","French","Swahili"];
  Rwanda.landlocked = true;
  Rwanda.specificRegion = "Great Rift Valley"
  //console.log(Rwanda);
  countries.push(Rwanda);

  const Chad = new ArabSpeakingCountries("Chad", "Republic of Chad", "N'Djamena", "Africa");
  Chad.languages = [Chad.language, "French"];
  Chad.landlocked = true;
  Chad.region = "North Central Africa"
  //console.log(Chad);
  countries.push(Chad);

  const Morocco = new ArabSpeakingCountries("Morocco", "Kingdom of Morocco", "Rabat", "Africa");
  Morocco.cities = ["Casablanca"];
  Morocco.languages = [Morocco.language, "French"];
  Morocco.region = "North Africa";
  Morocco.specificRegion = "Maghreb";
  //console.log(Morocco);
  countries.push(Morocco);

  const Gambia = new anySpeakingCountry("The Gambia","Republic of The Gambia" ,"Banjul", "Africa","Mandinka");
  Gambia.languages = [Gambia.language, "English", "Fula","Wolof","Serer","Jola"];
  Gambia.region = "Western Africa";
  Gambia.nickname = "The Smiling Coast";
  Gambia.cities = ["Serekunda", "Brikama"];
  //console.log(Gambia);
  countries.push(Gambia);

  
   const EquatorialGuinea = new SpanishSpeakingCountry("Guinea Ecuatorial", "República de Guinea Ecuatorial", "Malabo", "Africa")
   //console.log(EquatorialGuinea);
   countries.unshift(EquatorialGuinea);



  // Islands

    const Tonga = new EnglishSpeakingCountries("Tonga", "Kingdom of Tonga", "Nukuʻalofa", "Oceania");
    Tonga.island = true;
    Tonga.region = "Polynesia";
    Tonga.languages = ["Tongan"];
    Tonga.islands = ["Tongatapu"];
    //console.log(Tonga);
    countries.push(Tonga);


    const NewZealand = new EnglishSpeakingCountries("New Zealand", "New Zealand", "Wellington", "Oceania");
    NewZealand.island = true;
    NewZealand.ocean = "Pacific";
    NewZealand.islands = ["North Island (Te Ika-a-Māui)", "South Island (Te Waipounamu)"];   
    NewZealand.cities = ["Auckland"];
    NewZealand.languages = [NewZealand.language, "Maori"];
    //console.log(NewZealand);
    countries.push(NewZealand);


    // American Islands

    const CaymanIslands = new antillesCountry("Cayman Islands", "Cayman Islands", "George Town", "English", "Greater Antilles");
    CaymanIslands.territory = "United Kingdom";
    CaymanIslands.islands = ["Grand Cayman", "Cayman Brac", "Little Cayman,"];
    //console.log(CaymanIslands);
    countries.unshift(CaymanIslands);


    const Aruba = new EnglishSpeakingCountries("Aruba", "Aruba", "Oranjestad", "America");
    Aruba.language = "Dutch";
    Aruba.island = true;
    Aruba.territory = "Neatherlands";
    Aruba.ocean = "Atlantic";
    Aruba.sea = "Caribean";
    Aruba.specificRegion = "Lesser Antilles";
    //console.log(Aruba);
    countries.unshift(Aruba);

    const SaintLucia = new islandCountry("Saint Lucia", "Saint Lucia", "Castries", "America", "English", "Atlantic", "Caribean");
    SaintLucia.specificRegion ="Lesser Antilles";
    SaintLucia.region = "Antilles";
    //console.log(SaintLucia);
    countries.unshift(SaintLucia);

    const Grenada = new EnglishSpeakingCountries("Grenada", "Grenada","St. George's", "America")
    Grenada.region="Antillas";
    Grenada.specificRegion = "Lesser Antilles";
    Grenada.island = true;
    Grenada.islands = ["Carriacou", "Petite Martinique", "Ronde Island", "Caille Island", "Diamond Island", "Large Island", "Saline Island", "Frigate Island"];
    Grenada.ocean = "Atlantic";
    Grenada.sea = "Caribean";
    Grenada.languages = [Grenada.language, "Grenadian Creole English", "Grenadian Creole French"];
    //console.log(Grenada);
    countries.unshift(Grenada);

    const AntiguaandBarbuda = new EnglishSpeakingCountries("Antigua and Barbuda", "Antigua and Barbuda", "St. John's", "America");
    AntiguaandBarbuda.region = "Antillas"
    AntiguaandBarbuda.specificRegion = "Lesser Antilles";
    AntiguaandBarbuda.island = true;
    AntiguaandBarbuda.islands = ["Antigua","Barbuda"," Great Bird", "Green Island", "Guiana Island", "Long Island", "Maiden Island", "Prickly Pear", "York Island", "Redonda"];
    AntiguaandBarbuda.ocean = "Atlantic";
    AntiguaandBarbuda.sea = "Caribean";
    AntiguaandBarbuda.languages = [AntiguaandBarbuda.language, "Creole"];
    //console.log(AntiguaandBarbuda);
    countries.unshift(AntiguaandBarbuda);

    const Bahamas = new islandCountry("The Bahamas", "Commonwealth of The Bahamas", "Nassau", "America", "English", "Atlantic", "Caribean");
    Bahamas.languages = [Bahamas.language, "Bahamian Creole"];
    Bahamas.specificRegion = "Antillas";
    //console.log(Bahamas);
    countries.unshift(Bahamas);

    const TrinidadandTobago = new islandCountry("Trinidad and Tobago", "Republic of Trinidad and Tobago", "Port of Spain", "America", "English", "Atlantic", "Caribean");
    TrinidadandTobago.cities = ["Chaguanas"];
    TrinidadandTobago.islands = ["Trinidad", "Tobago", "Monos", "Huevos", "Gaspar Grande (Gasparee)", "Little Tobago", "St. Giles Island"];
    TrinidadandTobago.specificRegion = "Lesser Antilles";
    //console.log(TrinidadandTobago);
    countries.unshift(TrinidadandTobago);

    const Barbados = new antillesCountry("Barbados", "Barbados", "Bridgetown", "English", "Lesser Antilles");
    Barbados.languages= [Barbados.language, "Bajan Creole"];
    //console.log(Barbados);
    countries.unshift(Barbados);

    const Dominica = new antillesCountry("Dominica", "Commonwealth of Dominica", "Roseau", "English", "Lesser Antilles");
    Dominica.languages = [Dominica.language, "Dominican Creole", "French"];
    //console.log(Dominica);    
    countries.unshift(Dominica);

    const SaintKitts = new antillesCountry("Saint Kitts and Nevis", "Federation of Saint Christopher and Nevis", "Basseterre", "English", "Lesser Antilles");
    SaintKitts.cities = [SaintKitts.capital, "Charlestown"];
    SaintKitts.languages = [SaintKitts.language, "Saint Kitts Creole"];
    SaintKitts.islands = ["Saint Kitts", "Nevis"];
    //console.log(SaintKitts);
    countries.unshift(SaintKitts);

    const SaintVincentGrenadines = new antillesCountry("Saint Vincent and the Grenadines", "Saint Vincent and the Grenadines", "Kingstown", "English", "Lesser Antilles");
    SaintVincentGrenadines.islands = ["Saint Vincent", "Young Island", "Bequia", "Mustique", "Canouan", "Union Island", "Mayreau", "Petit St Vincent", "Palm Island", "Petit Nevis", "Petit Mustique"];
    SaintVincentGrenadines.languages = [SaintVincentGrenadines.language, "Vincentian Creole"];
    //console.log(SaintVincentGrenadines);
    countries.unshift(SaintVincentGrenadines);

    const Anguilla = new antillesCountry("Anguilla", "Anguilla", "The Valley", "English", "Lesser Antilles");
    Anguilla.territory = "United Kingdom";
    //console.log(Anguilla);
    countries.unshift(Anguilla);

    const Bonaire = new antillesCountry("Bonaire", "Bonaire", "Kralendijk", "Dutch", "Lesser Antilles");
    Bonaire.territory = "Neatherlands";
    Bonaire.languages = [Bonaire.language, "Papiamento"];
    //console.log(Bonaire);
    countries.unshift(Bonaire);

    const VirginIslandsUK = new antillesCountry("Virgin Islands", "British Virgin Islands", "Road Town", "English", "Lesser Antilles" );
    VirginIslandsUK.territory = "United Kingdom";
    //console.log(VirginIslandsUK);
    countries.unshift(VirginIslandsUK);

    const VirginIslandsUSA = new antillesCountry("Virgin Islands", "Virgin Islands of the United States", "Charlotte Amalie", "English", "Lesser Antilles");
    VirginIslandsUSA.territory = "United States of America";
    VirginIslandsUSA.languages = [VirginIslandsUSA.language, "Virgin Islands Creole English"];
    VirginIslandsUSA.nickname = ["U.S. Virgin Islands", "American Virgin Islands"];
    //console.log(VirginIslandsUSA);
    countries.unshift(VirginIslandsUSA);

    const Curacao = new antillesCountry("Curaçao", "Curaçao", "Willemstad", "Dutch", "Lesser Antilles");
    Curacao.territory = "Neatherlands";
    Curacao.languages = [Curacao.language, "Papiamento", "English"];
    //console.log(Curacao);
    countries.unshift(Curacao);

    const Guadeloupe = new antillesCountry("Guadeloupe", "Département d’Outre-Mer de la Guadeloupe", "Basse-Terre", "French", "Lesser Antilles");
    Guadeloupe.islands = ["Basse-Terre", "Grande-Terre", "Marie-Galante", "La Désirade","Îles des Saintes"];
    Guadeloupe.territory = "France";
    Guadeloupe.languages = [Guadeloupe.language ,"Guadeloupean Creole", "Antillean Creole"];
    //console.log(Guadeloupe);
    countries.unshift(Guadeloupe);

    const Martinique = new antillesCountry("Martinique", "Martinique", "Fort-de-France", "French", "Lesser Antilles");
    Martinique.territory = "France";
    Martinique.languages = [Martinique.language, "Antillean Creole", "Créole Martiniquais"];
    Martinique.territory = "United Kingdom";
    //console.log(Martinique);
    countries.unshift(Martinique);

    const Montserrat = new antillesCountry("Montserrat", "Montserrat", "Plymouth", "English", "Lesser Antilles");
    Montserrat.territory = "United Kingdom";
    Montserrat.cities = [Montserrat.capital, "Brades", "Little Bay"];
    //console.log(Montserrat);
    countries.unshift(Montserrat);

    const Saba = new antillesCountry("Saba", "Saba", "The Bottom", "Dutch", "Lesser Antilles");
    Saba.languages =  [Saba.language, "English"];
    Saba.territory = "Neatherlands";
    //console.log(Saba);
    countries.unshift(Saba);

    const StBarths = new antillesCountry("Saint Barthélemy", "Collectivité territoriale de Saint-Barthélemy", "Gustavia", "French", "Lesser Antilles");
    StBarths.nickname = ["St-Barth", "St. Barths","St. Barts"];
    StBarths.territory = "France";
    StBarths.languages = [StBarths.language, "Saint-Barthélemy French", "Antillean Creole"];
    //console.log(StBarths);
    countries.unshift(StBarths);

    const SaintMartin = new antillesCountry("Saint Martin", "Saint Martin", "Marigot", "French", "Lesser Antilles");
    SaintMartin.territory = "France";
    SaintMartin.nickname = ["Sint Maarten", "The Friendly Island"];
    //console.log(SaintMartin);
    countries.unshift(SaintMartin);

    const SintMaartin = new antillesCountry("Sint Maarten", "Sint Maarten" ,"Philipsburg", "Dutch", "Lesser Antilles");
    SintMaartin.territory = "Netherlands";
    SintMaartin.languages = [SintMaartin.language, "English"];
    SintMaartin.cities = [SintMaartin.capital, "Lower Prince's Quarter"]
    //console.log(SintMaartin);
    countries.unshift(SintMaartin);

    const SintEustatius = new antillesCountry("Sint Eustatius", "Sint Eustatius", "Oranjestad", "Dutch", "Lesser Antilles");
    SintEustatius.languages = [SintEustatius.language, "English"];
    SintEustatius.territory = "Netherlands";
    SintEustatius.nickname = ["Statia"];
    //console.log(SintEustatius);
    countries.unshift(SintEustatius);

    const NuevaSparta = new antillesCountry("Nueva Sparta", "Estado Nueva Sparta", "La Asunción", "Spanish", "Lesser Antilles");
    NuevaSparta.territory = "Venezuela";
    NuevaSparta.islands = ["Margarita Island", "Coche", "Cubagua"];
    //console.log(NuevaSparta);





    /* *****************************  ***************************   */


  document.getElementById("main").innerHTML = JSON.stringify(countries);
