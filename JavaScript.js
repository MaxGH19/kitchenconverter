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

var unitSecond = "Grams";
var convSecond = 1;

function displayGramsOunces() {
  var ele = document.getElementsByName("units2");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) unitSecond = ele[i].value;

    switch (unitSecond) {
      case "Grams":
        convSecond = 1;
        break;
      case "Ounces":
        convSecond = 28.3495;
        break;
    }

  }
}

function resetButtonSecond() {
  document.getElementById("ingrListSecond").value = "--Select--";
  document.getElementById("inputFieldGrams").value = "";
  document.getElementById("resultSecond").value = "";
  document.getElementById("sentenceSecond").innerHTML = "";
  document.getElementById("sentenceThird").innerHTML = "";
  document.getElementById("errorAmtSecond").innerHTML = "";
  document.getElementById("errorIngSecond").innerHTML = "";
}

function jumpToGramsOunces() {
  location.href = "#";
  location.href = "#GramsOunces";
}
function jumpToResult() {
  location.href = "#";
  location.href = "#result2";
}


function setIngrTextSecond() {
  z = document.getElementById("ingrListSecond");
  ingrTextSecond = z.options[z.selectedIndex].innerHTML;
  ingrTextLowerSecond = ingrTextSecond.toLowerCase();
}



var inputGrams = 0;
var numberIngr = 0;
var resultCups = 0;
var toUnit = "";
function convertToCups () {
  numberIngr = parseInt(document.getElementById("ingrListSecond").value);
  inputGrams = parseFloat(document.getElementById("inputFieldGrams").value);
  resultCups = (inputGrams * convSecond) / numberIngr;
  resultCups = resultCups.toFixed(2);

  if (numberIngr === 0) {
    document.getElementById("errorIngSecond").innerHTML = "Please select an ingredient ";
  }

  if (inputGrams < 1) {
    document.getElementById("errorAmtSecond").innerHTML = "Please enter an amount";
  }
  if (resultCups > 0) {

    document.getElementById("resultSecond").value = resultCups;
    toUnit = "Cups"
    jumpToResult();
    querySecond();
  }
}

var resultTbl = 0;

function convertToTablespoons () {
  numberIngr = parseInt(document.getElementById("ingrListSecond").value);
  inputGrams = parseFloat(document.getElementById("inputFieldGrams").value);
  resultTbl = ((inputGrams * convSecond) * 16) / numberIngr;
  resultTbl = resultTbl.toFixed(2);
  document.getElementById("resultSecond").value = resultTbl;
  toUnit = "Tablespoons";
  jumpToResult();
  querySecond();
}

var resultTea = 0;

function convertToTeaspoons () {
  numberIngr = parseInt(document.getElementById("ingrListSecond").value);
  inputGrams = parseFloat(document.getElementById("inputFieldGrams").value);
  resultTea = ((inputGrams * convSecond) * 48) / numberIngr;
  resultTea = resultTea.toFixed(2);
  document.getElementById("resultSecond").value = resultTea;
  toUnit = "Teaspoons";
  jumpToResult();
  querySecond();
}

function querySecond() {
  queryDataSecond = [inputGrams, unitSecond, ingrTextLowerSecond];
  document.getElementById("sentenceSecond").innerHTML = queryDataSecond[0] + " " + queryDataSecond[1] + " of " + queryDataSecond[2] + " is equal to:";
  document.getElementById("sentenceThird").innerHTML = toUnit;
}

