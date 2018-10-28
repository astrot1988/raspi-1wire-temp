# Raspberry Pi 1-Wire High-Level Interface

[![dependencies Status](https://david-dm.org/rbprogrammer/raspi-1wire-temp/status.svg)](https://david-dm.org/rbprogrammer/raspi-1wire-temp)
[![devDependencies Status](https://david-dm.org/rbprogrammer/raspi-1wire-temp/dev-status.svg)](https://david-dm.org/rbprogrammer/raspi-1wire-temp?type=dev)

[![npm version](https://badge.fury.io/js/raspi-1wire-temp.svg)](https://badge.fury.io/js/raspi-1wire-temp)
[![npm](https://img.shields.io/npm/dw/raspi-1wire-temp.svg)](https://www.npmjs.com/package/raspi-1wire-temp)

Provides a high-level interface to a "[1-wire](https://pinout.xyz/pinout/1_wire)" compatible device 
or file on a Raspberry Pi.

This code was really only tested with a DS18B20 on a Raspberry Pi 3.  I would very much appreciate
testers with different hardware to test and use this module.

## Installation

`npm install raspi-1wire-temp`

## Usage

### Finding Devices

The idea with this approach is for R1WT to automatically determine what type of temperature 
controller to create.  Currently this project only supports the output from a DS18B20 device.
However if/when more temperature sensors are tested they could be integrated into R1WT relatively
easy.

```
const r1wt = require('raspi-1wire-temp');
const devices = r1wt.findDevices();
```

By default, R1WT looks for devices that can be globbed with `/sys/bus/w1/devices/28-*/w1_slave`
However, `findDevices()` method has an optional _hint_ glob string that can help R1WT find the 
device files.

```
const r1wt = require('raspi-1wire-temp');
const devices = r1wt.findDevices('/dev/my/temp/sensor*.dev');
```

The `findDevices()` method will return a non-null array of filenames to devices.

### Creating A Device Controller

Once you obtain the filename of a device, either through `findDevices()` or from a known location,
the `fromDevice()` method is used to create the temperature controller.

```
const r1wt = require('raspi-1wire-temp');
const devices = r1wt.findDevices();
assert(devices.length > 0);

const controller = r1wt.fromDevice(devices[0]);
console.log(controller.current.celsius)
console.log(controller.current.fahrenheit)
```

For every call to `controller.current` the controller will re-read the device for the current 
temperature.  If reading from the device is an expensive call it might be wise to cache the current
temperature object for some time.

### Create an Emulated Controller

For some contexts, like testing, you might need a stubbed or emulated device controller.  The 
`fromStream()` method can be used to provide this functionality.  This may be particularly useful 
when developing software on non-RPI hardware.  Effectively allowing a temperature sensor to be 
emulated with a known stream of data.

```
const r1wt = require('raspi-1wire-temp');
const controller = r1wt.fromStream(false, 1000, 2000, 3000)

assert(controller.current.celsius == 1000);
assert(controller.current.celsius == 2000);
assert(controller.current.celsius == 3000);
```

The first argument to `fromStream()` is a flag indicating if the stream should repeat.  When set to
`false` the stream will raise an error when the data has been exhausted.  To repeat the stream, set
the flag to `true`.

```
const r1wt = require('raspi-1wire-temp');
const controller = r1wt.fromStream(true, 1000, 2000, 3000)

assert(controller.current.celsius == 1000);
assert(controller.current.celsius == 2000);
assert(controller.current.celsius == 3000);

assert(controller.current.celsius == 1000);
assert(controller.current.celsius == 2000);
assert(controller.current.celsius == 3000);

// etcetera . . .
```

## Tests

```
npm run test
npm run cover
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.  Add unit tests 
for any new or changed functionality.  Lint and test your code.

# TODO

- [ ] Update `lib/factory` (and create relevant controllers) to support multiple devices.
- [ ] Add GitLab CI for running tests.
- [ ] Add coverage badge from GitLab.
