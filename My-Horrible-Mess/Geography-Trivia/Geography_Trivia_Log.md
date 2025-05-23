09/05/2020
Volví a mover todo. Dejé a countries solo con las propiedades del constructor + la wikiURI para poder darle forma al programa, si no nunca voy a acabar. Necesito crear ya las clases para las regiones geográficas. Casí todo ASIA quedó hecho (paises son objetos, pues).

08/05/2020
no puedo usar isArchipielago con objetos de la classe Country. Tengo que replantear la propiedad.

06-05-2020
Problems pushing stuff with spread operator like here:

 addLanguages(...newLanguage){ 
   // spread operator gets all the items as an array, still have to work how to solve it.
Like here:  ["French",["Nengone","Paicî","Ajië","Drehu"]]

05/05/2020
I finally discovered there is no such thing as pushing stuff into an object, but I solved how to fill my _URIs object.  

05/05/2020
Started using branches with bash. 

04.05.2020
Started practicing with classes in countries.js, and inheritance. I have no problems working with 1 level of inheritance (Island extends Country), but not with 2 levels (OceaniaIsland extends Island which should have extended Country.) There are a lot of comments where things didn't work out that I will have to fix before adding more stuff. I still haven't solved the transpilation issue to work with modules.  And I have to create a new branch in Bash to be able to get everything up-to-date (another stupid mistake I made while commiting a few days ago and I now have to learn to fix).

04.05.2020
Used underscore to make object properties not directly accessible and added getters and setters for practice in anySpeakingCountry - it didn't work. I'll have to check what I did wrong. They are contained in countriesObjects.js.
I also started creating a Country class to practice them too now in countries.js, and because they are the correct way to deal with country object creation, duh! 

02.05.2020
Started trying to use modules, but I can't use them without transpilation it seems. Will keep adding missing countries and later I'll see about transpiling the stuff. At least I got the object creation stuff really clear now. 

30.04.2020
I added several more countries. I linked specific properties with to display with innerHTML, including wiki page, countryMap, regionMap. Right now it works true variable myCountry. It will becom random later.  

27.04.2020


20.04.25 
I've created an additional js file SpanishCountries.js where I'm practicing object creation. I got issues with the populations of different arrays, because I'm changing some of the countries languages until later (Brazil). Of course I should do instead a new PortugueseSpeakingCountry object factory but since thare are very few Portuguese speaking countries I thought I'll try and practice object modification.  
let countries = [];
let spanishCountries = [];
let portugueseCountries = [];
let latinAmericanCountries = [];

20.04.20 Another day in COVID-19 confinement

14:25
Oh, I finally see what's the matter with getters and setters. 
From tutorial:   JavaScript does not have  privacy built-in for objects. JS developers follow naming conventions like place an underscore _ before the name of a property that should not be altered. 
Getters and setters are used to respect the intention of properties prepended (that began with _). Getters return the value of internal properties and setters can reassign property values safely.

14:17
this: Inside the scope of methods in objects. Let's say a .purchase() method inside object store we don’t automatically have access to other properties of the store object. We need to use this keyword.

Note from tutorial: Does this 6 always refer to an object? Yes, the important thing is to know which object. Check https://discuss.codecademy.com/t/does-this-always-refer-to-an-object/367433 

Arrow functions : Do not use inside objects, but if you must, you don't use this.object, but the complete reference to it.  Like this: 
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${robot.energyLevel}%.`)
  }
}
And that may not work either if you create more robots. Check: https://discuss.codecademy.com/t/why-do-arrow-functions-exist-and-how-could-you-use-them-in-objects-if-you-wanted-to/367438


13:00
Bueno, agregué la función generateRandomCards() y no ha necesitado los setters y los getters para funcionar. Note to self: You have to use dot notation to return the data.

    return "Estos son los paises: " + myEuropeCountry.name +", "+ myAmericaCountry.name +", "+ myOceaniaCountry.name +", "+ myAfricaCountry.name +", "+ myAsiaCountry.name;

 At first I tried to return the objects and I got just [Object Object]
 return myAsiaCountry, myEuropeCountry, myAmericaCountry, myOceaniaCountry, myAfricaCountry;



11:19 am
NOTE from tutorial:  Properties cannot share the same name as the getter/setter functions. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name.

When I tried to call addCountryTo_Geo_Area("Europe", "Latvia", "Riga");
I got : Uncaught ReferenceError: addCountryTo_Geo_Area is not defined

Added .countries as .countries.addCountryTo_Geo_Area("Europe", "Latvia", "Riga");

And the error message dissapeared, but the country didn't updated. I have not added the setters and getters. I think that is the reason.  >>>>> NO IT WASN'T - I added the getters and setters and removed them and it made no difference. I'm not sure if they are needed for this job. What made the difference was adding the index, or it displays just [Object, Object]
document.getElementById("country_card").innerHTML= " :) Testing :) " + countries._geo_areas.Europe[0].name;

I will not add them until I see they are missed in some part of the program. 

get Europe(){
    return this._geo_areas.Europe;
},
set Europe(Europe){
    this._geo_areas.Europe = Europe;
},



10:00 am
Note to self: Notice that once you created the top object by assigning it with = , the interior objects, arrays and other properties are created with :

const countries = {
_geo_areas: {
  Europe : [],
  America: [],
  Africa: [],
  Asia: [],
  Oceania: [],
}
}






