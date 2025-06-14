// Get DOM elements for playlist container and player controls
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

// Array of all available songs with their metadata
const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
    },
    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
    },
    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
    },
    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
    },
    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
    },
    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
    },
];

// Create an Audio object to play music
const audio = new Audio();


// Object to track current playlist, current song, and playback time
let userData = {
    songs: [...allSongs], // Current playlist (initially all songs)
    currentSong: null,    // Currently playing song (null if none)
    songCurrentTime: 0,   // Current playback position in seconds
};

// Function to start playing a song by its ID
const playSong = (id) => {
    // Find the song in the current playlist by ID
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    // If no current song or switching to a different song, reset time to 0
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        // If resuming the same song, continue from last saved time
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;     // Update current song in userData
    playButton.classList.add("playing"); // Add CSS class indicating playing state

    highlightCurrentSong();   // Visually highlight the song in the playlist
    setPlayerDisplay();      // Update the player display with song info
    setPlayButtonAccessibleText(); // Update aria-label for accessibility

    audio.play();            // Play the audio
};


// Function to pause the currently playing song
const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime; // Save current playback time

    playButton.classList.remove("playing"); // Remove playing state class
    audio.pause(); // Pause the audio
};

// Function to play the next song in the playlist
const playNextSong = () => {
    // If no song is currently playing, start with the first song
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        // Get the index of the current song
        const currentSongIndex = getCurrentSongIndex();
        // Get the next song in the list (may be undefined if at the end)
        const nextSong = userData?.songs[currentSongIndex + 1];

        // Play the next song if it exists
        playSong(nextSong.id);
    }
};

// Function to play the previous song in the playlist
const playPreviousSong = () => {
    // If no current song, do nothing
    if (userData?.currentSong === null) return;
    else {
        // Get the index of the current song
        const currentSongIndex = getCurrentSongIndex();
        // Get the previous song in the list (may be undefined if at the start)
        const previousSong = userData?.songs[currentSongIndex - 1];

        // Play the previous song if it exists
        playSong(previousSong.id);
    }
};

// Function to shuffle the playlist randomly
const shuffle = () => {
    // Randomly reorder the songs array
    userData?.songs.sort(() => Math.random() - 0.5);
    // Reset current song and playback time since playlist changed
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    renderSongs(userData?.songs); // Re-render the playlist UI
    pauseSong();                  // Pause any playing audio
    setPlayerDisplay();           // Clear or update the player display
    setPlayButtonAccessibleText(); // Update play button aria-label accordingly
};

// Function to delete a song by its ID from the playlist
const deleteSong = (id) => {
    // If the song being deleted is currently playing, reset playback
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();        // Pause the current playback
        setPlayerDisplay(); // Update the player display to reflect no song playing
    }

    // Remove the song from the songs array
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs); // Update the playlist UI after deletion
    highlightCurrentSong();        // Update which song is highlighted (if any)
    setPlayButtonAccessibleText(); // Update the play button aria-label accordingly
};


// Function to update the player UI display with the current song's title and artist
const setPlayerDisplay = () => {
    // Get the elements where song info will be displayed
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
    // Get current song details if any
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;

    // Set the text content or clear if no current song
    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
};

// Function to highlight the currently playing song in the playlist UI
const highlightCurrentSong = () => {
    // Get all playlist song elements
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    // Find the DOM element of the current song to highlight
    const songToHighlight = document.getElementById(
        `song-${userData?.currentSong?.id}`
    );

    // Remove the aria-current attribute from all songs (remove highlighting)
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    // Set aria-current="true" on the currently playing song (if any)
    if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

// Function to render the list of songs in the playlist UI
const renderSongs = (array) => {
    // Generate HTML for each song in the array using map and template literals
    const songsHTML = array
        .map((song) => {
            return `
      <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/>
          </svg>
        </button>
      </li>
      `;
        })
        .join(""); // Join all list items into a single string

    playlistSongs.innerHTML = songsHTML; // Set the playlist container HTML

    // If no songs remain, show a Reset Playlist button to restore defaults
    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        // Add click handler for reset button to restore default song list
        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs]; // Reset songs to original list

            renderSongs(sortSongs());       // Render the sorted songs
            setPlayButtonAccessibleText(); // Update play button aria-label
            resetButton.remove();           // Remove the reset button from DOM
        });
    }
};

// Updates the play button's aria-label for screen readers with the current song title or a default
const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0]; // Use current song or first song in list

    playButton.setAttribute(
        "aria-label",
        song?.title ? `Play ${song.title}` : "Play"
    );
};


// Returns the index of the current song in the user's song list
const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

// Event listener for the play button
playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        // If no song is selected, start with the first song
        playSong(userData?.songs[0].id);
    } else {
        // Otherwise, play the current song (resumes if paused)
        playSong(userData?.currentSong.id);
    }
});


// Event listener for the pause button to pause the current song
pauseButton.addEventListener("click", pauseSong);

// Event listener for the next button to play the next song
nextButton.addEventListener("click", playNextSong);

// Event listener for the previous button to play the previous song
previousButton.addEventListener("click", playPreviousSong);

// Event listener for shuffle button to shuffle the playlist
shuffleButton.addEventListener("click", shuffle);


// When the current song ends, automatically play the next song or reset UI if none left
audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
        playNextSong();
    } else {
        // No more songs to play, reset player state and UI
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
        highlightCurrentSong();
        setPlayButtonAccessibleText();
    }
});



// Sort the songs alphabetically by title
const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    });

    return userData?.songs;
};

// Initial rendering of sorted songs and setting accessible play button text on page load
renderSongs(sortSongs());
setPlayButtonAccessibleText();
