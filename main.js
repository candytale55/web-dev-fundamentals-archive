
class Person{
    constructor(name, gender, nationality, category) {
        this._name = name;
        this._gender = gender;
        this._CON = nationality;  // CON "Country of nationality"
        //this._country = [country];
        this._category = [category];
    }
    get name(){
        return this._name;
    }
    get gender(){
        return this._gender;
    }
    get CON(){
        return this._CON;
    }
    get category(){
        return this._category;
    }

    wasBorn(date, place){
        this._DOB = date;
        if (place !== undefined){
            this._POB = place;
        }
    }
    get DOB(){
        return this._DOB;
    }
    get POB(){
        return this._POB;
    }

    setimg(imageURI){
        this._img = imageURI;
    }
    get img(){
        return this._img;
    }

    setwikiURI(URI){
        this._wikiURI = URI;
    }
    get wikiURI(){
        return this._wikiURI;
    }

}


const AnneBonny = new Person("Anne Bonny", "female", "Irish", "Pirate");
AnneBonny.setwikiURI("https://en.wikipedia.org/wiki/Anne_Bonny");
AnneBonny.setimg("https://upload.wikimedia.org/wikipedia/commons/archive/b/be/20060312000312%21Bonney%2C_Anne_%281697-1720%29.jpg")
AnneBonny.wasBorn("possibly 1697", "Kingdom of Ireland");


const myPerson = AnneBonny;


document.getElementById("show").innerHTML = JSON.stringify(myPerson);