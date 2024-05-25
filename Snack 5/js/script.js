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
const caratteriDaVedere = [];
const caratteriEstratti = serieDicaratteriUnici(6, 1, caratteriDaVedere);
console.log(caratteriEstratti);


//**************FUNZIONI**************//
function generaLettere(numeroCaratteri) {
    const caratteri ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let risultato = '';
    for ( let i = 0; i < numeroCaratteri; i++ ) {
        risultato += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }

    return risultato;
};

function generaUnicaLettera(numeroCaratteri, caratteriGiaEstratti){
    let lettereCasuali;
    let trovato = true;
    while(trovato){
        lettereCasuali = generaLettere(numeroCaratteri);
        if(caratteriGiaEstratti.includes(lettereCasuali)){
            trovato = true;
        }else{
            trovato = false;
        }
    };

    return lettereCasuali
}

function serieDicaratteriUnici(numeroCaratteriUnici, numeroCaratteri, caratteriGiaEstratti){
    caratteriGiaEstratti = [];
    for(let i = 0; i < numeroCaratteriUnici; i++){
    caratteriGiaEstratti.push(generaUnicaLettera(numeroCaratteri,caratteriGiaEstratti))
}
return caratteriGiaEstratti;
}
