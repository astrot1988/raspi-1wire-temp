'use strict';

/** A temperature container that derives actual temperatures from raw device data. */
class Temperature {
    /**
     * Constructs a new temperature container from a raw temperature value from a 1-wire compatible
     * temperature device.
     *
     * @param raw_temp The raw temperature.
     * @constructor
     */
    constructor(raw_temp) {
        this._raw_temp = Object.freeze(raw_temp);
    }

    /** @returns {number} The temperature in celsius. */
    get celsius() {
        return this._raw_temp / 1000.0;
    };

    /** @returns {number} The temperature in fahrenheit. */
    get fahrenheit() {
        return (this.celsius * 1.8) + 32.0;
    };
}

/** Exports the temperature container. */
module.exports = Temperature;
