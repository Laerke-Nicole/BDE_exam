// how the list will be printed out with text
var listResults = /** @class */ (function () {
    function listResults(container) {
        this.container = container;
    }
    listResults.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading; // 'heading' is what will be shown as the heading, write the variable that calculates the converting
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // put at start 
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return listResults;
}());
// interface with classes for Cup
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Cup = /** @class */ (function () {
    // tell system what to expect with constructor
    function Cup(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    Cup.prototype.format = function () {
        return "".concat(this.amountLiquid, " ").concat(this.convertFromLiquid, " = ").concat(this.resultsLiquid, " ").concat(this.convertToLiquid);
    };
    return Cup;
}());
// interface with classes for Fluid ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var FlOz = /** @class */ (function () {
    // tell system what to expect with constructor
    function FlOz(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    FlOz.prototype.format = function () {
        return "".concat(this.amountLiquid, " ").concat(this.convertFromLiquid, " = ").concat(this.resultsLiquid, " ").concat(this.convertToLiquid);
    };
    return FlOz;
}());
// interface with classes for Ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Ounce = /** @class */ (function () {
    // tell system what to expect with constructor
    function Ounce(convertFromWeight, amountWeight, // make public so it is accessable to change the value
    convertToWeight, resultsWeight) {
        this.convertFromWeight = convertFromWeight;
        this.amountWeight = amountWeight;
        this.convertToWeight = convertToWeight;
        this.resultsWeight = resultsWeight;
    }
    // prints out what was the result of the conversion
    Ounce.prototype.format = function () {
        return "".concat(this.resultsWeight, " ").concat(this.convertToWeight, "(s) = ").concat(this.amountWeight, " ").concat(this.convertFromWeight, "(s)");
    };
    return Ounce;
}());
// interface with classes for Pound
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Pound = /** @class */ (function () {
    // tell system what to expect with constructor
    function Pound(convertFromWeight, amountWeight, // make public so it is accessable to change the value
    convertToWeight, resultsWeight) {
        this.convertFromWeight = convertFromWeight;
        this.amountWeight = amountWeight;
        this.convertToWeight = convertToWeight;
        this.resultsWeight = resultsWeight;
    }
    // prints out what was the result of the conversion
    Pound.prototype.format = function () {
        return "".concat(this.resultsWeight, " ").concat(this.convertToWeight, "(s) = ").concat(this.amountWeight, " ").concat(this.convertFromWeight, "(s)");
    };
    return Pound;
}());
// interface with classes for Pint
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Pt = /** @class */ (function () {
    // tell system what to expect with constructor
    function Pt(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    Pt.prototype.format = function () {
        return "".concat(this.amountLiquid, " ").concat(this.convertFromLiquid, " = ").concat(this.resultsLiquid, " ").concat(this.convertToLiquid);
    };
    return Pt;
}());
// title of forms to show what you are converting from and to and what you can convert
// weight title
var unitOne = {
    type: "Weight",
    options: ["Pound", "Ounce"],
};
// liquid title
var unitTwo = {
    type: "Liquid",
    options: ["Fluid Ounce", "Cup", "Pint"],
};
// print unitOne out on the page
var unitWeight = document.querySelector('.unitWeight');
unitWeight.innerHTML = "".concat(unitOne.type);
// print unitTwo out on the page
var unitLiquid = document.querySelector('.unitLiquid');
unitLiquid.innerHTML = "".concat(unitTwo.type);
// weight converter
// links to american to european converter
var formWeight = document.querySelector('.converter-weight');
// select
var convertFromWeight = document.querySelector('#convertFromWeight');
var convertToWeight = document.querySelector('#convertToWeight');
// inputs
var amountWeight = document.querySelector('#amountWeight');
// amount
var amountLabel = document.querySelector('label[for="amountWeight"]');
// update input placeholder and label
var updateAmountLabel = function () {
    var selectedUnit = convertFromWeight.options[convertFromWeight.selectedIndex].text;
    amountWeight.placeholder = "Enter amount in ".concat(selectedUnit);
};
// update on selection change
convertFromWeight.addEventListener('change', updateAmountLabel);
// initial update
updateAmountLabel();
// list results
var ulWeight = document.querySelector('ul');
var listWeight = new listResults(ulWeight);
// prints out the result of the convert and keeps the result in the list
var calculateConvertWeight = function () {
    // Store the static number of weights
    var poundToGram = 453.59237;
    var poundToKilogram = poundToGram / 1000;
    var ounceToGram = 28.3495;
    var ounceToKilogram = ounceToGram / 1000;
    var result;
    // tell it which calculation to use
    // pound
    if (convertFromWeight.value === 'pound' && convertToWeight.value === 'gram') {
        result = amountWeight.valueAsNumber * poundToGram;
    }
    else if (convertFromWeight.value === 'pound' && convertToWeight.value === 'kilogram') {
        result = amountWeight.valueAsNumber * poundToKilogram;
    }
    // ounce
    else if (convertFromWeight.value === 'ounce' && convertToWeight.value === 'gram') {
        result = amountWeight.valueAsNumber * ounceToGram;
    }
    else {
        result = amountWeight.valueAsNumber * ounceToKilogram;
    }
    return result;
};
// print result out below the form
formWeight.addEventListener('submit', function (e) {
    e.preventDefault();
    // store the convertings in a variable
    var resultsWeight = calculateConvertWeight();
    // Display the result with the converted amount and the value it was converted to in HTML
    var resultWeightElement = document.querySelector('.resultWeight');
    resultWeightElement.innerHTML = "Result: ".concat(resultsWeight, " ").concat(convertToWeight.value, "(s)");
    // Display a paragraph with history result once a result has been calculated
    var resultWeightHistoryElement = document.querySelector('.resultWeightHistory');
    resultWeightHistoryElement.innerHTML = "Result history";
    // display the history of the results
    var doc;
    if (convertFromWeight.value === 'pound') {
        doc = new Pound(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight);
    }
    else {
        doc = new Ounce(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight);
    }
    // write the list out
    listWeight.render(doc, convertFromWeight.value, 'end');
    console.log(doc);
});
// liquid converter
// links to american to european converter
var formLiquid = document.querySelector('.converter-liquid');
// select
var convertFromLiquid = document.querySelector('#convertFromLiquid');
var convertToLiquid = document.querySelector('#convertToLiquid');
// inputs
var amountLiquid = document.querySelector('#amountLiquid');
// list results in ul with a class of .result-list-liquid
var ulLiquid = document.querySelector('.result-list-liquid');
var listLiquid = new listResults(ulLiquid);
// update input placeholder and label 
var updateAmountLabelLiquid = function () {
    var selectedUnit = convertFromLiquid.options[convertFromLiquid.selectedIndex].text;
    amountLiquid.placeholder = "Enter amount in ".concat(selectedUnit);
};
// update on selection change
convertFromLiquid.addEventListener('change', updateAmountLabelLiquid);
// initial update
updateAmountLabelLiquid();
// prints out the result of the convert and keeps the result in the list
var calculateConvertLiquid = function () {
    // Store the static number of liquids
    var flOzToMl = 29.5735;
    var flOzToLiter = flOzToMl / 1000;
    var flOzToCentiliter = flOzToMl / 10;
    var flOzToDeciliter = flOzToMl / 100;
    var cupToMl = 236.58824;
    var cupToLiter = cupToMl / 1000;
    var cupToCentiliter = cupToMl / 10;
    var cupToDeciliter = cupToMl / 100;
    var ptToMl = 473.17648;
    var ptToLiter = ptToMl / 1000;
    var ptToCentiliter = ptToMl / 10;
    var ptToDeciliter = ptToMl / 100;
    var resultLiquid;
    // tell it which calculation to use
    //fl oz
    if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'ml') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToMl;
    }
    else if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'l') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToLiter;
    }
    else if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'cl') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToCentiliter;
    }
    else if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'dl') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToDeciliter;
    }
    // cup
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'ml') {
        resultLiquid = amountLiquid.valueAsNumber * cupToMl;
    }
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'l') {
        resultLiquid = amountLiquid.valueAsNumber * cupToLiter;
    }
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'cl') {
        resultLiquid = amountLiquid.valueAsNumber * cupToCentiliter;
    }
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'dl') {
        resultLiquid = amountLiquid.valueAsNumber * cupToDeciliter;
    }
    // pint
    else if (convertFromLiquid.value === 'pt' && convertToLiquid.value === 'ml') {
        resultLiquid = amountLiquid.valueAsNumber * ptToMl;
    }
    else if (convertFromLiquid.value === 'pt' && convertToLiquid.value === 'l') {
        resultLiquid = amountLiquid.valueAsNumber * ptToLiter;
    }
    else if (convertFromLiquid.value === 'pt' && convertToLiquid.value === 'dl') {
        resultLiquid = amountLiquid.valueAsNumber * ptToCentiliter;
    }
    else {
        resultLiquid = amountLiquid.valueAsNumber * ptToDeciliter;
    }
    return resultLiquid;
};
// print result out below the form
formLiquid.addEventListener('submit', function (e) {
    e.preventDefault();
    // store the convertings in a variable
    var resultsLiquid = calculateConvertLiquid();
    // Display the result with the converted amount and the value it was converted to in HTML
    var resultLiquidElement = document.querySelector('.resultLiquid');
    resultLiquidElement.innerHTML = "Result: ".concat(resultsLiquid, " ").concat(convertToLiquid.value);
    // Display a paragraph with history result once a result has been calculated
    var resultLiquidHistoryElement = document.querySelector('.resultLiquidHistory');
    resultLiquidHistoryElement.innerHTML = "Result history";
    // display the history of the results
    var docTwo;
    if (convertFromLiquid.value === 'flOz') {
        docTwo = new FlOz(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    else if (convertFromLiquid.value === 'cup') {
        docTwo = new Cup(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    else {
        docTwo = new Pt(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    // write the list out
    listLiquid.render(docTwo, convertFromLiquid.value, 'end');
    console.log(docTwo);
});
