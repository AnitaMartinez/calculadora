function application() {
    'use strict';

    const numbersUser = [];
    var stringOperationUser = "";

    function start() {
        prepareNumbersToBeClicked();
        prepareOperatorsToBeClicked();
    }

    function onEqualOperator() {
        calculateResult();
        resetNumbersUserList();
    }

    function resetNumbersUserList() {
        stringOperationUser = "";
    }

    function calculateResult() {
        console.log(stringOperationUser);
        const operationUser = stringOperationUser.split(" ");
        const result = eval(operationUser.join(' '));
        console.log(result);
        return result;
    }

    function setStringOperationUser(string) { //Esta es solo para el spec
        stringOperationUser = string;
    }

    //DOM

    function prepareOperatorsToBeClicked() {
        const operatorsButton = document.querySelectorAll(".operator");
        const calculateButton = document.getElementById("calculate");
        for (const operator of operatorsButton) {
            operator.addEventListener("click", getOperator);
        }
        calculateButton.addEventListener("click", onEqualOperator);
    }

    function prepareNumbersToBeClicked() {
        const numbers = document.querySelectorAll(".input-numbers");
        for (const number of numbers) {
            number.addEventListener("click", getNumberUser);
        }
    }

    function getNumberUser(event) {
        const valueUser = event.currentTarget.value;
        stringOperationUser += valueUser;
    }

    function getOperator(event) {
        const operator = event.currentTarget.value;
        stringOperationUser += operator;
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