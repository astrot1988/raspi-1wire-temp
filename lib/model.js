'use strict';

/**
 * Constructs a new temperature container from a raw temperature value from a 1-wire compatible
 * temperature device.
 *
 * @param raw_temp The raw temperature.
 * @constructor
 */
function Temperature(raw_temp) {
    this._raw_temp = Object.freeze(raw_temp);
}

/** @returns {number} The temperature in celsius. */
Temperature.prototype.celsius = function() {
    return this._raw_temp / 1000.0;
};

/** @returns {number} The temperature in fahrenheit. */
Temperature.prototype.fahrenheit = function() {
    return (this.celsius() * 1.8) + 32.0;
};

/** Exports the temperature container. */
module.exports = Temperature;
