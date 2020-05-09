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

const EastTimor = new Island("East Timor", "Democratic Republic of Timor-Leste", "Dili", "Tetum", "Pacific", "Timor Sea");
EastTimor.setwikiURI("https://en.wikipedia.org/wiki/East_Timor");





// ASIA


const Cambodia = new Country("Cambodia", "Kingdom of Cambodia", "Phnom Penh", "Khmer");
Cambodia.setwikiURI("https://en.wikipedia.org/wiki/Cambodia");

const Thailand = new Country("Thailand", "Kingdom of Thailand", "Bangkok", "Thai");
Thailand.setwikiURI("https://en.wikipedia.org/wiki/Thailand");

const Singapore = new Island("Singapore", "Republic of Singapore", "Singapore", "English", "Indian", "South China Sea");
Singapore.setwikiURI("https://en.wikipedia.org/wiki/Singapore");


  /*/ ------------------------  EAST ASIA: ---------------------------------------- /*/


const China = new Country("China", "People's Republic of China", "Beijing", "Standard Chinese"); 
China.setwikiURI("https://en.wikipedia.org/wiki/China");

const Japan = new Island("Japan", "Japan", "Tokyo", "Japanese", "Pacific", "Sea of Japan");
Japan.wikiURI= "https://en.wikipedia.org/wiki/Japan";

const Mongolia = new Country("Mongolia", "Mongolia", "Ulaanbaatar", "Mongolian");
Mongolia.setwikiURI("https://en.wikipedia.org/wiki/Mongolia");

const Taiwan = new Island("Taiwan", "Republic of China", "Taipei", "Taiwanese Mandarin", "Pacific", "South China Sea");
Taiwan.setwikiURI("https://en.wikipedia.org/wiki/Taiwan");

const Macau = new Country ("Macau", "Macao Special Administrative Region of the People's Republic of China", "Macau", "Cantonese");
Macau.setwikiURI("https://en.wikipedia.org/wiki/Macau");

const HongKong = new Country("Hong Kong", "Hong Kong Special Administrative Region of the People's Republic of China", "Hong Kong", "Cantonese");
HongKong.setwikiURI("https://en.wikipedia.org/wiki/Hong_Kong");

const SouthKorea = new Country("South Korea", "Republic of Korea", "Seoul", "Korean");
SouthKorea.setwikiURI("https://en.wikipedia.org/wiki/South_Korea");

const NorthKorea = new Country("North Korea", "Democratic People's Republic of Korea", "Pyongyang", "Korean");
NorthKorea.setwikiURI("https://en.wikipedia.org/wiki/North_Korea");

  /*/ ------------------------ WESTERN ASIA: ---------------------------------------- /*/

  //  ANATOLIA AND ARABIC PENINSULA
  const Turkey = new Country("Turkey", "Republic of Turkey", "Ankara", "Turkish");
  Turkey.setwikiURI("https://en.wikipedia.org/wiki/Turkey");

  const Yemen = new Country("Yemen", "Republic of Yemen", "Sana'a", "Arabic");
  Yemen.setwikiURI("https://en.wikipedia.org/wiki/Yemen");

  const Qatar = new Country("Qatar", "State of Qatar", "Doha", "Arabic");
  Qatar.setwikiURI("https://en.wikipedia.org/wiki/Qatar");

  const Bahrain = new Country("Barhain", "Kingdom of Bahrain", "Manama", "Arabic");
  Bahrain.setwikiURI("https://en.wikipedia.org/wiki/Bahrain");

  const Kuwait = new Country("Kuwait", "State of Kuwait", "Kuwait City","Arabic");
  Kuwait.setwikiURI("https://en.wikipedia.org/wiki/Kuwait");

  const SaudiArabia = new Country("Saudi Arabia", "Kingdom of Saudi Arabia", "Riyadh", "Arabic");
  SaudiArabia.setwikiURI("https://en.wikipedia.org/wiki/Saudi_Arabia");

  const ArabEmirates = new Country("United Arab Emirates", "United Arab Emirates", "Abu Dhabi", "Arabic");
  ArabEmirates.setwikiURI("https://en.wikipedia.org/wiki/United_Arab_Emirates");

  const Oman = new Country("Oman","Sultanate of Oman", "Muscat", "Arabic");
  Oman.setwikiURI("https://en.wikipedia.org/wiki/Oman");

  //  ANATOLIA AND ARABIC PENINSULA Turkey Yemen.name, Oman.name, Qatar.name, Bahrain.name, Kuwait.name, SaudiArabia.name, ArabEmirates.name



