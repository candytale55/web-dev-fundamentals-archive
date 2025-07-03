// Define an array of book objects with details: title, author, summary, and page count
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

// Returns a formatted string listing all books in the catalog with title, author, and page count
function displayBooks(catalog) {
  let output = 'Books in the Library:\n';
  // Append each book's info to the output string
  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

// Returns an array containing only the summaries (about fields) of each book
function getBookSummaries(catalog) {
  return catalog.map((book) => book.about);
}

// Returns a filtered array of books written by the given author
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

// Returns the total number of pages in all books in the catalog
function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}





// Call displayBooks and log the output
const libraryBooks = displayBooks(library);
console.log(libraryBooks);

// Call getBookSummaries and log the array of summaries
const bookSummaries = getBookSummaries(library);
console.log(bookSummaries);

// Call getBooksByAuthor with 'Arvid Kahl' and log the result
const booksByArvidKahl = getBooksByAuthor(library, 'Arvid Kahl');
console.log(booksByArvidKahl);

// Call getTotalPages to get total page count and log it
const totalPagesOfBooksInLibrary = getTotalPages(library);
console.log(totalPagesOfBooksInLibrary);
