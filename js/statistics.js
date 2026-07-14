// Statistika aplikacije


let statistika = {

    ukupnoTacnih:0,

    ukupnoNetacnih:0,

    ukupnoPitanja:0,

    nizDana:0,

    ukupnoVrijeme:0

};



function sacuvajStatistiku(){

    sacuvajPodatke(
        "kadet-statistika",
        statistika
    );

}



function ucitajStatistiku(){

    const podaci =
    ucitajPodatke(
        "kadet-statistika"
    );


    if(podaci){

        statistika = podaci;

    }

}
