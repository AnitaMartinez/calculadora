const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


const app = application();

describe("basic operations", () => {

    it("sums 2 numbers", () => {
        expect(app.sum(1, 1)).toEqual(2);
    });
    it("rests 2 numbers", () => {
        expect(app.substract(1, 1)).toEqual(0);
    });
});