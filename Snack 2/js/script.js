const aulaNuovoCorso = [
    {
        id: 213,
        nome: "Giuseppina della Rovere",
        voto: 78
    },
    {
        id: 110,
        nome: "Paola Cortellessa",
        voto: 96
    },
    {
        id: 250,
        nome: "Andrea Mantegna",
        voto: 48
    },
    {
        id: 145,
        nome: "Gaia Borromini",
        voto: 74
    },
    {
        id: 196,
        nome: "Luigi Grimaldello",
        voto: 68
    },
    {
        id: 102,
        nome: "Piero della Francesca",
        voto: 50
    },
    {
        id: 120,
        nome: "Francesca da Polenta",
        voto: 84
    }
];

const alunniNomiGrandi = aulaNuovoCorso.map((alunno) => {
    return alunno.nome.toUpperCase();
});
console.log(alunniNomiGrandi);

const votiSuperioreSettanta = aulaNuovoCorso.filter((alunno) => {
    if(alunno.voto > 70){
        return true;
    }
});
console.log(votiSuperioreSettanta)

const votiSuperioriSettantaIdMaggioreCentoVenti = aulaNuovoCorso.filter((alunno) => {
    if(alunno.voto > 70 && alunno.id > 120){
        return true;
    }
});
console.log(votiSuperioriSettantaIdMaggioreCentoVenti);



