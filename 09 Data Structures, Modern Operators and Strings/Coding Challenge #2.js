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
}

for(const playerScored of game.scored){
    // console.log(playerScored);
}
console.log('playerScored');