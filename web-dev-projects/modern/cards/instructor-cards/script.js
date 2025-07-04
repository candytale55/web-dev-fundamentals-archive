// Reference to the author container and load more button elements
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Pagination indices for batching authors
let startingIndex = 0;
let endingIndex = 8;

// This array will store all the authors fetched from the API
let authorDataArr = [];

// Fetch author data from the freeCodeCamp endpoint
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res) => res.json())
    .then((data) => {
        authorDataArr = data;

        // Display the initial batch of authors
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    })
    .catch((err) => {
        // Display error message if fetching fails
        authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
    });

// Loads the next batch of authors when the button is clicked
const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;

    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

    // Disable the button if all data has been loaded
    if (authorDataArr.length <= endingIndex) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.cursor = "not-allowed";
        loadMoreBtn.textContent = 'No more data to load';
    }
};

// Renders a list of author cards into the container
const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar">
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author} author page</a>
      </div>
    `;
    });
};

// Attach click event listener to Load More button
loadMoreBtn.addEventListener('click', fetchMoreAuthors);