// CAUCASUS
   const Georgia = new Country("Georgia", "Georgia", "Tbilisi", "Georgian");
   Georgia.setwikiURI("https://en.wikipedia.org/wiki/Georgia_(country)");

   const Armenia = new Country("Armenia", "Republic of Armenia", "Yerevan", "Armenian");
   Armenia.setwikiURI("https://en.wikipedia.org/wiki/Armenia");

   const Azerbaijan = new Country("Azerbaijan", "Republic of Azerbaijan", "Baku", "	Azerbaijani");
   Azerbaijan.setwikiURI("https://en.wikipedia.org/wiki/Azerbaijan");

   const Abkhazia = new Country("Abkhazia", "Republic of Abkhazia", "Sukhumi", "Abkhaz");
   Abkhazia.setwikiURI("https://en.wikipedia.org/wiki/Abkhazia");

   const Artsakh = new Country("Artsakh", "Republic of Artsakh", "Stepanakert", "Armenian");
   Artsakh.setwikiURI("https://en.wikipedia.org/wiki/Republic_of_Artsakh");

   const SouthOssetia = new Country("South Ossetia", "Republic of South Ossetia – The Free State of Alania", "Tskhinvali", "Ossetian");
   SouthOssetia.setwikiURI("https://en.wikipedia.org/wiki/South_Ossetia");

   // Armenia.name, Azerbaijan.name, Georgia.name, Russia.name, Abkhazia.name, Artsakh.name, SouthOssetia.name


   // FERTILE CRESCENT

   const Iraq = new Country("Iraq", "Republic of Iraq", "Baghdad", "Arabic");
   Iraq.setwikiURI("https://en.wikipedia.org/wiki/Iraq");
   
   const Jordan = new Country("Jordan", "Hashemite Kingdom of Jordan", "Amman", "Arabic");
   Jordan.setwikiURI("https://en.wikipedia.org/wiki/Jordan");

   const Israel = new Country("Israel", "State of Israel", "Jerusalem", "Hebrew");
   Israel.setwikiURI("https://en.wikipedia.org/wiki/Israel");

   const Lebanon = new Country("Lebanon", "Lebanese Republic", "Beirut", "Arabic");
   Lebanon.setwikiURI("https://en.wikipedia.org/wiki/Lebanon");

   const Palestine = new Country("Palestine", "State of Palestine", "Jerusalem", "Arabic");
   Palestine.setwikiURI("https://en.wikipedia.org/wiki/State_of_Palestine");

   const Syria = new Country("Syria", "Syrian Arab Republic", "Damascus", "Arabic");
   Syria.setwikiURI("https://en.wikipedia.org/wiki/Syria");

   // Iraq.name, Israel.name, Jordan.name, Lebanon.name, Palestine.name, Syria.name

   // OTHER: IRANIAN PLATEAU AND MEDITERRANEAN COUNTRIES

   // Iran.name, Cyprus.name, NorthernCyprus.name, Akrotiri.name

   const Iran = new Country("Iran", "Islamic Republic of Iran", "Teheran", "Persian");
   Iran.setwikiURI("https://en.wikipedia.org/wiki/Iran");

   const Akrotiri = new Country("Akrotiri and Dhekelia", "Sovereign Base Areas of Akrotiri and Dhekelia", "	Episkopi", "English");
   Akrotiri.setwikiURI("https://en.wikipedia.org/wiki/Akrotiri_and_Dhekelia");

   const NorthernCyprus = new Country("Northern Cyprus", "Turkish Republic of Northern Cyprus", "North Nicosia", "Turkish");
   NorthernCyprus.setwikiURI("https://en.wikipedia.org/wiki/Northern_Cyprus");

   const Cyprus = new Country("Cyprus", "Republic of Cyprus", "Nicosia", "Greek");
   Cyprus.setwikiURI("https://en.wikipedia.org/wiki/Cyprus");

