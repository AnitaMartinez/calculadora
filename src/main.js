function application() {
    'use strict';

    const numbersUser = [];
    let operator = "";
    let valueUser;

    function start() {
        const addButton = document.getElementById("add");
        const calculateButton = document.getElementById("calculate");
        prepareNumbersToBeClicked();
        prepareOperatorsToBeClicked();
        calculateButton.addEventListener("click", calculateResult);
    }

    function prepareOperatorsToBeClicked() {
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
        console.log(operators[operator](...numbersUser));
        numbersUser.length = 0;
    }

    //business logic

    function sum(...numbers) {
        function addTwoNumbers(a, b) {
            return a + b;
        }
        const sum = numbers.reduce(addTwoNumbers);
        return sum;
    }

    function substract(...numbers) {
        function substractTwoNumbers(a, b) {
            return a - b;
        }
        const substraction = numbers.reduce(substractTwoNumbers);
        return substraction;
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