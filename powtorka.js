
//var coRobisz = confirm("Chcesz podać swoje dane?"); //ok/anuluj zwracając wartośc logiczną true/false
//
//if(coRobisz){
//    var imie = prompt ("Podaj swoje imie");
//    var nazwisko = prompt("Podaj swoje nazwisko");
//    
//    if(imie == ""){
//        alert("nie wpisałeś imienia");
//    }else document.write(imie + " " + nazwisko);
//    if(nazwisko == ""){
//        alert("nie wpisałes nazwiska");
//    }else console.log(imie + " " + nazwisko);
//    
//}else{
//    alert("Szkoda, że nie chcesz powiedzieć :c");
//}


//*******************************



//var a = prompt("Liczba a");
//var b = prompt("Liczba b");
//a = Number(a); //a/1;
//b= Number(b);//b/1;
//
//document.write("suma: "+(a+b) +"<br><br>");
//
////  w1 ? w2 : w3 operator warunkowy
//
//if (a<b) document.write(a)
//else document.write(b);
//
//a<b ? document.write(a) : document.write(b);

//var kolor = prompt("Podaj kolor(lub numer koloru)");
//
//kolor == "zielony "|| kolor == "1" ? document.write("<span style=\"color: green;\">zielony</span>"): kolor == "czerwony" || kolor == "2" ? document.write("<span style=\"color: red;\">czerwony</span>"): document.write("wpisałes złe kolory");

//document.write(kolor);
//
//if(kolor == "zielony" || kolor == "1"){
//    document.write("<span style=\"color: green;\">zielony</span>");
//}else if(kolor == "czerwony" || kolor == "2"){
//    document.write("<span style=\"color: red;\">czerwony</span>");
//}
//
//
//var sw = prompt("dzień tygodnia");
//
//switch(sw){
//    case "sobota":
//    case "niedziela":
//        document.write("miłego weekendu"); break;
//    default: 
//        document.write("Miłej pracy");
//}

//for(let i = 1; i<=10; i++){
//    document.write(i + " ");
//} 
//for(let i = 10; i>0; i--){
//    document.write(i + " ");
//}

document.write("<br><br>");
var prawda = false;
do{
    var haslo = prompt("Podaj hasło");
    
    if (haslo == "okon" ) prawda = true;
    if(haslo == false) prawda =true;
}while( prawda == false);

    if(haslo == "okon"){
        document.write("<table style=\"text-align: center; border: 1px;\">");
for(let i = 1; i<=10; i++){
    document.write("<tr>")
    for(let j = 1; j<=10; j++)
        document.write("<td>" + i*j + "</td>");
        document.write("</tr>");
    
}
document.write("</table>")

    }
    else document.write("Podaj poprawne hasło!")
