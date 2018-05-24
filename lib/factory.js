'use strict';

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

// todo docs
// todo test
// todo implement
module.exports.fromStream = function (repeatable, ...stream) {
    throw Error('not yet implemented.');
};
