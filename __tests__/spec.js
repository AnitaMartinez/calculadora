const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


const app = application();

describe("basic operations", () => {

    it("sums 2 numbers", () => {
        app.setStringOperationUser("1+1");
        expect(app.calculateResult()).toEqual(2);
    });
    it("sums more than 2 numbers", () => {
        app.setStringOperationUser("1+2+4+6");
        expect(app.calculateResult()).toEqual(13);
    });
    it("rests 2 numbers", () => {
        app.setStringOperationUser("1-4");
        expect(app.calculateResult()).toEqual(-3);
    });
    it("rests more than 2 numbers", () => {
        app.setStringOperationUser("1-4-3");
        expect(app.calculateResult()).toEqual(-6);
    });
    it("multiply more than 2 numbers", () => {
        app.setStringOperationUser("1*4*5");
        expect(app.calculateResult()).toEqual(20);
    });
    it("divides more than 2 numbers", () => {
        app.setStringOperationUser("1/4/5");
        expect(app.calculateResult()).toEqual(0.05);
    });
    it("mix operations", () => {
        app.setStringOperationUser("1*2-4+7");
        expect(app.calculateResult()).toEqual(5);
    });
});