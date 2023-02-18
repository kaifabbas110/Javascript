const game = {
    team1: "Potugal",
    team2: "Argentina",
    players: [
        [
            "Andre Silva",
            "Cristiano Ronaldo",
            "RB Leipzig",
            "Rafael Leao",
            "Milan",
            "Goncalo Ramos",
            "Braga",
            "Diogo Costa",
            "Roma",
            "Rui Patricio",
            "Ruben Dias",
        ],
        [
            "Paulo Dybala",
            "Lionel Messi",
            "Emiliano Martinez",
            " Franco Armani",
            " Geronimo Rulli",
            " Nicolas Otamendi",
            " Angel Correa ",
            " Leandro Paredes",
            " Guido Rodriguez",
            " Alexis Mac Allister",
            " Thiago Almada",
        ],
    ],
    score: "4:0",
    scored: ["Lionel Messi", "Cristiano Ronaldo", "Milan", "Guido Rodriguez"],
    date: 'Feb 13th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//Question 1.
const [player1, player2] = game.players;
console.log(player1, player2);

//Question 2.
const [goalKeeper, ...fielders] = player1;
console.log(goalKeeper, fielders);

//Question 3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//Question 4.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Peristic']
console.log(players1Final);

//Question 5.
const {
    odds: {
        team1,
        x: draw,
        team2,
    }
} = game;
console.log(team1, draw, team2);

//Question 6.
const printGoals = function (...goals) {
    //Return whole array instead of elements.
    // console.log(goals);
    goals.length <= 1 ? console.log(`${goals.length} Goal were scored by players: ${goals}`) : console.log(`${goals.length} Goals were scored by players: ${goals}`);
}

// printGoals("Cristiano Ronaldo", "Roma", "Lionel Messi", " Angel Correa ");
// printGoals("Cristiano Ronaldo");
//Without spread operator gonna return 1 goal because only passed in 1 argument.
// printGoals(game.scored);
//Using spread operator so it unpack the array elements and return players 1 by 1.
printGoals(...game.scored);

//Question 7.
team1 < team2 && console.log('Team 1 is more likely to win');
//what if team 2 has lower odds?
team1 > team2 && console.log('Team 2 is more likely to win');
(team1 && team2) == draw && console.log('Draw');
