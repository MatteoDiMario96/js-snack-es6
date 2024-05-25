const biciDaCorsa = [
    { 
        nome: "Bianchi Oltre XR4", 
        peso: 7.2 
    },
    { 
        nome: "Specialized Tarmac SL7", 
        peso: 6.8 
    },
    { 
        nome: "Cannondale SuperSix EVO", 
        peso: 7.5 
    },
    { 
        nome: "Trek Emonda SLR", 
        peso: 6.5 
    },
    { 
        nome: "Pinarello Dogma F12", 
        peso: 7.3 
    },
    { 
        nome: "Scott Addict RC", 
        peso: 7.1 
    },
    { 
        nome: "Colnago C64", 
        peso: 7.8 
    },
    { 
        nome: "Giant TCR Advanced Pro", 
        peso: 6.9 
    },
    { 
        nome: "Merida Reacto", 
        peso: 7.0 
    },
    { 
        nome: "Orbea Orca", 
        peso: 6.3 
    }
    ];
    
    //Non mi piace per niente aver inizializzato la variabile con una bici a caso per poi confrontarla con tutte 
    let biciMinorPeso = biciDaCorsa[0];
    biciDaCorsa.forEach(bicicletta => {
        if(bicicletta.peso < biciMinorPeso.peso){
            biciMinorPeso = bicicletta;
        }
    });
    
    const  {nome, peso} = biciMinorPeso;
    
    console.log(`La bici più leggera al mondo è: la ${nome} con i suoi ben ${peso} kg di peso. Un mostro per il suo genere.`);
    console.log(biciMinorPeso);