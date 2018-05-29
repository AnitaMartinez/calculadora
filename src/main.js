function application() {
    'use strict';

    let operation = "";

    function start() {
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
        renderOperation();
    }

    function onEqualOperator() {
        renderResult(calculateResult());
        resetOperation();
    }

    function onResetButton() {
        resetOperation();
        renderOperation();
    }

    function onRemoveButton() {
        removeLastCharacter();
        renderOperation();
    }

    function saveValueChosenByUser(event) {
        operation += event.currentTarget.value;
    }

    function renderOperation() {
        const screenCalculator = document.getElementById("screen-calculator");
        screenCalculator.innerHTML = operation;
    }

    function renderResult(result) {
        const screenCalculator = document.getElementById("screen-calculator");
        screenCalculator.innerHTML = result;
    }

    function calculateResult() {
        const constructor = "constructor";
        const stringToCalculate = `return ${operation}`;
        const result = constructor[constructor][constructor](stringToCalculate)();
        return result;
    }

    function resetOperation() {
        operation = "";
    }

    function removeLastCharacter() {
        operation = operation.slice(0, -1);
    }

    function setStringOperationUser(string) { //Esta es solo para el spec
        operation = string;
    }


    return {
        start: start,
        calculateResult: calculateResult,
        setStringOperationUser: setStringOperationUser,
        resetOperation: resetOperation,
    };

}


// be able to import the file in node
if (typeof (module) != 'undefined') {
    module.exports = application;
}