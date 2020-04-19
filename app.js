/* You want a new way to decide what you are going to eat, using JS to create randomly a three-course meal based on a menu. We’ll run the program until we like the generated meal.

_courses: (object) map between each course and the dishes available for that course.

appetizers, mains, and desserts: (arrays) inside object _courses, 

addDishCourse(courseName, dishName, dishPrice) :  This method push dish object into the appropriate array in menu‘s _courses object, depending on the courseName that was passed in.

*/



const menu = {
    _courses : {
        appetizers : [],
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
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishCourse: function(courseName, dishName, dishPrice){
        const dish = {
            name: this.dishName,
            price: this.dishPrice
        };
        this._courses[courseName].push(dish);

    },
    getRandomDishFromCourse: function(courseName){
        let dishes = this._courses[courseName];
        let index = Math.floor(Math.random()*dishes.length);
        return dishes[index];
    },
    generateRandomMeal: function(){
        let myAppetizer = this.getRandomDishFromCourse(appetizers);
        let myMain = this.getRandomDishFromCourse(mains);
        let myDessert = this.getRandomDishFromCourse(desserts);
        return "Your random course is " + myAppetizer.name + ", " + myMain.name + ", " + myDessert.name + " and the price will be: " + (myAppetizer.price+ myMain.price + myDessert.price);
         
    }
}

let meal = menu.generateRandomMeal();


document.body.innerHTML = meal;