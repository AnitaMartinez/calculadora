function application() {

    function start() {
        const addButton = document.getElementById("add");
        const numbers = document.querySelectorAll(".input-numbers");
        const calculateButton = document.getElementById("calculate");
        for (const number of numbers) {
            number.addEventListener("click", getNumberUser);
        }
        calculateButton.addEventListener("click", calculateResult);
    }

    let operator;
    var operators = {
        '+': sum,
        '-': substract
    };

    const numbersUser = [];


    function sum(a, b) {
        operator = "+"; //refactor
        return a + b;
    }

    function substract(a, b) {
        return a - b;
    }

    function getNumberUser(event) {
        valueUser = event.currentTarget.value;
        numbersUser.push(parseInt(valueUser));
    }

    function calculateResult() {
        console.log(operators['+'](numbersUser[0], numbersUser[1]));
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