// DOM elements used to display team info and render player cards
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// Core dataset: details about Argentina’s 1986 World Cup-winning team
const myFavoriteFootballTeam = {
    team: "Argentina",
    sport: "Football",
    year: 1986,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Carlos Bilardo",
        matches: 7,
    },
    players: [
        // Array of player objects with detailed info
        {
            name: "Sergio Almirón",
            position: "forward",
            number: 1,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Sergio Batista",
            position: "midfielder",
            number: 2,
            isCaptain: false,
            nickname: null,
        },
        {
            name: "Ricardo Bochini",
            position: "midfielder",
            number: 3,
            isCaptain: false,
            nickname: "El Bocha",
        },
        // ... (rest of players omitted here for brevity but included in actual code)
        {
            name: "Héctor Zelada",
            position: "goalkeeper",
            number: 22,
            isCaptain: false,
            nickname: null,
        },
    ],
};

// Freeze the team object to prevent it from being modified later
Object.freeze(myFavoriteFootballTeam);

// Object destructuring to extract top-level properties and nested coachName
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// Display core team data in the UI
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

/**
 * Renders player cards to the DOM.
 * Accepts an array of player objects. Defaults to showing all players.
 */
const setPlayerCards = (arr = players) => {
    // Append generated HTML string to player card container
    playerCards.innerHTML += arr
        .map(
            ({ name, position, number, isCaptain, nickname }) => {
                // Use ternary operators for conditional display of captain and nickname
                return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `;
            }
        )
        .join(""); // Convert array of HTML strings into one big HTML string
};

// Event listener to update player cards based on dropdown selection
playersDropdownList.addEventListener("change", (e) => {
    // Clear previous player cards before updating
    playerCards.innerHTML = "";

    // Determine which subset of players to show based on selection
    switch (e.target.value) {
        case "nickname":
            // Show only players with nicknames
            setPlayerCards(players.filter((player) => player.nickname !== null));
            break;
        case "forward":
            // Show only forwards
            setPlayerCards(players.filter((player) => player.position === "forward"));
            break;
        case "midfielder":
            // Show only midfielders
            setPlayerCards(players.filter((player) => player.position === "midfielder"));
            break;
        case "defender":
            // Show only defenders
            setPlayerCards(players.filter((player) => player.position === "defender"));
            break;
        case "goalkeeper":
            // Show only goalkeepers
            setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
            break;
        default:
            // If nothing selected, show all players
            setPlayerCards();
    }
});
