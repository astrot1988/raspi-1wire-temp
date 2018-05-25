# WORK IN PROGRESS

This project is currently a work in progress.  I've been making progress to completing the API, and
should be completed sometime in the next few days as I iron out the API, testing, and implementing
into an [actual use-case](https://github.com/rbprogrammer/baby-monitor).

# Raspberry Pi 1-Wire High-Level Interface

[![Build Status](https://travis-ci.org/rbprogrammer/raspi-1wire-temp.svg?branch=master)](https://travis-ci.org/rbprogrammer/raspi-1wire-temp)
[![Coverage Status](https://coveralls.io/repos/github/rbprogrammer/raspi-1wire-temp/badge.svg?branch=master)](https://coveralls.io/github/rbprogrammer/raspi-1wire-temp?branch=master)
[![dependencies Status](https://david-dm.org/rbprogrammer/raspi-1wire-temp/status.svg)](https://david-dm.org/rbprogrammer/raspi-1wire-temp)
[![devDependencies Status](https://david-dm.org/rbprogrammer/raspi-1wire-temp/dev-status.svg)](https://david-dm.org/rbprogrammer/raspi-1wire-temp?type=dev)

[![GitHub version](https://badge.fury.io/gh/rbprogrammer%2Fraspi-1wire-temp.svg)](https://badge.fury.io/gh/rbprogrammer%2Fraspi-1wire-temp)
[![npm version](https://badge.fury.io/js/raspi-1wire-temp.svg)](https://badge.fury.io/js/raspi-1wire-temp)

Provides a high-level interface to a "[1-wire](https://pinout.xyz/pinout/1_wire)" compatible device 
or file on a Raspberry Pi.

This code was really only tested with a DS18B20 on a Raspberry Pi 3.  I would very much appreciate
testers with different hardware to test and use this module.  I am more than willing to merge pull
requests that fix bugs on a variety of hardware options.

## Installation

`npm install raspi-1wire`

## Usage

TODO
```
const raspi1wire = require('raspi-1wire');
```

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.  Add unit tests 
for any new or changed functionality.  Lint and test your code.

# TODO

- [ ] Update `lib/factory` (and create relevant controllers) to support multiple devices.
