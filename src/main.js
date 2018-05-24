function application() {

    function start() {
        const buttonAdd = document.getElementById("add");
        const numbers = document.querySelectorAll(".input-numbers");

        buttonAdd.addEventListener("click", function () {
            console.log("hola");
        });
    }


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
        const substract = numbers.reduce(substractTwoNumbers);
        return substract;
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