function application() {
    'use strict';

    const numbersUser = [];
    let operator = "";
    let valueUser;

    function start() {
        const addButton = document.getElementById("add");
        const calculateButton = document.getElementById("calculate");
        prepareNumbersToBeClicked();
        calculateButton.addEventListener("click", calculateResult);

        const operatorsButton = document.querySelectorAll(".operator");
        for (const operator of operatorsButton) {
            operator.addEventListener("click", getOperator);
        }

    }

    function prepareNumbersToBeClicked() {
        const numbers = document.querySelectorAll(".input-numbers");
        for (const number of numbers) {
            number.addEventListener("click", getNumberUser);
        }
    }

    function getNumberUser(event) {
        valueUser = event.currentTarget.value;
        numbersUser.push(parseInt(valueUser));
        console.log(numbersUser);

    }

    function getOperator(event) {
        operator = event.currentTarget.value;
        console.log(operator);
    }

    var operators = {
        '+': sum,
        '-': substract
    };
    function calculateResult() {
        console.log(operators[operator](numbersUser[0], numbersUser[1]));
    }

    //business logic

    function sum(a, b) {
        return a + b;
    }

    function substract(a, b) {
        return a - b;
    }





    return {
        sum: sum,
        substract: substract,
        start: start
    };


}








// be able to import the file in node
if (typeof (module) != 'undefined') {
    module.exports = application;
}