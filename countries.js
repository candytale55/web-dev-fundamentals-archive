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





myCountry = Singapore;


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
