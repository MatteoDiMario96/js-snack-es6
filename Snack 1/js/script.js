const ospiti = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

const listaSegnaPosto = ospiti.map((ospite, indice) => {
    return {
        nomeTavolo: "Tavolo Vip",
        nomeOspite: ospite,
        "posto-n": indice + 1
    };
});
console.log(listaOspiti, ospiti);

