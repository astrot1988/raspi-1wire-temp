'use strict';

const expect = require('chai').expect;
const Temperature = require('../lib/model');

/**
 * A simple function to convert a readable celsius number of the expected raw value that would have
 * been read from a 1-wire compatible temperature device.
 *
 * @param celsius The degrees in celsius.
 * @returns {number} The equivalent raw celsius value.
 */
function toRaw(celsius) {
    return (celsius * 1e3);
}

/** The minimum delta allowed when comparing floating-point numbers. */
const TEMP_DELTA = 0.1;

describe('modelTemperature', function () {

    it('30 is hot', function () {
        const temp = new Temperature(toRaw(30));
        expect(temp.celsius).to.be.closeTo(30.0, TEMP_DELTA);
        expect(temp.fahrenheit).to.be.closeTo(86.0, TEMP_DELTA);
    });

    it('20 is nice', function () {
        const temp = new Temperature(toRaw(20));
        expect(temp.celsius).to.be.closeTo(20.0, TEMP_DELTA);
        expect(temp.fahrenheit).to.be.closeTo(68.0, TEMP_DELTA);
    });

    it('10 wear a jacket', function () {
        const temp = new Temperature(toRaw(10));
        expect(temp.celsius).to.be.closeTo(10.0, TEMP_DELTA);
        expect(temp.fahrenheit).to.be.closeTo(50.0, TEMP_DELTA);
    });

    it('0 is ice', function () {
        const temp = new Temperature(toRaw(0));
        expect(temp.celsius).to.be.closeTo(0.0, TEMP_DELTA);
        expect(temp.fahrenheit).to.be.closeTo(32.0, TEMP_DELTA);
    });
});
