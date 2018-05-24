'use strict';

const emulator = require('./controller/emulator');

// todo docs
// todo test
// todo implement
module.exports.findDevices = function (hint) {
    // TODO multiple device support will need to detect different devices here.
    // todo glob /sys/bus/w1/devices/28-*/w1_slave
    throw Error('not yet implemented.');
};

// todo docs
// todo test
// todo implement
module.exports.fromDevice = function (device) {
    // TODO multiple device support will need to determine which kind of device controller to construct.
    throw Error('not yet implemented.');
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
