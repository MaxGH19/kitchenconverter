var unit = "Cups";
var conv = 1;
var i = 0;

function displayRadioValue() {
  var ele = document.getElementsByName("units");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) unit = ele[i].value;

    switch (unit) {
      case "Cups":
        conv = 1;
        break;
      case "Tablespoons":
        conv = 16;
        break;
      case "Teaspoons":
        conv = 48;
    }

  }
}

var numberOne = 0;
var result = 0;
var y = 0;


function convertNumbers() {
  numberOne = parseInt(document.getElementById("ingrList").value);

  result = numberOne * y / conv;

  result = result.toFixed(2);

  if (numberOne < 0.1) {
    document.getElementById("errorIng").innerHTML = "Please select an ingredient ";
  }

  if (y < 0.1) {
    document.getElementById("errorAmt").innerHTML = "Please select an amount ";
  }

  if (result > 0.1) {
    document.getElementById("result").value = result + " g";
    document.getElementById("errorIng").innerHTML = "";
    document.getElementById("errorAmt").innerHTML = "";
    query();
    setList();
    jumpToBottom()
  }
}

function convertGramsGer() {
  numberOne = parseInt(document.getElementById("ingrList").value);

  result = numberOne * y / conv;

  result = result.toFixed(2);

  if (numberOne < 0.1) {
    document.getElementById("errorIng").innerHTML = "Bitte wähle eine Zutat aus ";
  }

  if (y < 0.1) {
    document.getElementById("errorAmt").innerHTML = "Bitte wähle eine Menge ";
  }

  if (result > 0.1) {
    document.getElementById("result").value = result + " g";
    document.getElementById("errorIng").innerHTML = "";
    document.getElementById("errorAmt").innerHTML = "";
    queryGerman();
    setListGerman();
    jumpToBottom()
  }
}

var numberTwo = 0;
var resultOz = 0;

function convertToOunces () {

  numberTwo = parseInt(document.getElementById("ingrList").value);


  resultOz = (numberTwo / 28.3495) * y / conv;

  resultOz = resultOz.toFixed(2);

  if (numberTwo < 0.1) {
    document.getElementById("errorIng").innerHTML = "Please select an ingredient ";
  }

  if (y < 0.1) {
    document.getElementById("errorAmt").innerHTML = "Please select an amount ";
  }

  if (resultOz > 0.1) {
    document.getElementById("result").value = resultOz + " oz";
    document.getElementById("errorIng").innerHTML = "";
    document.getElementById("errorAmt").innerHTML = "";
    query();
    setList();
    jumpToBottom()
  }
}

function convertToOuncesGer () {

  numberTwo = parseInt(document.getElementById("ingrList").value);


  resultOz = (numberTwo / 28.3495) * y / conv;

  resultOz = resultOz.toFixed(2);

  if (numberTwo < 0.1) {
    document.getElementById("errorIng").innerHTML = "Bitte wähle eine Zutat aus ";
  }

  if (y < 0.1) {
    document.getElementById("errorAmt").innerHTML = "Bitte wähle eine Menge ";
  }

  if (resultOz > 0.1) {
    document.getElementById("result").value = resultOz + " oz";
    document.getElementById("errorIng").innerHTML = "";
    document.getElementById("errorAmt").innerHTML = "";
    queryGerman();
    setListGerman();
    jumpToBottom()
  }
}



function resetButton() {
  document.getElementById("numberInput").reset();
  document.getElementById("result").value = "";
  document.getElementById("input").value = 0;
  document.getElementById("output").innerHTML = 0;
  document.getElementById("errorIng").innerHTML = "";
  document.getElementById("errorAmt").innerHTML = "";
  document.getElementById("sentence").innerHTML = "Result:";
  queryData = "";
  ingrText = "";
  ingrTextLower = "";
  e = "";
  y = 0;
}

var values = [
"0","1/8","1/6","1/4","1/3","1/2","2/3","3/4","1","1 1/4","1 1/3","1 1/2","1 2/3","1 3/4","2","3","4","5"];

var userInput = "0";


var inputFragments = document.getElementById("input");
var output = document.getElementById("output");

inputFragments.oninput = function() {
  output.innerHTML = values[this.value];
}
inputFragments.oninput();

var n = 0;
var sepaA = "";
var upperA = 0;
var lowerA = 0;
var sepaB = 0;
var integerB = 0;
var fragment = "";
var upperB = 0;
var lowerB = 0;


function transfer() {
  userInput = document.getElementById("output").innerHTML;

  n = userInput.length;


  if (n === 3) {
    sepaA = userInput.split("/");
    upperA = parseInt(sepaA[0]);
    lowerA = parseInt(sepaA[1]);
    y = upperA / lowerA;
  }

  if (n === 5) {
    sepaB = userInput.split(" ");
    integerB = parseInt(sepaB[0]);
    fragment = sepaB[1].split("/");
    upperB = fragment[0];
    lowerB = fragment[1];
    y = integerB + (upperB / lowerB);
  }

  if (n === 1) {
    y = userInput;
  }
}
  function jumpToBottom() {

    location.href = "#";
    location.href = "#result";
  }

function jumpToG2C() {

  location.href = "#";
  location.href = "#bottom";
}


function jumpToTop() {

    location.href = "#";
    location.href = "#top";
}

var ingrText = "Ingredient";
var ingrTextLower = "ingredient";


function setIngrText() {
  e = document.getElementById("ingrList");
  ingrText = e.options[e.selectedIndex].innerHTML;
  ingrTextLower = ingrText.toLowerCase();
}

var ingrTextSecond = "Ingredient";
var ingrTextLowerSecond = "ingredient";
var z = undefined;



//const list = document.getElementById('queriesList');

var lastQuery = "";
var queryData = "";

function query () {
  queryData = [userInput, unit, ingrTextLower];
    document.getElementById("sentence").innerHTML = queryData[0] + " " + queryData[1] + " of " + queryData[2] + " is equal to:";
}

function queryGerman () {
  queryDataGer = [userInput, unit, ingrText];
  document.getElementById("sentence").innerHTML = queryDataGer[0] + " " + queryDataGer[1] + " " +queryDataGer[2] + " sind umgerechnet:";
}

var entry = "";
function setList() {
  result2 = document.getElementById("result").value;
  entry = document.createElement('li');
  queryData = [userInput, unit, ingrTextLower];
    lastQuery = queryData[0] + " " + queryData[1] + " of " + queryData[2] + " = " + result2;
    entry.appendChild(document.createTextNode(lastQuery));
    document.getElementById('queriesList').appendChild(entry);

}

function setListGerman() {
  resultGer = document.getElementById("result").value;
  entry = document.createElement('li');
  queryData = [userInput, unit, ingrText];
  lastQuery = queryData[0] + " " + queryData[1] + " " + queryData[2] + " = " + resultGer;
  entry.appendChild(document.createTextNode(lastQuery));
  document.getElementById('queriesList').appendChild(entry);
}

/*
************ SECOND PART COMES HERE SEPARATED **********
///////////////////////////////////////////////////////*/

