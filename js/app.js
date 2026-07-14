// Pokretanje aplikacije

window.onload = function(){

    ucitajStatistiku();

};

let pitanja = [];
let trenutno = 0;
let tacni = 0;

const quiz = document.getElementById("quiz");

async function ucitajPitanja() {
    const odgovor = await fetch("data/pitanja.json");
    pitanja = await odgovor.json();
}

function prikaziPitanje() {

    if (trenutno >= pitanja.length) {

        quiz.innerHTML = `
            <h2>🎉 Kraj testa</h2>
            <h3>
Tačni odgovori:
${tacni} / ${pitanja.length}
</h3>

<h3>
Ukupna tačnost:
${Math.round((tacni/pitanja.length)*100)} %
</h3>

            <button onclick="location.reload()">
                Počni ponovo
            </button>
        `;

        return;
    }

    const p = pitanja[trenutno];

    quiz.innerHTML = `
        <h2>Pitanje ${trenutno + 1}</h2>

        <p style="margin-bottom:20px">
            ${p.pitanje}
        </p>

        ${p.odgovori.map((o,i)=>
        `<button class="answer" onclick="provjeri(${i})">${String.fromCharCode(65+i)}. ${o}</button>`
        ).join("<br><br>")}
    `;
}

function provjeri(index){

    statistika.ukupnoPitanja++;

    if(index === pitanja[trenutno].tacan){

        statistika.ukupnoTacnih++;

        alert("✅ Tačan odgovor!");

    }else{

        statistika.ukupnoNetacnih++;

        alert("❌ Netačan odgovor!");

    }


    sacuvajStatistiku();


    trenutno++;

    prikaziPitanje();

}

document.getElementById("learnBtn").addEventListener("click", async ()=>{

    trenutno=0;
    tacni=0;

    await ucitajPitanja();

    prikaziPitanje();

});

document.getElementById("examBtn").addEventListener("click", async ()=>{

    trenutno=0;
    tacni=0;

    await ucitajPitanja();

    prikaziPitanje();

});
