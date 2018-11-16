var elImie=document.getElementById('imie');
var elNazwisko=document.getElementById('nazwisko');
var elLogin=document.getElementById('login');
var elKomunikat=document.getElementById('komunikat');
var elZatwierdz=document.getElementById('ok');
var elWyslij=document.getElementById('przycisk');
var elPopraw=document.getElementById('reset');

function sprawdz(){
  if (this.value.length > 2 && this.value.length < 20) {
    elKomunikat.textContent = "";
    elZatwierdz.disabled = false;

  }else {
    elKomunikat.textContent="Błąd danych";
    this.focus();
    elZatwierdz.disabled = true;
  }
}
function zablokuj(){
  var zablokowane = document.querySelectorAll('input[type=text]')
  for (var i = 0; i <zablokowane.length; i++) {
zablokowane[i].disabled = true;
elWyslij.disabled = false;
elPopraw.disabled = false;
  }
}
function odblokuj(){
  var zablokowane = document.querySelectorAll('input[disabled]')
  if (zablokowane.length>0) {
    for (var i = 0; i <zablokowane.length; i++) {
  zablokowane[i].disabled = false;
}
elZatwierdz.checked = false;
elWyslij.disabled = true;
elPopraw.disabled = true;
  }
}
function zatwierdz(){
  var inputy = document.querySelectorAll('input[type=text]');
  var czyPuste = false;
  var pusty;
  for(var i = 0; i<inputy.length; i++){
    if(inputy[i].value =="" && inputy[i]<2 && inputy[i]>20) {
      czyPuste = true;
      pusty = input[i];
    }
  }
  if(czyPuste){
    elPopraw.disabled = true;
    pusty.autofocus = true;
    return;
  }
  if (!this.checked) {
elPopraw.disabled = false;
    odblokuj();

  }else {
    zablokuj();
  }
}
function wyslij(){

  while(document.body.firstChild){
    document.body.removeChild(document.body.firstChild);

  }
  document.body.innerHTML = 'Imie: '+elImie.value+'<br>'+
                            'Nazwisko: '+elNazwisko.value+'<br>'+
                            'Login: '+elLogin.value;
}


elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elLogin.addEventListener('blur', sprawdz);
elZatwierdz.addEventListener('change', zatwierdz);
elPopraw.addEventListener('click', odblokuj);
elWyslij.addEventListener('click', wyslij);
