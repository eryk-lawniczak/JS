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
      margin: 30px auto;
      padding: 15px;
      width: 250px;
      text-align: center;
    }
    #komunikat{
      color: red;
      background: blue;
    }
    #przedmioty_roz{
      width: 200px;
    }
    #jezyki{
      width: 200px;
    }
    .selekcja{
      font-size: 12px;
    }
    </style>
  </head>
  <body>
    <fieldset id="pole">
      <legend>Dane osobowe</legend>
      <div id="komunikat"></div>
      <form id="formularz" action="zarejestrowany.php" method="post">
        <input id="pesel" type="text" name="PESEL" placeholder="PESEL..."><br>
        <input id="imie" type="text" name="imie" placeholder="Imie..."><br>
        <input id="nazwisko" type="text" name="nazwisko" placeholder="Nazwisko..."><br>
        K <input id="k" type="radio" name="plec" value="k">
        M <input id="m" type="radio" name="plec" value="m"> <br>
        <br>
        <legend>Przedmioty podstawowe</legend>
        <input type="hidden" name="polski" value="j. polski" >
        <input type="hidden" name="matematyka" value="matematyka" >
        <p class="selekcja">Przytrzymaj klawisz Ctrl i wybieraj pozycję lewym przyciskiem myszy</p><br>

        <select id="jezyki" name="jezyki" multiple>
          <option value="j.angielski">j.angielski</option>
          <option value="j.niemiecki">j.niemiecki</option>
          <option value="j.rosyjski">j.rosyjski</option>
        </select>  <br>
        <legend>Przedmioty roszerzone</legend>
        <!-- <button id="dodaj_przedmiot" type="button" name="dodaj" >+</button> -->

        <br>
        <p class="selekcja">Przytrzymaj klawisz Ctrl i wybieraj pozycję lewym przyciskiem myszy</p><br>
        <select id="przedmioty_roz" name="przedmioty_roz" multiple>
          <option value="matematyka">matematyka</option>
          <option value="j.polski">j.polski</option>
          <option value="historia">historia</option>
          <option value="j.angielski">j.angielski</option>
          <option value="j.niemiecki">j.niemiecki</option>
          <option value="j.rosyjski">j.rosyjski</option>
          <option value="j.hiszpański">j.hiszpański</option>
          <option value="j.włoski">j.włoski</option>
          <option value="fizyka">fizyka</option>
          <option value="biologia">biologia</option>
          <option value="chemia">chemia</option>

        </select><br><br>


        Klauzula RODO <input id="rodo" type="checkbox" name="rodo"><br><br>
        <input id="przycisk" type="submit" name="przycisk" value="Wyślij">
      </form>
    </fieldset>

    <script src="./skrypt.js">

    </script>
  </body>
</html>
