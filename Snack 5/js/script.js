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

const nuovoArrayArticoloModa = articoliModa.map((articolo, i) => {
    return{
        ...articolo,
        position: caratteriEstratti[i]
    };
});

console.log(nuovoArrayArticoloModa); 
const mainAppend = document.querySelector("main");
const cardEl = document.createElement("div");
mainAppend.appendChild(cardEl);
nuovoArrayArticoloModa.forEach(articolo => {
    const nameEl = document.createElement("h1");
    nameEl.append(articolo.name);
    cardEl.appendChild(nameEl);
    const typeEl = document.createElement("h2");
    typeEl.append(articolo.type);
    cardEl.appendChild(typeEl);
    const colorEl = document.createElement("h4");
    colorEl.append(articolo.color);
    cardEl.appendChild(colorEl);
    const positionEl = document.createElement("p");
    positionEl.append(articolo.position);
    cardEl.appendChild(positionEl);
});









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
