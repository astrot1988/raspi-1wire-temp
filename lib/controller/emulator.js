'use strict';

const controller = require('./controller');

/** A temperature controller sourced by a data stream. */
module.exports.StreamController = class extends controller.ControllerIf {

    // todo test
    /**
     * Constructs a new streaming data controller.
     *
     * @param repeatable Boolean flag indicating if the stream should repeat once the data has been
     *      exhausted.
     * @param values The celsius values to stream
     */
    constructor(repeatable, ...values) {
        super();
        this._repeatable = Boolean(repeatable);
        this._values = Array.from(values);
        this._index = 0;
    }

    // todo test
    /**
     * Retrieves the next available temperature value in the stream.  If the stream is not
     * repeatable and exhausted, then an error will be raised.
     *
     * @see controller._ControllerIf._readData
     *
     * @returns {ReadonlyArray<any>} The raw device data.
     * @throws {Error} If a non-repeatable stream exhausted its data source.
     * @private
     */
    _readData() {
        if (this._repeatable) {
            this._index %= this._values.length;

        } else if (this._index === this._values.length) {
            throw Error('Exhausted data on a non-repeatable data stream.');
        }

        try {
            return this._values[this._index];
        } finally {
            this._index++;
        }
    }

    // todo test
    /**
     * Returns the raw data as the temperature in celsius.
     *
     * @see controller._ControllerIf._parseData
     *
     * @param rawData The raw device data returned from `this._readData()`.
     * @returns {number} The temperature in celsius.
     * @private
     */
    _parseData(rawData) {
        return rawData;
    }
};
