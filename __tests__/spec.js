const fs = require('fs');
const pug = require('pug');
const path = require('path');
const application = require('../src/main');


const app = application();
const sum = app.sum();

describe("basic operations", () => {
    it("sums 1 + 1", () => {
        expect(sum).toEqual(2);
    });

});