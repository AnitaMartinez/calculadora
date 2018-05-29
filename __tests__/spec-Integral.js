const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


const app = application();

describe("checks the DOM", () => {

    let calculatorButtons;
    let screenCalculator;
    let resetButton;
    let operation;

    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/index.pug', null)();
        app.start();
        getButtons();
    });

    function getButtons(){
         calculatorButtons = document.querySelectorAll(".calculator-buttons");
         screenCalculator = document.getElementById("screen-calculator");
         resetButton = document.getElementById("reset");
    }

    it("it shows a value when a button is clicked", () => {
        calculatorButtons[0].click();
        expect(screenCalculator.innerHTML).not.toEqual("");
    });
    it("it shows the number/operator of the button when it is clicked", () => {

        /* beforeEach(function () {
            screenCalculator = "";
            operation = "";
        }); */

        let buttonEight;

        for(const button of calculatorButtons){
            if (button.value === "8") {
                buttonEight = button;
            }
        }
        app.resetOperation(); //por qué solo lo he conseguido con esto y no al cambiar manualmente innerHTML y operation, porque quizás no existe ninguna función para resetar en otra aplicación
        buttonEight.click();
        expect(screenCalculator.innerHTML).toEqual("8");

    });

});