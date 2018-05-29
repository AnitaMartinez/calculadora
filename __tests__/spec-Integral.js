const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


describe("checks the DOM", () => {
    let app;
    let calculatorButtons;
    let screenCalculator;
    let resetButton;
    let buttonEight;
    let buttonAdd;
    let buttonSeven;

    beforeEach(function () {
        app = application(); //Esto es importante. Tengo que poner la app a 0 antes de empezar cada test, porque si no no se me limpia. Para resetear
        document.body.innerHTML = pug.compileFile('./views/index.pug', null)();
        app.start();
        getButtons();
    });

    it("it shows a value when a button is clicked", () => {
        calculatorButtons[0].click();
        expect(screenCalculator.innerHTML).not.toEqual("");
    });
    it("it shows the number of the button when it is clicked", () => {
        buttonEight.click();
        expect(screenCalculator.innerHTML).toEqual("8");
    });
    it("it shows the operator of the button when it is clicked", () => {
        buttonAdd.click();
        expect(screenCalculator.innerHTML).toEqual("+");
    });
    it("it shows the whole operation", () => {
        buttonSeven.click();
        buttonAdd.click();
        buttonEight.click();
        expect(screenCalculator.innerHTML).toEqual("7+8");
    });


    function getButtons(){
        calculatorButtons = document.querySelectorAll(".calculator-buttons");
        buttonSeven = document.querySelector(".calculator-buttons[value='7']");
        buttonEight = document.querySelector(".calculator-buttons[value='8']");
        buttonAdd = document.querySelector(".calculator-buttons[value='+']");
        screenCalculator = document.getElementById("screen-calculator");
        resetButton = document.getElementById("reset");
    }

});