// THE STANS

//Kazakhstan.name, Kyrgyzstan.name, Tajikistan.name, Turkmenistan.name,    Uzbekistan.name, Afghanistan.name, Pakistan.name

    const Pakistan = new Country("Pakistan", "Islamic Republic of Pakistan", "Islamabad", "English");
    Pakistan.setwikiURI("https://en.wikipedia.org/wiki/Pakistan");

    const Afghanistan = new Country("Afghanistan", "Islamic Republic of Afghanistan", "Kabul", "Pashto");
    Afghanistan.setwikiURI("https://en.wikipedia.org/wiki/Afghanistan");

    const Kyrgyzstan = new Country("Kyrgyzstan", "Kyrgyz Republic", "Bishkek", "Kyrgyz")
    Kyrgyzstan.setwikiURI("https://en.wikipedia.org/wiki/Kyrgyzstan");

    const Uzbekistan = new Country("Uzbekistan", "Republic of Uzbekistan", "Tashkent", "Uzbek");
    Uzbekistan.setwikiURI("https://en.wikipedia.org/wiki/Uzbekistan");

    const Turkmenistan = new Country("Turkmenistan", "Republic of Turkmenistan", "Ashgabat",  "Turkmen");
    Turkmenistan.setwikiURI("https://en.wikipedia.org/wiki/Turkmenistan");

    const Tajikistan = new Country("Tajikistan", "Republic of Tajikistan", "Dushanbe", "Tajik");
    Tajikistan.setwikiURI("https://en.wikipedia.org/wiki/Tajikistan");

    const Kazakhstan = new Country("Kazakhstan", "Republic of Kazakhstan", "Nur-Sultan", "Kazakh");
    Kazakhstan.setwikiURI("https://en.wikipedia.org/wiki/Kazakhstan");



   

  const Russia = new Country("Russia", "Russian Federation", "Moscow", "Russian");
  Russia.setwikiURI("https://en.wikipedia.org/wiki/Russia");



// AFRICA
  const Egypt = new Country("Egypt", "Arab Republic of Egypt", "Cairo", "Arabic");
  Egypt.wikiURI = "https://en.wikipedia.org/wiki/Egypt";












/*
  ************************************************************************************************************************************************************************************
*/

