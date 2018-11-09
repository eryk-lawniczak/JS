var gracz_1, gracz_2;
var czyRKrz = true;
var plansza = [[], [], []];

function wczytajplansze() {
    var pola = document.querySelectorAll('.plansza td');
    for (var i = 0; i < pola.length; i++) {
        var td = pola[i];
        var pozycja_i = td.dataset.i;
        var pozycja_j = td.dataset.j;
        plansza[pozycja_i][pozycja_j] = td;
        td.addEventListener('click', kliknieciePola);
    }
}

function kliknieciePola(e) {
    var kliknietePole = e.target;
    var listaKlas = kliknietePole.classList;
    if (listaKlas.contains('fg-krzyzyk')) {
        return;
    }
    if (listaKlas.contains('fg-kolko')) {
        return;
    }
    if (czyRKrz) {
        listaKlas.add('fg-krzyzyk');
        kliknietePole.innerText = "X";
        czyRKrz = false;
    } else {
        listaKlas.add('fg-kolko');
        kliknietePole.innerText = "O";
        czyRKrz = true;
    }
    ustawruch();
}

function nowagra() {
    gracz_1 = document.getElementById("gracz_1").value.trim();
    gracz_2 = document.getElementById("gracz_2").value.trim();
    if (gracz_1.length == 0 && gracz_2.length == 0) {
        window.alert("Podajcie pseudonim")
    } else if (gracz_1.length == 0) {
        window.alert("Gracz pierwszy nie podał pseudonimu");
    } else if (gracz_2.length == 0) {
        window.alert("Gracz drugi nie podał pseudonimu");
    }
    document.getElementById("nowa_gra").style.display = "none";
    document.getElementById("gra").style.display = "inline-block";
    ustawruch();

}

function ustawruch() {
    document.getElementById('ruch').innerHTML = '<span class="fg-kolko">' + gracz_1 + '</span> vs ' + " " + '<span class="fg-krzyzyk"/>' + gracz_2 + '</span>';
    if (czyRKrz == true) {
        document.querySelector('#ruch .fg-krzyzyk').classList.add('podkreslenie')
    } else {
        document.querySelector('#ruch .fg-kolko').classList.add('podkreslenie')
    }
}

document.querySelector("#nowa_gra [type=button]").addEventListener("click", nowagra);
wczytajplansze();