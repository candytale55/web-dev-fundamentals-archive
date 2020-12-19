// Javascript ES6
// THIS SOLUTION TAKES THE PUNCTUATED WORDS AS DIFFERENT WORDS . Example: "Sanctuary,"

/* 
- countUnnecessaryWords() takes to parameters a text in a string (story) and an array of words that needs to be counted (unnecessaryWords)
- The string "story" splitted into individual words in array storyWords.
- Then individual words inside *storyWords* are compared to a second array *unnecessaryWords* and counted.
- The function logs to the console,  the unnecessary word + the number of times it appears in the text.
- The function returns the array *countOfUnnecessaryWords* that contains just the count (needs to be in reference to *unnecessaryWords* to have any meaning). 
*/




let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let unnecessaryWords = ['extremely', 'literally', 'actually', 'Sanctuary'];
let countOfUnnecessaryWords = [];



function countUnnecessaryWords(story, unnecessaryWords){
    let countOfUnnecessaryWords = [];
    for (let k = 0; k < unnecessaryWords.length; k++){
        countOfUnnecessaryWords.push(0);
    }
    let storyWords = story.split(' ');
    for (let i = 0; i < storyWords.length; i++){
        for (let j = 0; j < unnecessaryWords.length; j++){
            if (storyWords[i] == unnecessaryWords[j]){
                countOfUnnecessaryWords[j] += 1;
            } 
        } 
    }
    for (let h = 0; h < unnecessaryWords.length; h++){
        console.log(unnecessaryWords[h] + " = " + countOfUnnecessaryWords[h]);
    }
    return countOfUnnecessaryWords;    
}

countUnnecessaryWords(story, unnecessaryWords);


