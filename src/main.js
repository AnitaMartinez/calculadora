function application() {

    function start() {
        const buttonAdd = document.getElementById("add");

        buttonAdd.addEventListener("click", function () {
            console.log("hola");
        });
    }


    function sum(...numbers) {

        function add(a, b) {
            return a + b
        }

        const sum = numbers.reduce(add);

        return sum;

    }

    return {
        sum: sum,
        start: start
    };


}








// be able to import the file in node
if (typeof (module) != 'undefined') {
    module.exports = application;
}