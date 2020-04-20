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





