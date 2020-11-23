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