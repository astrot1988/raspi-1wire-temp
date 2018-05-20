'use strict';

const Temperature = require('./lib/model');

/**
 * Exports the high-level RasPi 1-Wire Temperature API.
 *
 * @type {{Temperature: Temperature}}
 */
module.exports = {
    Temperature: Temperature
};
