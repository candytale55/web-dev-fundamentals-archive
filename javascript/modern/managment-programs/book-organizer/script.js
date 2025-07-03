// Define an array of book objects, each with a title, authorName, and releaseYear
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

// Define a callback function to compare books by their releaseYear
const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    // Return -1 if the first book was released before the second
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    // Return 1 if the first book was released after the second
    return 1;
  } else {
    // Return 0 if both books were released in the same year
    return 0;
  }
};

// Define a reusable function to filter books by year and sort them
const filterBooksByYear = (year, array) => {
  return array
    .filter((e) => e.releaseYear >= year)  // Keep only books released on or after the given year
    .sort(sortByYear);                     // Sort the filtered books using the sortByYear callback
};

// Test sortByYear directly by comparing two books
console.log(sortByYear(
  {
    title: "My Booky Wook",
    authorName: "Russell Brand",
    releaseYear: 2007,
  },
  {
    title: "I Feel Bad About My Neck: And Other Thoughts on Being a Woman",
    authorName: "Nora Ephron",
    releaseYear: 2006,
  }
)); // Expected output: 1 (because 2007 > 2006)

// === FINAL LOGIC THAT PASSED THE TUTORIAL TEST ===

// Filter books released on or after the year 2000
const filteredBooks = books.filter((book) => book.releaseYear >= 2000);

// Sort the filtered books using the sortByYear callback
filteredBooks.sort(sortByYear);

// Output the final sorted and filtered array
console.log(filteredBooks);
