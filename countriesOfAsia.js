let myCountry;
let countries = []; // Holds all the countries names.

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

// ASIA


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

// THE STANS - CENTRAL ASIA

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


    // SOUTH ASIA

    /* Afghanistan.name, Bangladesh.name, Bhutan.name, Maldives.name, Nepal.name, India.name, Pakistan.name, SriLanka.name */

    const Afghanistan = new Country("Afghanistan", "Islamic Republic of Afghanistan", "Kabul", "Pashto");
    Afghanistan.setwikiURI("https://en.wikipedia.org/wiki/Afghanistan");

    const Bangladesh = new Country("Bangladesh", "People's Republic of Bangladesh", "Dhaka", "Bengali");
    Bangladesh.setwikiURI("https://en.wikipedia.org/wiki/Bangladesh");

    const Bhutan = new Country("Bhutan", "Kingdom of Bhutan", "Thimphu", "Bhutanese");
    Bhutan.setwikiURI("https://en.wikipedia.org/wiki/Bhutan");

    //const Maldives= new Island("Maldives", "Republic of Maldives", "Malé", "Dhivehi", "Indian", "Arabian Sea");
    const Maldives= new Country("Maldives", "Republic of Maldives", "Malé", "Dhivehi");
    Maldives.setwikiURI("https://en.wikipedia.org/wiki/Maldives");

    const Nepal = new Country("Nepal", " Federal Democratic Republic of Nepal", "Kathmandu", "Nepali");
    Nepal.setwikiURI("https://en.wikipedia.org/wiki/Nepal");

    const India = new Country("India", "Republic of India", "New Delhi","Hindi");
    India.setwikiURI("https://en.wikipedia.org/wiki/India");

    const Pakistan = new Country("Pakistan", "Islamic Republic of Pakistan", "Islamabad", "English");
    Pakistan.setwikiURI("https://en.wikipedia.org/wiki/Pakistan");

    const SriLanka = new Country("Sri Lanka", "Democratic Socialist Republic of Sri Lanka", "Sri Jayawardenepura Kotte", "Sinhala");
    //const SriLanka = new Island("Sri Lanka", "Democratic Socialist Republic of Sri Lanka", "Sri Jayawardenepura Kotte", "Sinhala", "Indian");
    SriLanka.setwikiURI("https://en.wikipedia.org/wiki/Sri_Lanka");


    // SOUTHEAST ASIA


    const Cambodia = new Country("Cambodia", "Kingdom of Cambodia", "Phnom Penh", "Khmer");
    Cambodia.setwikiURI("https://en.wikipedia.org/wiki/Cambodia");

    const Laos = new Country("Laos", "Lao People's Democratic Republic", "Vientiane", "Lao");
    Laos.setwikiURI("https://en.wikipedia.org/wiki/Laos");

    const Myanmar = new Country("Myanmar", "Republic of the Union of Myanmar", "Naypyidaw", "Burmese");
    Myanmar.setwikiURI("https://en.wikipedia.org/wiki/Myanmar");

    const Malaysia = new Country("Malaysia", "Malaysia", "Kuala Lumpur", "Malay");
    Malaysia.setwikiURI("https://en.wikipedia.org/wiki/Malaysia");

    const Thailand = new Country("Thailand", "Kingdom of Thailand", "Bangkok", "Thai");
    Thailand.setwikiURI("https://en.wikipedia.org/wiki/Thailand");
  
    const Vietnam = new Country("Vietnam", "Socialist Republic of Vietnam", "Hanoi", "Vietnamese");
    Vietnam.setwikiURI("https://en.wikipedia.org/wiki/Vietnam");

    const Brunei = new Country("Brunei", "Nation of Brunei, the Abode of Peace", "Bandar Seri Begawan", "English");
    Brunei.setwikiURI("https://en.wikipedia.org/wiki/Brunei");

    const EastTimor = new Country("East Timor", "Democratic Republic of Timor-Leste", "Dili", "Tetum");
    //const EastTimor = new Island("East Timor", "Democratic Republic of Timor-Leste", "Dili", "Tetum", "Pacific", "Timor Sea");
    EastTimor.setwikiURI("https://en.wikipedia.org/wiki/East_Timor");
    
    const Indonesia = new Country("Indonesia", "Republic of Indonesia", "Jakarta", "Indonesian");
    Indonesia.setwikiURI("https://en.wikipedia.org/wiki/Indonesia");

    const Philippines = new Country("Philippines", "Republic of the Philippines", "Manila", "Filipino");
    Philippines.setwikiURI("https://en.wikipedia.org/wiki/Philippines");
    
    const Singapore = new Country("Singapore", "Republic of Singapore", "Singapore", "English");
    Singapore.setwikiURI("https://en.wikipedia.org/wiki/Singapore");



    //Cambodia.name, Laos.name, Myanmar.name, Malaysia.name, Thailand.name, Vietnam.name, Brunei.name, Indonesia.name, Philippines.name, Singapore.name, EastTimor.name

    //  TRANSCONTINENTAL

  const Russia = new Country("Russia", "Russian Federation", "Moscow", "Russian");
  Russia.setwikiURI("https://en.wikipedia.org/wiki/Russia");

  const Egypt = new Country("Egypt", "Arab Republic of Egypt", "Cairo", "Arabic");
  Egypt.setwikiURI("https://en.wikipedia.org/wiki/Egypt");












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
    _countries : [Kazakhstan.name, Kyrgyzstan.name, Tajikistan.name, Turkmenistan.name, Uzbekistan.name],
    //_akas : ["The 'stans"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },

};
//myCountry = Russia;



