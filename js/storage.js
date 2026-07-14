// Čuvanje podataka aplikacije

function sacuvajPodatke(naziv, podaci) {

    localStorage.setItem(
        naziv,
        JSON.stringify(podaci)
    );

}


function ucitajPodatke(naziv) {

    const podaci = localStorage.getItem(naziv);

    if (!podaci) {

        return null;

    }

    return JSON.parse(podaci);

}
