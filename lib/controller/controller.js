'use strict';

const Temperature = require('../model/temperature');

/** An abstract base class for temperature controllers. */
module.exports.ControllerIf = class {

    // todo test
    /**
     * Initializes the base controller class.
     */
    constructor() {
        if (new.target === ControllerIf) {
            throw new TypeError("Cannot construct _ControllerIf instances directly.");
        }
    }

    // todo test
    /**
     * Gets the current temperature from the implementation class.
     *
     * @returns {Temperature}
     */
    get current() {
        const rawData = this._readData();
        const parsedData = this._parseData(rawData);
        return this._createTemp(parsedData);
    }

    // todo test
    /**
     * Converts the raw temperature into a `Temperature` object.
     *
     * @param rawTemperature The raw temperature returned from `this._parseData()`.
     * @returns {Temperature}
     * @private
     */
    _createTemp(rawTemperature) {
        return Temperature(rawTemperature)
    }

    // ########################################################################################## \\
    // Abstract methods that need an implementation by sub-classes.

    // todo test
    /**
     * Reads the controller and returns the raw data.
     *
     * @returns {ReadonlyArray<any>} The raw controller data.
     * @private
     */
    _readData() {
        throw Error('Subclass did not implement method.');
    }

    // todo test
    /**
     * Parses the raw data and returns the temperature in celsius.
     *
     * @param rawData The raw data returned from `this._readData()`.
     * @returns {number} The temperature in celsius.
     * @private
     */
    _parseData(rawData) {
        throw Error('Subclass did not implement method.');
    }
};
