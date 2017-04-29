//var gpio = require('rpi-gpio');

class PinsManager {
	constructor() {
		this.activePins = [];
	}

	getPinState(pin) {
		let pinIndex = this.activePins.indexOf(pin);
		if (pinIndex > -1) {
			return 'HIGH'
		} else {
			return 'LOW'
		}
	}

	managePinState(pin) {
		let pinState = 1;
		let pinIndex = this.activePins.indexOf(pin);
		if (pinIndex > -1) {
			this.activePins.splice(pinIndex, 1);
			pinState = 0;
		} else {
			this.activePins.push(pin);
		}
		gpio.setup(pin, gpio.DIR_OUT, () => {
			gpio.write(pin, pinState, () => {
				console.log(`pin ${pin} change value to ${pinState}`);
			});
		});
	}
}

module.exports = PinsManager;
