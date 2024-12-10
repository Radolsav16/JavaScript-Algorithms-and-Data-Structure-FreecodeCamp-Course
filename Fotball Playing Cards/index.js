const teamSpan = document.querySelector("#team");
const sportSpan = document.querySelector('#sport');
const yearSpan = document.querySelector('#year');
const headCoachSpan = document.querySelector('#head-coach');

const divPlayersCard = document.querySelector('#player-cards');
const selectPlayers = document.querySelector('#players');

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
      {
        name: "Claudio Borghi",
        position: "midfielder",
        number: 4,
        isCaptain: false,
        nickname: "Bichi",
      },
      {
        name: "José Luis Brown",
        position: "defender",
        number: 5,
        isCaptain: false,
        nickname: "Tata",
      },
      {
        name: "Daniel Passarella",
        position: "defender",
        number: 6,
        isCaptain: false,
        nickname: "El Gran Capitán",
      },
      {
        name: "Jorge Burruchaga",
        position: "forward",
        number: 7,
        isCaptain: false,
        nickname: "Burru",
      },
      {
        name: "Néstor Clausen",
        position: "defender",
        number: 8,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "José Luis Cuciuffo",
        position: "defender",
        number: 9,
        isCaptain: false,
        nickname: "El Cuchu",
      },
      {
        name: "Diego Maradona",
        position: "midfielder",
        number: 10,
        isCaptain: true,
        nickname: "El Pibe de Oro",
      },
      {
        name: "Jorge Valdano",
        position: "forward",
        number: 11,
        isCaptain: false,
        nickname: "The Philosopher of Football",
      },
      {
        name: "Héctor Enrique",
        position: "midfielder",
        number: 12,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Oscar Garré",
        position: "defender",
        number: 13,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ricardo Giusti",
        position: "midfielder",
        number: 14,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Luis Islas",
        position: "goalkeeper",
        number: 15,
        isCaptain: false,
        nickname: "El loco",
      },
      {
        name: "Julio Olarticoechea",
        position: "defender",
        number: 16,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Pedro Pasculli",
        position: "forward",
        number: 17,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Nery Pumpido",
        position: "goalkeeper",
        number: 18,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Oscar Ruggeri",
        position: "defender",
        number: 19,
        isCaptain: false,
        nickname: "El Cabezón",
      },
      {
        name: "Carlos Tapia",
        position: "midfielder",
        number: 20,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Marcelo Trobbiani",
        position: "midfielder",
        number: 21,
        isCaptain: false,
        nickname: "Calesita",
      },
      {
        name: "Héctor Zelada",
        position: "goalkeeper",
        number: 22,
        isCaptain: false,
        nickname: null,
      },
    ],
  };

  teamSpan.textContent = myFavoriteFootballTeam.team;
  yearSpan.textContent = myFavoriteFootballTeam.year;
  sportSpan.textContent = myFavoriteFootballTeam.sport;
  headCoachSpan.textContent = myFavoriteFootballTeam.headCoach.coachName;


const playerCardTemplate = (arr = []) => {
    divPlayersCard.innerHTML = arr.map(({name,position,number,isCaptain,nickname}) => {
       return `
         <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
`}).join("");
}


selectPlayers.addEventListener('change',filterPlayers);


function filterPlayers(e){
    const optionValue = e.target.value;
    divPlayersCard.innerHTML = "";
    
    switch(optionValue){
        case 'nickname':playerCardTemplate(myFavoriteFootballTeam.players.filter(player => player.nickname !== "N/A"));break;
        case 'forward':playerCardTemplate(myFavoriteFootballTeam.players.filter(player => player.position === 'forward'));break;
        case 'midfielder': playerCardTemplate(myFavoriteFootballTeam.players.filter(player => player.position === 'midfielder'));break;
        case 'defender':playerCardTemplate(myFavoriteFootballTeam.players.filter(player => player.position === 'defender'));break;
        case 'goalkeeper': playerCardTemplate(myFavoriteFootballTeam.players.filter(player => player.position === 'goalkeeper'));break;
        
        default:playerCardTemplate(myFavoriteFootballTeam.players);

    }
    
}