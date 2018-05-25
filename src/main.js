function application() {
    'use strict';

    const numbersUser = [];
    var stringOperationUser = "";

    function start() {
        prepareNumbersToBeClicked();
        prepareOperatorsToBeClicked();
    }

    function prepareOperatorsToBeClicked() {
        const operatorsButton = document.querySelectorAll(".operator");
        const calculateButton = document.getElementById("calculate");
        for (const operator of operatorsButton) {
            operator.addEventListener("click", onMathOperators);
        }
        calculateButton.addEventListener("click", onEqualOperator);
    }

    function prepareNumbersToBeClicked() {
        const numbers = document.querySelectorAll(".input-numbers");
        for (const number of numbers) {
            number.addEventListener("click", onNumberButton);
        }
    }

    function onMathOperators(event) {
        getOperatorUser(event);
        renderOperation();
    }

    function getOperatorUser(event) {
        const operator = event.currentTarget.value;
        stringOperationUser += operator;
    }

    function onEqualOperator() {
        renderResult();
        resetNumbersUserList();
    }

    function renderResult() {
        const screenCalculator = document.getElementById("screen-calculator");
        screenCalculator.innerHTML = calculateResult();
    }

    function calculateResult() {
        const constructor = "constructor";
        const stringToTransform = `return ${stringOperationUser}`;
        const result = constructor[constructor][constructor](stringToTransform)();
        return result;
    }

    function resetNumbersUserList() {
        stringOperationUser = "";
    }

    function onNumberButton(event) {
        getNumberUser(event);
        renderOperation();
    }

    function getNumberUser(event) {
        const valueUser = event.currentTarget.value;
        stringOperationUser += valueUser;
    }

    function renderOperation() {
        const screenCalculator = document.getElementById("screen-calculator");
        screenCalculator.innerHTML = stringOperationUser;
    }

    function setStringOperationUser(string) { //Esta es solo para el spec
        stringOperationUser = string;
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