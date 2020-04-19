20.4.19  12:45 pm
Had to check the walktrhough video: https://www.youtube.com/watch?v=dfQlhjmb-P0&feature=emb_title

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

