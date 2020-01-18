// Below is my rough guess at what your api for retrieving game data would look like. 

export const games = [
    {
        team1: {
            name: "Tigers",
            score: 7
        },
        team2: {
            name: "Phillies",
            score: 12
        },
        code: "PHI",
        over: -6.5,
        under: 43.5,
        gameOver: true,
        startTime: "FINAL"
    },
    {
        team1: {
            name: "Marlins",
            score: null
        },
        team2: {
            name: "Rays",
            score: null
        },
        code: "MIA",
        over: -7,
        under: 204,
        gameOver: false,
        startTime: "Today, 1:00pm"
    },
    {
        team1: {
            name: "White Sox",
            score: null
        },
        team2: {
            name: "Giants",
            score: null
        },
        code: "SF",
        over: -13,
        under: 215.5,
        gameOver: false,
        startTime: "Today, 7:30pm"
    },
    {
        team1: {
            name: "Cubs",
            score: null
        },
        team2: {
            name: "Dodgers",
            score: null
        },
        code: "LAD",
        over: -4,
        under: 219.5,
        gameOver: false,
        startTime: "Today, 8:00pm"
    },
    {
        team1: {
            name: "Rockies",
            score: null
        },
        team2: {
            name: "Royals",
            score: null
        },
        code: "KC",
        over: -12,
        under: 219.5,
        gameOver: false,
        startTime: "Today, 9:00pm"
    },
    {
        team1: {
            name: "Athletics",
            score: null
        },
        team2: {
            name: "Blue Jays",
            score: null
        },
        code: "OA",
        over: -15,
        under: 240.5,
        gameOver: false,
        startTime: "Today, 9:30pm"
    },
    {
        team1: {
            name: "Astros",
            score: null
        },
        team2: {
            name: "Rangers",
            score: null
        },
        code: "HA",
        over: -5,
        under: 120.5,
        gameOver: false,
        startTime: "Today, 10:00pm"
    }

]