const wyswietlacz = document.getElementById('wyswietl');

const numbers = document.getElementsByClassName("btn");

const pamiec = document.getElementById("pamiec");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const dziel = document.getElementById("dziel");
const mnoz = document.getElementById("mnoz");

const rown = document.getElementById("btn-rown");
const c = document.getElementById("btn-c");
const ce = document.getElementById("btn-ce");
const arr = document.getElementById("arrow");

plus.addEventListener('click', dodaj );
minus.addEventListener('click', odejmij );
dziel.addEventListener('click', podziel );
mnoz.addEventListener('click', pomnoz );

rown.addEventListener('click', oblicz);
c.addEventListener('click', czysc);
ce.addEventListener('click', czysc_a);
arr.addEventListener('click', usun);
var p = false;
var o = false;
var d = false;
var m = false;
var kropka = false;
for(var i=0; i<numbers.length; i++){
  numbers[i].addEventListener('click', function(){
    if(this.value == "." && kropka == false){
      kropka = true;
      wyswietlacz.value += this.value;
    }else if(this.value != ".")
    wyswietlacz.value += this.value; 
  });
}



function czysc(){
  wyswietlacz.value = "";
  kropka = false;
}

function czysc_a(){
  wyswietlacz.value = "";
  pamiec.value = "";
   kropka = false;
}

function oblicz(){
  if(p){
    wyswietlacz.value = Number(pamiec.value) + Number(wyswietlacz.value);
  }
  if(o){
    wyswietlacz.value = Number(pamiec.value) - Number(wyswietlacz.value);
  }
  if(d){
    if(wyswietlacz.value == "0") wyswietlacz.value = "nie dziel przez 0";
    else
    wyswietlacz.value = Number(pamiec.value) / Number(wyswietlacz.value);
  }
  if(m){
    wyswietlacz.value = Number(pamiec.value) * Number(wyswietlacz.value);
  }
  p = false;
  o = false;
  d = false;
  m = false;
   kropka = false;
  pamiec.value = "";
}

function dodaj(){
 
    pamiec.value += wyswietlacz.value;
  czysc();
  p = true;
  kropka = false;
       
  
}
function odejmij(){
  pamiec.value += wyswietlacz.value;
  czysc();
  o = true;
  kropka = false;
}
function podziel(){
  pamiec.value += wyswietlacz.value;
  czysc();
  d = true;
  kropka = false;
}
function pomnoz(){
  pamiec.value += wyswietlacz.value;
  czysc();
  m = true;
  kropka = false;
}

function usun(){
  console.log(wyswietlacz.value);
  var w = Number(wyswietlacz.value);
  w -= w%10;
  w /= 10;

  wyswietlacz.value = w.toString();
}

