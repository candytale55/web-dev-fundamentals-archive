const REGION = {
    _name : "",
    _wikiURI: "",
    _countries : [],
    _akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },

}

const CONTINENT = {
    _name : "",
    _wikiURI: "",
    _regions : [],
    _akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get regions() {   return this._regions; },
    get akas()      {   return this._akas;      },

}



/* ------------------------------------------------- */

const STANS = {
    _name : "The 'stans",
    _wikiURI: "https://en.wikipedia.org/wiki/Western_Asia",
    _countries : [Kazakhstan.name, Kyrgyzstan.name, Tajikistan.name, Turkmenistan.name, Uzbekistan.name, Afghanistan.name, Pakistan.name],
    //_akas : [""],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()      {   return this._akas;      },
};


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


const FertileCrescent = {
    _name : "Fertile Crescent",
    _wikiURI: "https://en.wikipedia.org/wiki/Fertile_Crescent",
    _countries : [Iraq.name, Israel.name, Jordan.name, Lebanon.name, Palestine.name, Syria.name, Egypt.name, Turkey.name],
    //_akas : [],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    //get akas()    {   return this._akas;      },
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


/* ---------------------------------------------------*/

const RingofFire = {
    _name : "Ring of Fire",
    _akas : ["Rim of Fire", "Circum-Pacific belt)"],
    _wikiURI : "https://en.wikipedia.org/wiki/Ring_of_Fire",
    _countries : [Bolivia.name, Chile.name, Ecuador.name, Peru.name, CostaRica.name, Guatemala.name, Mexico.name, UnitedStates.name, Canada.name, Russia.name, Phillippines.name, Indonesia.name, Antartica.name, Japan.name, NewZealand.name],
    _description: " is a major area in the basin of the Pacific Ocean where many earthquakes and volcanic eruptions occur. In a large 40,000 km (25,000 mi) horseshoe shape, it is associated with a nearly continuous series of oceanic trenches, volcanic arcs, and volcanic belts and plate movements. It has 452 volcanoes (more than 75% of the world's active and dormant volcanoes). \n\nAbout 90% of the world's earthquakes and about 81% of the world's largest earthquakes occur along the Ring of Fire. All but three of the world's 25 largest volcanic eruptions of the last 11,700 years occurred at volcanoes in the Ring of Fire. The Ring of Fire is a direct result of plate tectonics: the movement and collisions of lithospheric plates, especially subduction in the northern portion. The western portion is more complex, with a number of smaller tectonic plates in collision with the Pacific Plate from the Mariana Islands, the Philippines, Bougainville, Tonga, and New Zealand.",

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
    get description()   {   return this._description },
}


/* ----------------------------------------- */


const IndochinePeninsula = {
    _name : "Mainland Southeast Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Mainland_Southeast_Asia",
    _countries : [Cambodia.name, Laos.name, Myanmar.name, Malaysia.name, Thailand.name, Vietnam.name],
    _akas : ["Indochine Peninsula", "Indochinese Peninsula", "Indochina"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
}

const MalayArchipelago = {
    _name : "Maritime Southeast Asia",
    _wikiURI: "https://en.wikipedia.org/wiki/Maritime_Southeast_Asia",
    _countries : [Brunei.name, Indonesia.name, Malaysia.name, Philippines.name, Singapore.name, EastTimor.name],
    _akas : ["Island Southeast Asia", "Insular Southeast Asia", "Oceanic Southeast Asia", "Nusantara", "East Indies", "Malay Archipelago"],

    get name()      {   return this._name;      },
    get wikiURI()   {   return this._wikiURI;   },
    get countries() {   return this._countries; },
    get akas()      {   return this._akas;      },
}