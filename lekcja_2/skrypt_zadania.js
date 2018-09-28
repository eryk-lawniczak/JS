/*Zadanie 1
Utwórz tablicę, która przechowa liczby od 1 do 100 w taki sposób,
że w komórkach od 0 do 49 będą wartości 1-50,
w komórkach od 50 do 99 wartości 100-51.
Wyświetl tablicę na ekranie z użyciem funkcji.
*/

function schowaj(){
    document.getElementsByTagName("div").style.display = "none";
    console.log(this);
}

function zadanie1(){
   if(document.getElementById("zad1").innerHTML == ""){
        var array1 = new Array();

for(let i=0; i<=100; i++){
    
    if(i>49) array1[i] = 150 - i;
    else array1[i]  = i+1;
}
    for(let i =0; i<array1.length; i++){
        document.getElementById("zad1").innerHTML += (array1[i] + ", ");
    }
   }
}




/*
Zadanie 2
Utwórz tablicę 10 elementową i wypełnij ją imionami kolegów z klasy. Następnie wypisz tylko imiona dziewcząt. Stwórz nową tablicę {poprzez wycięcie z bazowej} zawierającą tylko imiona chłopców.
*/

var array2 = [
    "Janek",
    "Asia",
    "Krzysztof",
    "Daniel",
    "Marta",
    "Jakub",
    "Kacper",
    "Julia",
    "Magda",
    "Przemek"
];

//w(array2);
document.write("<br>");
for(let i=0; i<array2.length; i++){
    if(array2[i][array2[i].length-1] == "a"); //document.write(array2[i] + " ");
}
document.write("<br>");
for(let i=array2.length-1 ; i>=0; i--){
    if(array2[i][array2[i].length-1] == "a") array2.splice(i, 1);
}
//w(array2);
//zrobione


/*
Zadanie 3
Utwórz tablicę 20 elementową i wypełnij ją liczbami losowymi z zakresu do 100. {Math.floor(Math.random()*100);}. Następnie usuń {pamiętaj, że usuwamy od końca} z tablicy wszystkie liczby parzyste. Zapisz odpowiednie funkcje.
*/
function parzysta(liczba){
    if(liczba%2 == 0) return true;
    else return false;
}
document.write("<hr>");
var array3 =[];
for(let i=0; i<=19; i++) {
    array3[i] = Math.floor(Math.random()*100);
}

for(let i=19 ; i>=0; i--){
    if(parzysta(array3[i])) array3.splice(i, 1);
}
document.write("<br>");


