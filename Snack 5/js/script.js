const articoliModa = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red"
    },
    {
        name: "Juming",
        type: "occhiali",
        color: "blue"
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black"
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink"
    }
];

const position = generaLettere(1);
console.log(position);


//**************FUNZIONI**************//
function generaLettere(numeroCaratteri) {
    const caratteri ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let risultato = ' ';
    for ( let i = 0; i < numeroCaratteri; i++ ) {
        risultato += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }

    return risultato;
}