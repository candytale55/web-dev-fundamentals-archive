/* You want a new way to decide what you are going to eat, using JS to create randomly a three-course meal based on a menu. We’ll run the program until we like the generated meal.

_courses: (object) map between each course and the dishes available for that course.

appetizers, mains, and desserts: (arrays) inside object _courses, 

addDishCourse(courseName, dishName, dishPrice) :  This method push dish object into the appropriate array in menu‘s _courses object, depending on the courseName that was passed in.

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
//console.log(menu.appetizers[0]); // {name: "veggie soup", price: 3.5}  So they are in.

menu.addDishToCourse('mains', 'Double cheese burger', 7.5);
menu.addDishToCourse('mains', 'Steak', 10.5);
menu.addDishToCourse('mains', 'Prawns', 9.75);

menu.addDishToCourse('desserts', 'Chocolate cake', 3.25);
menu.addDishToCourse('desserts', 'Ice cream', 1.50);
menu.addDishToCourse('desserts', 'Crepes', 3.50);

let meal = menu.generateRandomMeal();
console.log(meal);

//document.body.innerHTML = meal;
document.getElementById("meal").innerHTML= meal;