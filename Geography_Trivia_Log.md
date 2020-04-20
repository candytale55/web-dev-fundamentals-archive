20.04.20 Another day in COVID-19 confinement

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





