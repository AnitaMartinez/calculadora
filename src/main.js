function application() {
    'use strict';

    let stringOperationUser = "";

    function start() {
        prepareButtonsToBeClicked();
    }

    function prepareButtonsToBeClicked() {
        const calculatorButtons = document.querySelectorAll(".calculator-buttons");
        for (const button of calculatorButtons) {
            button.addEventListener("click", onButtonsCalculator);
        }
        const calculateButton = document.getElementById("calculate");
        calculateButton.addEventListener("click", onEqualOperator);
        const resetButton = document.getElementById("reset");
        resetButton.addEventListener("click", onResetButton);
        const removeButton = document.getElementById("remove");
        removeButton.addEventListener("click", onRemoveButton);
    }

    function onButtonsCalculator(event) {
        saveValueChosenByUser(event);
        renderOperations(stringOperationUser); //Pensar rename
    }

    function onEqualOperator() {
        renderOperations(calculateResult());
        resetOperationUser();
    }

    function onResetButton() {
        resetOperationUser();
        renderOperations(stringOperationUser);
    }

    function onRemoveButton() {
        removeLastCharacter();
        renderOperations(stringOperationUser);
    }

    function saveValueChosenByUser(event) {
        stringOperationUser += event.currentTarget.value;
    }

    function renderOperations(operation) {
        const screenCalculator = document.getElementById("screen-calculator");
        screenCalculator.innerHTML = operation;
    }

    function calculateResult() {
        const constructor = "constructor";
        const stringToCalculate = `return ${stringOperationUser}`;
        const result = constructor[constructor][constructor](stringToCalculate)();
        return result;
    }

    function resetOperationUser() {
        stringOperationUser = "";
    }

    function setStringOperationUser(string) { //Esta es solo para el spec
        stringOperationUser = string;
    }

    function removeLastCharacter() {
        stringOperationUser = stringOperationUser.slice(0, -1);
    }


    return {
        start: start,
        calculateResult: calculateResult,
        setStringOperationUser: setStringOperationUser
    };

}


// be able to import the file in node
if (typeof (module) != 'undefined') {
    module.exports = application;
}