const EastAsia = {
    _name : "East Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/East_Asia",
    _countries : [China.name, Japan.name, Mongolia.name, Taiwan.name, Macau.name, HongKong.name, SouthKorea.name, NorthKorea.name],
    _akas : ["Far East"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

};

const WesternAsia = {
    _name : "Western Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Western_Asia",
    _countries : [Iraq.name, Israel.name, Jordan.name, Lebanon.name, Palestine.name, Syria.name, Egypt.name, Turkey.name, Armenia.name, Azerbaijan.name, Georgia.name, Russia.name, Abkhazia.name, Artsakh.name, SouthOssetia.name, Yemen.name, Oman.name, Qatar.name, Bahrain.name, Kuwait.name, SaudiArabia.name, ArabEmirates.name],
    _akas : ["Western Asia", "West Asia", "Southwestern Asia", "Southwest Asia"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

};

const NorthAsia ={
    _name : "North Asia",
    _wikiURI : "https://en.wikipedia.org/wiki/North_Asia",
    _countries : [ Russia.name ,/*Russia.siberia*/],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },

}

const CentralAsia = {
    _name : "Central Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Western_Asia",
    _countries : [Kazakhstan.name, Kyrgyzstan.name, Tajikistan.name, Turkmenistan.name,    Uzbekistan.name],
    //_akas : ["The 'stans"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

};

myCountry = Russia;

const STANS = {
    _name : "The 'stans",
    _wikiURI: "https://en.wikipedia.org/wiki/Western_Asia",
    _countries : [Kazakhstan.name, Kyrgyzstan.name, Tajikistan.name, Turkmenistan.name,    Uzbekistan.name, Afghanistan.name, Pakistan.name],
    //_akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

};

const Asia = {
    _name: "Asia",
    _wikiURI : "https://en.wikipedia.org/wiki/Asia",
    _regions : [EastAsia.name, WesternAsia.name, NorthAsia.name,
        
        /*
        
        Central Asia (The 'stans)
        South Asia (Indian subcontinent)
        Southeast Asia (East Indies and Indochina)
    */],
    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get regions()   {   return this._regions; },
}

const RingofFire = {
    _name : "Ring of Fire",
    _akas : ["Rim of Fire", "Circum-Pacific belt)"],
    _wikiURI : "https://en.wikipedia.org/wiki/Ring_of_Fire",
    _countries : ["Bolivia, Chile, Ecuador, Peru, Costa Rica, Guatemala, Mexico, United States, Canada, Russia, Phillippines, Indonesia, Antartica", Japan.name, NewZealand.name],
    _description: " is a major area in the basin of the Pacific Ocean where many earthquakes and volcanic eruptions occur. In a large 40,000 km (25,000 mi) horseshoe shape, it is associated with a nearly continuous series of oceanic trenches, volcanic arcs, and volcanic belts and plate movements. It has 452 volcanoes (more than 75% of the world's active and dormant volcanoes). \n\nAbout 90% of the world's earthquakes and about 81% of the world's largest earthquakes occur along the Ring of Fire. All but three of the world's 25 largest volcanic eruptions of the last 11,700 years occurred at volcanoes in the Ring of Fire. The Ring of Fire is a direct result of plate tectonics: the movement and collisions of lithospheric plates, especially subduction in the northern portion. The western portion is more complex, with a number of smaller tectonic plates in collision with the Pacific Plate from the Mariana Islands, the Philippines, Bougainville, Tonga, and New Zealand.",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get description()   {   return this._description },


}


// GEO REGIONS

const MiddleEast = {
    _name : "Middle East",
    _wikiURI: "https://en.wikipedia.org/wiki/Middle_East",
    _countries : [Egypt.name, /*Arabic Penninsula*/ Yemen.name, Oman.name, Qatar.name, Bahrain.name, Kuwait.name, SaudiArabia.name, ArabEmirates.name, Turkey.name, /*Fertile Crescent*/ Iraq.name, Israel.name, Jordan.name, Lebanon.name, Palestine.name, Syria.name, /**/ Iran.name, Cyprus.name, NorthernCyprus.name, Akrotiri.name],
    //_akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

};


// Geographic Regions


const Anatolia = {
    _name : "Anatolia",
    _wikiURI: "https://en.wikipedia.org/wiki/Anatolia",
    _countries : [Turkey.name],
    _akas : ["Asia Minor", "Asian Turkey", "Anatolian Peninsula", "Anatolian Plateau"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

};


const ArabianPeninsula = {
    _name : "Arabian Peninsula",
    _wikiURI: "https://en.wikipedia.org/wiki/Arabian_Peninsula",
    _countries : [Yemen.name, Oman.name, Qatar.name, Bahrain.name, Kuwait.name, SaudiArabia.name, ArabEmirates.name],
    _akas : ["Arabia"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

};
//console.log(ArabianPeninsula);

const Caucasus = {
    _name : "Caucasus",
    _wikiURI: "https://en.wikipedia.org/wiki/Caucasus",
    _countries : [Armenia.name, Azerbaijan.name, Georgia.name, Russia.name, Abkhazia.name, Artsakh.name, SouthOssetia.name],
    //_akas : [],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

};


const FertileCrescent = {
    _name : "Fertile Crescent",
    _wikiURI: "https://en.wikipedia.org/wiki/Fertile_Crescent",
    _countries : [Iraq.name, Israel.name, Jordan.name, Lebanon.name, Palestine.name, Syria.name, Egypt.name, Turkey.name],
    //_akas : [],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

}






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


  /*
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
