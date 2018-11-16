var pesel = document.getElementById('pesel');
var imie = document.getElementById('imie');
var nazwisko = document.getElementById('nazwisko');
var jezyk = document.getElementById('jezyk');
// var dodaj_przedmiot = document.getElementById('dodaj_przedmiot');
var wyslij = document.getElementById('przycisk');
var komunikat = document.getElementById('komunikat');
var ilosc_przedmiotow =1;
var czyPoprawne = false;


function dodaj_p() {
if(ilosc_przedmiotow<6){
  var przedmioty = document.getElementsByClassName('przedmioty_r');

  for(var i = 0; i<=ilosc_przedmiotow; i++ ){
    przedmioty[i].type = 'text';
  }
  ilosc_przedmiotow++;
}else {
  return;
}
}
function sprawdz_pesel(){
  if(this.value.length == 11){
    komunikat.innerHTML = "";
    czyPoprawne = true;
  }else {
    komunikat.innerHTML = "Błędne dane";
    czyPoprawne = false;
  }
}
function sprawdz_i_n(){
  if(this.value.length >= 3 ){
    komunikat.innerHTML = "";
czyPoprawne = true;
  }else {
    komunikat.innerHTML = "Błędne dane";
czyPoprawne = false;
  }
}
function sprawdz_j(){

}

pesel.addEventListener('blur', sprawdz_pesel);
imie.addEventListener('blur', sprawdz_i_n);
nazwisko.addEventListener('blur', sprawdz_i_n);
// dodaj_przedmiot.addEventListener('click', dodaj_p);
