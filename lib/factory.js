'use strict';

const ds18b20 = require('./controller/device_DS18B20');
const emulator = require('./controller/emulator');
const glob = require('glob-fs')({gitignore: true});

// todo test
/**
 * This function either uses the supplied hint or a default glob to search for potential 1-wire
 * compatible temperature sensors.
 *
 * @param {String} hint A glob to search for devices.
 * @returns {String} A list of filenames to devices that matched the optional or default glob.
 */
module.exports.findDevices = function (hint) {
    // TODO multiple device support will need to detect different devices here.
    const pattern = hint ? hint : '/sys/bus/w1/devices/28-*/w1_slave';
    return glob.readdirSync(pattern);
};

// todo test
/**
 * Creates a temperature controller from the supplied device.
 *
 * @param {String} device The device to wrap with a temperature controller.
 * @returns {ControllerIf} A temperature controller backed by the supplied device.
 */
module.exports.fromDevice = function (device) {
    // TODO multiple device support will need to determine which kind of device controller to
    // construct.
    return new ds18b20.DS18B20DeviceController(device);
};

// todo test
/**
 * Creates an emulated stream of temperatures from the given stream.  If the stream is not
 * repeatable then an exception is raised once the data stream has been exhausted.
 *
 * @param repeatable Boolean flag indicating if the stream should repeat.
 * @param stream The data stream itself.
 * @returns {ControllerIf}
 */
module.exports.fromStream = function (repeatable, ...stream) {
    return new emulator.StreamController(repeatable, ...stream)
};
