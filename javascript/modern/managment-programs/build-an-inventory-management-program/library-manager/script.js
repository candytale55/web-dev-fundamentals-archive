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
    about: 'A book on how to develop creativity and innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth.',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

// Function to display all books in a formatted string
const displayBooks = (catalog) => {
  // Initialize output string with a heading
  let output = 'Books in the Library:\n';
  
  // Loop over each book and append formatted info to output
  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  // Return the final formatted string
  return output;
};

// Function to get an array of book summaries (about texts)
const getBookSummaries = (catalog) => {
  // Use map to extract the 'about' property from each book object
  return catalog.map((book) => book.about);
};

// Function to filter books by a given author
const getBooksByAuthor = (catalog, author) => {
  // Return a filtered array where book.author matches the author parameter
  return catalog.filter((book) => book.author === author);
};

// Function to calculate the total number of pages of all books
const getTotalPages = (catalog) => {
  // Use reduce to sum up the 'pages' property of each book
  // The 0 is the initial accumulator value
  return catalog.reduce((acc, book) => acc + book.pages, 0);
};

// Execute and log the results of the functions

const libraryBooks = displayBooks(library);
console.log(libraryBooks);  // Display all books

const bookSummaries = getBookSummaries(library);
console.log(bookSummaries); // Array of book summaries

const booksByArvidKahl = getBooksByAuthor(library, 'Arvid Kahl');
console.log(booksByArvidKahl); // Books authored by Arvid Kahl

const totalPagesOfBooksInLibrary = getTotalPages(library);
console.log(totalPagesOfBooksInLibrary); // Total pages count
