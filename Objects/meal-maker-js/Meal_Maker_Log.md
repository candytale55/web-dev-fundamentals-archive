20.4.20 10:16 am
Finished my comments and README info. This is the last entry of this log.

20.4.19 10:30 pm
Ok, it was one of those dumb mistakes. I was missing the "" in generateRandomMeal()
const myAppetizer = this.getRandomDishFromCourse("appetizers");
Doh!
The code is done. I just need to beautify it a little.

20.4.19 9:30 pm
generateRandomMeal() was sort-pf ok. At least what I changed does not solve the ReferenceError. I think that it is because there's no dishes created, therefore no appetizers. It could be just that. 

Nope, it wasn't that. I already created all the dishes. And the error remains the same. If I remove the appetizers line in  generateRandomMeal() I get an error for mains instead, and if I remove mains, I get it for desserts. So it should have to do with accessing these properties:

Uncaught ReferenceError: mains is not defined
    at Object.generateRandomMeal (app.js:60)
    at app.js:80

If I add this inside the parenthesis (why not?, I'm just meddling), like this
const myAppetizer = this.getRandomDishFromCourse(this.appetizers); then the error changes:
app.js:55 Uncaught TypeError: Cannot read property 'length' of undefined

    at Object.getRandomDishFromCourse (app.js:55)
    at Object.generateRandomMeal (app.js:59)
    at app.js:80


20.4.19  12:45 pm
Had to check the walktrhough video.
Removed this. from name:this.dishName and price:this.Price from addDishToCourse(). I also had missed the "return" on return this._courses[courseName].push(dish);
However these changes didn't solve ReferenceError below. 

I still have to check generateRandomMeal() my mistake should be there. 


20.4.19 - 11:34 am
I'm getting this error: 
app.js:58 Uncaught ReferenceError: appetizers is not defined
    at Object.generateRandomMeal (app.js:58)
    at app.js:66
generateRandomMeal @ app.js:58
(anonymous) @ app.js:66

