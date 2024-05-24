const squadreDiCalcio = [
{ 
    nome: "Juventus", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Milan", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Inter", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Roma", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Napoli", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Lazio", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Torino", 
    puntiFatti: 0, 
    falliSubiti: 0 
},
{ 
    nome: "Atalanta", 
    puntiFatti: 0, 
    falliSubiti: 0 
}
];

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let {nome, falliSubiti} = squadreDiCalcio;


squadreDiCalcio.forEach(squadra => {
    squadra.puntiFatti = getRandomNumber(30, 100);
    squadra.falliSubiti = getRandomNumber(5, 15);
});

console.log(squadreDiCalcio);

const nuovaListaSquadre = squadreDiCalcio.map(({nome, falliSubiti}) => ({nome, falliSubiti}));

console.log(nuovaListaSquadre);

