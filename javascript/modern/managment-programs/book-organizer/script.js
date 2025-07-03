const books = [
  {
    title: "Go the F**k to Sleep",
    authorName: "Adam Mansbach",
    releaseYear: 2011,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    authorName: "Douglas Adams",
    releaseYear: 1979,
  },
  {
    title: "Good Omens",
    authorName: "Neil Gaiman and Terry Pratchett",
    releaseYear: 1990,
  },
  {
    title: "Me Talk Pretty One Day",
    authorName: "David Sedaris",
    releaseYear: 2000,
  },
  {
    title: "Bossypants",
    authorName: "Tina Fey",
    releaseYear: 2011,
  },
  {
    title: "Let's Pretend This Never Happened",
    authorName: "Jenny Lawson",
    releaseYear: 2012,
  },
  {
    title: "Is Everyone Hanging Out Without Me? (And Other Concerns)",
    authorName: "Mindy Kaling",
    releaseYear: 2011,
  },
  {
    title: "My Booky Wook",
    authorName: "Russell Brand",
    releaseYear: 2007,
  },
  {
    title: "Sh*t My Dad Says",
    authorName: "Justin Halpern",
    releaseYear: 2010,
  },
  {
    title: "I Feel Bad About My Neck: And Other Thoughts on Being a Woman",
    authorName: "Nora Ephron",
    releaseYear: 2006,
  },
];


const sortByYear = (book1, book2) => {
  
  if (book1.releaseYear < book2.releaseYear){
    //should return -1 if the releaseYear of the first book is smaller than that of the second book.
    return -1;
  }
  if (book1.releaseYear > book2.releaseYear){
    //should return 1 if the releaseYear of the first book is bigger than that of the second book.
    return 1;
  }
  if (book1.releaseYear === book2.releaseYear){
    // should return 0 if both releaseYear values are equal.
    return 0;
  }
}



const filterBooksByYear = (year, array) => {
  
  return array
    .filter((e)=> e.releaseYear >= year)
    .sort((a,b)=>a.releaseYear - b.releaseYear);
  
  // filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks
  // You should sort the books in the filteredBooks array according to their releaseYear in ascending order. 
};


console.log(sortByYear(  {
    title: "My Booky Wook",
    authorName: "Russell Brand",
    releaseYear: 2007,
  }, {
    title: "I Feel Bad About My Neck: And Other Thoughts on Being a Woman",
    authorName: "Nora Ephron",
    releaseYear: 2006,
  }));

const filteredBooks = filterBooksByYear(2000, books);
console.log(filteredBooks);