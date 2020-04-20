/* A random way to decide what you are going to eat. JS creates randomly a three-course meal based on a menu and the total cost of said menu.

menu (object) - contains it all.

_courses (object): Contains three arrays, that are a map between each course and the dishes available for that course.

appetizers, mains, and desserts (arrays): part of object _courses 
These arrays will be populated with dish objects, through function addDishToCourse()

dish (object): Created inside addDishToCourse(), contains the name of the dish and its price, and is added to the "appetizers", "mains" or "desserts" arrays inside _courses by addDishToCourse().

addDishCourse(courseName, dishName, dishPrice) :  Pushes a dish object (dishName + dishPrice) into the courseName array inside object _courses. courseName should be either "appetizers", "mains" or "desserts".

getRandomDishFromCourse(courseName): Will be called by generateRandomMeal() three times, passing as argument the three different _course arrays "appetizers", "mains" or "desserts". The function generates a random index that will be used to get a dish from the _course arrays and will return these dishes objects (name + price). 

generateRandomMeal() calls getRandomDishFromCourse() to get random dishes and then logs these dishes and total price (sums the three dishPrices).
*/



const menu = {
    _courses : {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(appetizers){
        this._courses.appetizers = appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    set mains(mains){
        this._courses.mains = mains;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(desserts){
        this._courses.desserts = desserts;
    },
    get courses(){
        return {
            //return _courses; // also work instead : 
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name:  dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);

    },
    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },
    generateRandomMeal(){
        const myAppetizer = this.getRandomDishFromCourse("appetizers");
        const myMain = this.getRandomDishFromCourse("mains");
        const myDessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = myAppetizer.price+ myMain.price + myDessert.price;
        return "A " + myAppetizer.name + ", " + myMain.name + ", " + myDessert.name + " and the price will be: $" + totalPrice;    
    }
}


menu.addDishToCourse('appetizers', 'veggie soup', 3.5);
menu.addDishToCourse('appetizers', 'nachos', 5.5);
menu.addDishToCourse('appetizers', 'jabugo plate', 13.5);
//console.log(menu.appetizers[0]); // {name: "veggie soup", price: 3.5} Testing they get in.

menu.addDishToCourse('mains', 'Double cheese burger', 7.5);
menu.addDishToCourse('mains', 'Steak', 10.5);
menu.addDishToCourse('mains', 'Prawns', 9.75);

menu.addDishToCourse('desserts', 'Chocolate cake', 3.25);
menu.addDishToCourse('desserts', 'Ice cream', 2.70);
menu.addDishToCourse('desserts', 'Crepes', 3.50);

let meal = menu.generateRandomMeal();
//console.log(meal);

//document.body.innerHTML = meal;
document.getElementById("meal").innerHTML= meal;