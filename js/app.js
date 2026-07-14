// Kadet Test Kviz

let mode = "";

const quiz = document.getElementById("quiz");

document.getElementById("learnBtn").addEventListener("click", () => {
    mode = "learn";

    quiz.innerHTML = `
        <h2>📚 Režim učenja</h2>
        <p>Uskoro će se ovdje prikazivati pitanja iz baze.</p>

        <button onclick="alert('Sljedeći korak: dodajemo pitanja')">
            Počni
        </button>
    `;
});

document.getElementById("examBtn").addEventListener("click", () => {

    mode = "exam";

    quiz.innerHTML = `
        <h2>📝 Režim ispita</h2>

        <p>
        Na kraju testa ćeš dobiti rezultat.
        </p>

        <button onclick="alert('Sljedeći korak: dodajemo pitanja')">
            Počni ispit
        </button>
    `;
});

document.getElementById("wrongBtn").addEventListener("click", () => {

    quiz.innerHTML = `
    <h2>❌ Pogrešni odgovori</h2>

    <p>
    Ovdje će biti prikazana pitanja koja si pogriješio.
    </p>
    `;
});

document.getElementById("favBtn").addEventListener("click", () => {

    quiz.innerHTML = `
    <h2>⭐ Omiljena pitanja</h2>

    <p>
    Ovdje će biti sačuvana označena pitanja.
    </p>
    `;
});

document.getElementById("statsBtn").addEventListener("click", () => {

    quiz.innerHTML = `
    <h2>📊 Statistika</h2>

    <p>
    Tačni odgovori: 0
    <br><br>
    Netočni odgovori: 0
    </p>
    `;
});