const SouthAsia = {
    _name : "South Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/South_Asia",
    _countries : [Afghanistan.name, Bangladesh.name, Bhutan.name, Maldives.name, Nepal.name, India.name, Pakistan.name, SriLanka.name],
    _akas : ["Southern Asia","Indian Subcontinent"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

}

const SoutheastAsia = {
    _name : "Southeast Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Southeast_Asia",
    _countries : [Cambodia.name, Laos.name, Myanmar.name, Malaysia.name, Thailand.name, Vietnam.name, Brunei.name, Indonesia.name, Malaysia.name, Philippines.name, Singapore.name, EastTimor.name],
    _akas : ["Southeastern Asia"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
}





const Asia = {
    _name: "Asia",
    _wikiURI : "https://en.wikipedia.org/wiki/Asia",
    _regions : [EastAsia.name, WesternAsia.name, NorthAsia.name, CentralAsia.name, SouthAsia.name, SoutheastAsia.name
        
        /*
        SoutheastAsia (East Indies and Indochina)
    */],
    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get regions()   {   return this._regions; },
}























console.log(countries);


/* ------------------------------------------------------------------------------------*/

//FLAGS:

China.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/320px-Flag_of_the_People%27s_Republic_of_China.svg.png");
China.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_People%27s_Republic_of_China.svg");

Japan.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png");
Japan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Japan.svg");

Mongolia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/320px-Flag_of_Mongolia.svg.png");
Mongolia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Mongolia.svg");

Taiwan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/320px-Flag_of_the_Republic_of_China.svg.png");
Taiwan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_Republic_of_China.svg");

Macau.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/320px-Flag_of_Macau.svg.png");
Macau.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Macau.svg");

HongKong.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/320px-Flag_of_Hong_Kong.svg.png");
HongKong.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Hong_Kong.svg");

SouthKorea.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png");
SouthKorea.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_South_Korea.svg");

NorthKorea.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/320px-Flag_of_North_Korea.svg.png");
NorthKorea.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_North_Korea.svg");

Turkey.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/320px-Flag_of_Turkey.svg.png");
Turkey.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Turkey.svg");

Yemen.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/320px-Flag_of_Yemen.svg.png");
Yemen.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Yemen.svg");

Qatar.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/320px-Flag_of_Qatar.svg.png");
Qatar.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Qatar.svg");

Bahrain.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/320px-Flag_of_Bahrain.svg.png");
Bahrain.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Bahrain.svg");

Kuwait.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/320px-Flag_of_Kuwait.svg.png");
Kuwait.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Kuwait.svg");

SaudiArabia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png");
SaudiArabia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Saudi_Arabia.svg");

ArabEmirates.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png");
ArabEmirates.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_United_Arab_Emirates.svg");

Oman.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/320px-Flag_of_Oman.svg.png");
Oman.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Oman.svg");

Philippines.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/320px-Flag_of_the_Philippines.svg.png");
Philippines.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_Philippines.svg");

EastTimor.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/320px-Flag_of_East_Timor.svg.png");
EastTimor.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_East_Timor.svg");

Indonesia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/320px-Flag_of_Indonesia.svg.png");
Indonesia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Indonesia.svg");

Brunei.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/320px-Flag_of_Brunei.svg.png");
Brunei.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Brunei.svg");

Vietnam.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/320px-Flag_of_Vietnam.svg.png");
Vietnam.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Vietnam.svg");

Thailand.setwikiURI("flagFile","https://en.wikipedia.org/wiki/File:Flag_of_Thailand.svg");
Thailand.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/320px-Flag_of_Thailand.svg.png");

Malaysia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/320px-Flag_of_Malaysia.svg.png");
Malaysia.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Malaysia.svg");

Myanmar.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/320px-Flag_of_Myanmar.svg.png");
Myanmar.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Myanmar.svg");

Laos.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/320px-Flag_of_Laos.svg.png");
Laos.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Laos.svg");

Cambodia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/320px-Flag_of_Cambodia.svg.png");
Cambodia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Cambodia.svg");

SriLanka.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/320px-Flag_of_Sri_Lanka.svg.png");
SriLanka.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Sri_Lanka.svg");

Pakistan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png");
Pakistan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Pakistan.svg");

India.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png");
India.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_India.svg");

Nepal.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/197px-Flag_of_Nepal.svg.png");
Nepal.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Nepal.svg");

Maldives.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/320px-Flag_of_Maldives.svg.png");
Maldives.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Maldives.svg");

Bhutan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/320px-Flag_of_Bhutan.svg.png");
Bhutan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Bhutan.svg");

Bangladesh.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/320px-Flag_of_Bangladesh.svg.png");
Bangladesh.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Bangladesh.svg");

Kazakhstan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/320px-Flag_of_Kazakhstan.svg.png");
Kazakhstan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Kazakhstan.svg");

Afghanistan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/320px-Flag_of_Afghanistan.svg.png");
Afghanistan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Afghanistan.svg");

Tajikistan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/320px-Flag_of_Tajikistan.svg.png");
Tajikistan.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Tajikistan.svg");

Georgia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/320px-Flag_of_Georgia.svg.png");
Georgia.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Georgia.svg");

Armenia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/320px-Flag_of_Armenia.svg.png");
Armenia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Armenia.svg");

Azerbaijan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/320px-Flag_of_Azerbaijan.svg.png");
Azerbaijan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Azerbaijan.svg");

Abkhazia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Republic_of_Abkhazia.svg/320px-Flag_of_the_Republic_of_Abkhazia.svg.png");
Abkhazia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_the_Republic_of_Abkhazia.svg");

Artsakh.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_Artsakh.svg/320px-Flag_of_Artsakh.svg.png");
Artsakh.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Artsakh.svg");

SouthOssetia.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_South_Ossetia.svg/320px-Flag_of_South_Ossetia.svg.png");
SouthOssetia.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_South_Ossetia.svg");

Iraq.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/320px-Flag_of_Iraq.svg.png");
Iraq.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Iraq.svg");

Jordan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/320px-Flag_of_Jordan.svg.png");
Jordan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Jordan.svg");

Israel.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/320px-Flag_of_Israel.svg.png");
Israel.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Israel.svg");

Lebanon.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/320px-Flag_of_Lebanon.svg.png");
Lebanon.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Lebanon.svg");

Palestine.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/320px-Flag_of_Palestine.svg.png");
Palestine.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Palestine.svg");

Syria.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/320px-Flag_of_Syria.svg.png");
Syria.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Syria.svg");

Iran.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/320px-Flag_of_Iran.svg.png");
Iran.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Iran.svg");

NorthernCyprus.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg/320px-Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg.png");
NorthernCyprus.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg");

Egypt.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/320px-Flag_of_Egypt.svg.png");
Egypt.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Egypt.svg");

Russia.setFlag("https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png");
Russia.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Russia.svg");

Singapore.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/320px-Flag_of_Singapore.svg.png");
Singapore.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Singapore.svg");

Cyprus.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/320px-Flag_of_Cyprus.svg.png");
Cyprus.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Cyprus.svg");

Kyrgyzstan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/320px-Flag_of_Kyrgyzstan.svg.png");
Kyrgyzstan.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Kyrgyzstan.svg");

Uzbekistan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/320px-Flag_of_Uzbekistan.svg.png");
Uzbekistan.addRefURI("flagFile", "https://en.wikipedia.org/wiki/File:Flag_of_Uzbekistan.svg");

Turkmenistan.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/320px-Flag_of_Turkmenistan.svg.png");
Turkmenistan.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Turkmenistan.svg");

Yemen.setFlag("https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/320px-Flag_of_Yemen.svg.png");
Yemen.addRefURI("flagFile", "https://commons.wikimedia.org/wiki/File:Flag_of_Yemen.svg");


/*
.setFlag("");
.addRefURI("flagFile", "");
/*

.setFlag("");
.addRefURI("flagFile", "");
/*

.setFlag("");
.addRefURI("flagFile", "");
/*

.setFlag("");
.addRefURI("flagFile", "");
*/


// COUNTRY MAPS

/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");
*/


// CHINA

China.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/7f/China_CIA_map.png");
China.addRefURI("countryMapFile", "https://ast.wikipedia.org/wiki/Ficheru:China_CIA_map.png");

Japan.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/2/2c/Japan_sea_map.png");
Japan.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Japan_sea_map.png");

Mongolia.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Mongolia_CIA_map.png");
Mongolia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/c/c8/Mongolia_CIA_map.png");

Taiwan.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/7/71/Taiwan-CIA_WFB_Map.png");
Taiwan.addRefURI("countryMapFile","https://commons.wikimedia.org/wiki/File:Taiwan-CIA_WFB_Map.png");

Macau.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/a/a7/Macau-CIA_WFB_Map.png");
Macau.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Macau-CIA_WFB_Map.png");

HongKong.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/5/57/Hk-map.png");
HongKong.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:Hk-map.png");

SouthKorea.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_South_Korea");
SouthKorea.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/f/fd/Korea%2C_South-CIA_WFB_Map_%282004%29.png");
SouthKorea.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Korea,_South-CIA_WFB_Map_(2004).png");

NorthKorea.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/3/31/North_Korea_map.png");
NorthKorea.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:North_Korea_map.png");
NorthKorea.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_North_Korea");


HongKong.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Hong_Kong");
HongKong.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Hong_Kong_in_China_(zoomed)_(%2Ball_claims_hatched).svg");
HongKong.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hong_Kong_in_China_%28zoomed%29_%28%2Ball_claims_hatched%29.svg/603px-Hong_Kong_in_China_%28zoomed%29_%28%2Ball_claims_hatched%29.svg.png");

Singapore.addRefURI("countryMapFile", "https://en.wikipedia.org/wiki/File:CIA_World_Factbook_map_of_Singapore_(English).png");
Singapore.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/0/07/CIA_World_Factbook_map_of_Singapore_%28English%29.png");

Thailand.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thailand_map_CIA.png/276px-Thailand_map_CIA.png");
Thailand.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Thailand_map_CIA.png");

Cambodia.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/1/12/Cb-map.png");
Cambodia.addRefURI("countryMapFile", "https://commons.wikimedia.org/wiki/File:Cb-map.png");

EastTimor.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/5/50/Osttimor.png");
EastTimor.addRefURI("countryMapFile", "https://upload.wikimedia.org/wikipedia/commons/5/50/Osttimor.png");
EastTimor.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_East_Timor");






Turkey.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Turkey");
Turkey.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/e/eb/Tu-map.png");
Turkey.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Tu-map.png");


Yemen.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Yemen");
Yemen.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/0/03/Yemen-map.gif");
Yemen.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Yemen-map.gif");



Qatar.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Qatar");
Qatar.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/8/8a/Qa-map.PNG");
Qatar.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Qa-map.PNG");




Bahrain.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Bahrain");
Bahrain.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/5/52/Bahrain_map.png");
Bahrain.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Bahrain_map.png");



Kuwait.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Kuwait");
Kuwait.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/2/2d/Ku-map.png");
Kuwait.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Ku-map.png");



myCountry = Egypt;

Egypt.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Egypt");
Egypt.setCountryMap("https://upload.wikimedia.org/wikipedia/commons/0/02/Eg-map.png");
Egypt.addRefURI("CountryMapFile", "https://commons.wikimedia.org/wiki/File:Eg-map.png");

Egypt.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/LocationEgypt.svg/640px-LocationEgypt.svg.png");
Egypt.addRefURI("regionMapFile", "");

Egypt.addRefURI("redLocationMap", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/LocationEgypt.svg/640px-LocationEgypt.svg.png");
Egypt.addRefURI("redLocationMapFile", "https://commons.wikimedia.org/wiki/File:LocationEgypt.svg");

/*

.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");
/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");

/*
.addRefURI("wikiAtlas", "");
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");


Egypt.addRefURI("redLocationMap", "");
Egypt.addRefURI("redLocationMapFile", "");
*/


Qatar.setRegionMap("");
Qatar.addRefURI("regionMapFile", "");

Yemen.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Yemen_in_its_region.svg/640px-Yemen_in_its_region.svg.png");
Yemen.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Yemen_in_its_region.svg");

EastTimor.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/East_Timor_in_its_region.svg/640px-East_Timor_in_its_region.svg.png");
EastTimor.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:East_Timor_in_its_region.svg");

Bahrain.setRegionMap("");
Bahrain.addRefURI("regionMapFile", "");

Kuwait.setRegionMap("");
Kuwait.addRefURI("regionMapFile", "");

Cambodia.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Cambodia_(location_map_scheme)");
Cambodia.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Cambodia_in_its_region.svg");

Japan.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Japan_in_its_region_%28de-facto%29.svg/640px-Japan_in_its_region_%28de-facto%29.svg.png");
Japan.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Japan_in_its_region_(de-facto).svg");

Thailand.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Thailand");
Thailand.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LocationThailand.svg/640px-LocationThailand.svg.png");
Thailand.addRefURI("regionMapFile", "https://ast.wikipedia.org/wiki/Ficheru:LocationThailand.svg");

Singapore.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Singapore_in_its_region_%28zoom%29.svg/640px-Singapore_in_its_region_%28zoom%29.svg.png");
Singapore.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Singapore_in_its_region_(zoom).svg");

Mongolia.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:Mongolia_in_Asia.svg");
Mongolia.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mongolia_in_Asia.svg/540px-Mongolia_in_Asia.svg.png");

Taiwan.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Taiwan_in_its_region.svg/640px-Taiwan_in_its_region.svg.png");
Taiwan.addRefURI("regionMapFile","https://commons.wikimedia.org/wiki/File:Taiwan_in_its_region.svg");
  
Macau.addRefURI("wikiAtlas", "https://commons.wikimedia.org/wiki/Atlas_of_Macau");
Macau.addRefURI("regionMapFile", "https://en.wikipedia.org/wiki/File:Macau_locator_map.svg");
Macau.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Macau_locator_map.svg/565px-Macau_locator_map.svg.png");



//SVG LOCATORS
China.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_China_(location_map_scheme)");
Japan.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Japan_(location_map_scheme)");
Mongolia.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Mongolia_(location_map_scheme)");
Taiwan.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_the_Republic_of_China_(location_map_scheme)");
Macau.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Macau_(location_map_scheme)");
HongKong.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Hong_Kong_(location_map_scheme)");
SouthKorea.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_South_Korea_(location_map_scheme)");
NorthKorea.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_North_Korea_(location_map_scheme)");
Turkey.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Turkey_(location_map_scheme)");

EastTimor.addRefURI("SVG_locator", "https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_East_Timor_(location_map_scheme)");
Cambodia.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cambodia_in_its_region.svg/640px-Cambodia_in_its_region.svg.png");
Thailand.addRefURI("SVG_locator","https://commons.wikimedia.org/wiki/Category:SVG_locator_maps_of_Thailand_(location_map_scheme)");



/*
.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/



Turkey.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Turkey_in_its_region.svg/640px-Turkey_in_its_region.svg.png");
Turkey.addRefURI("regionMapFile", "https://commons.wikimedia.org/wiki/File:Turkey_in_its_region.svg");



// REGION MAPS

China.setRegionMap("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CHN_orthographic.svg/480px-CHN_orthographic.svg.png");


/*
.setRegionMap("");
.addRefURI("regionMapFile", "");

.setFlag("");
.addRefURI("flagFile", "");

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/












/*
.setCountryMap("");
.addRefURI("CountryMapFile", "");

.setRegionMap("");
.addRefURI("regionMapFile", "");

.setFlag("");
.addRefURI("flagFile", "");

.addRefURI("SVG_locator", "");
.setRegionMap("");
.addRefURI("regionMapFile", "");
*/






/* -------------------------------------------------------------------------------------*/
// TRIVIA DATA:

China.languages.push("Mongolian", "Uyghur", "Tibetan", "Zhuang");
China.cities.push("Shangai", "Chongqing");
China.addRefURI("globeFile", "https://commons.wikimedia.org/wiki/File:CHN_orthographic.svg");






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
document.getElementById("regionMap").src = myCountry.regionMap;
document.getElementById("ocean").innerHTML = myCountry.ocean;
document.getElementById("sea").innerHTML = myCountry.sea;
document.getElementById("islands").innerHTML = JSON.stringify(myCountry.islands);
document.getElementById("URIs").innerHTML = JSON.stringify(myCountry.URIs);
