'use strict';

const fs = require('fs');
const controller = require('./controller');

/** A temperature controller for a DS18B20 device. */
class DS18B20DeviceController extends controller._ControllerIf {

    // todo test
    /**
     * Constructs a new DS18B20 device controller.
     *
     * @param deviceName
     */
    constructor(deviceName) {
        super();

        this._filename = Object.freeze(deviceName);

        this.hex = null;
        this.crc = null;
        this.crcValid = false;
    }

    // todo test
    /**
     * Reads the device and returns the raw device data.
     *
     * @see controller._ControllerIf._readData
     *
     * @returns {ReadonlyArray<any>} The raw device data.
     * @private
     */
    _readData() {
        if (!fs.exists(this._filename)) {
            throw Error('1-Wire compatible file/device does not exist: ' + this._filename);
        }
        return fs.readFileSync(this._filename).split('\n');
    }

    // todo test
    /**
     * Parses the raw device data and returns the temperature in celsius.
     *
     * @see controller._ControllerIf._parseData
     *
     * @param rawData The raw device data returned from `this._readData()`.
     * @returns {number} The temperature in celsius.
     * @private
     */
    _parseData(rawData) {
        if (rawData.length !== 2) {
            throw Error('Raw data does not have a valid length.');
        }

        const line1 = rawData[0].split(':');
        this.hex = line1[0].replace(/\s/g, '');
        this.crc = line1[0].split(' ')[0].replace('crc=', '');
        this.crc_ok = line1[0].split(' ')[1] === 'YES';

        const line2 = rawData[1].split(' ');
        const rawTemperature = parseInt(line2[line2.length - 1].replace('t=', ''));

        // Convert the raw temperature into celsius.
        return rawTemperature / 1000.0;
    }
}

/**
 * Exports the DS18B20 device controller.
 *
 * @type {DS18B20DeviceController}
 */
module.exports = DS18B20DeviceController;
