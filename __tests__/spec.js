const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


const app = application();

describe("basic operations", () => {

    it("sums 2 numbers", () => {
        expect(app.sum(1, 1)).toEqual(2);
    });
    it("sums more than 2 numbers", () => {
        expect(app.sum(1, 2, 5)).toEqual(8);
        expect(app.sum(1, 2, 5, 4, 3435, 2)).toEqual(3449);
    })

});