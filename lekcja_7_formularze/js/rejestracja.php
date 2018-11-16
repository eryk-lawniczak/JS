<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8">
    <title>Fromularz rejestracyjny</title>
    <style media="screen">
    *{
      padding: 0px;
      margin: 0px;
      font-family: 'Tahoma';
    }
#pole{
  width: 170px;
  margin:100px auto;
  padding: 10px;
}
legend{
  color: lightgreen;
}
#komunikat{
  color: red;
}
input{
  border-radius: 5px;
}
#przycisk{
  padding:4px;
  border-radius: 0px;
}
#reset{
  padding:4px;
  border-radius: 0px;
}
    </style>
  </head>
  <body>
    <fieldset id="pole">
      <legend>Formularz maturalny</legend>
      <form >
        <div id="komunikat"></div>
        <br> <input id="imie" type="text" name="imie" placeholder="Imię..." autofocus ><br>
        <br> <input id="nazwisko" type="text" name="nazwisko" placeholder="Nazwisko..." ><br>
        <br>  <input id="login" type="text" name="login" placeholder="Login..."><br><br>
        Zaakceptuj zgodę <input id="ok" type="checkbox" name="zgoda"><br><br>
        <button id="przycisk"type="button" name="wyslij" disabled>Wyslij</button>
        <button id="reset"type="button" name="popraw" disabled>Popraw</button>
      </form>
    </fieldset>
    <script src="./skrypt.js">

    </script>
  </body>
</html>
