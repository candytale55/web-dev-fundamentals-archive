
/*
Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). 

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. DON't use replace. Here are the requirements:

* The input is a string with spaces and title-cased words
* The output is a string with the spaces between words replaced by a hyphen (-)
* The output should be all lower-cased letters
* The output should not have any spaces
*/




function urlSlug(title) {
  return title
  .trim()
  .split(" ")
  .filter(substr => substr!== "")
  .join("-")
  .toLowerCase()
}


console.log(urlSlug("Winter Is Coming"));
console.log(urlSlug(" Winter Is  Coming"));
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug("Hold The Door"));