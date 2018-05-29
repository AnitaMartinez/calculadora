const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


const app = application();

describe("checks the DOM", () => {

    let calculatorButton;
    let screenCalculator;

    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/index.pug', null)();
        app.start();
    });

    function getButtons(){
         calculatorButton = document.querySelector(".calculator-buttons");
         screenCalculator = document.getElementById("screen-calculator");
    }

    it("it shows a value when a button is clicked", () => {
        getButtons();
        calculatorButton.click();
        expect(screenCalculator.innerHTML).not.toEqual("");
    });

});