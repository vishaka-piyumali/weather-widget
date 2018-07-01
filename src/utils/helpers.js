const helpers = {
	/*
	 T(°F) = T(K) × 9/5 - 459.67
	 T(°C) = T(K) - 273.15
	 */
	convertTemperature: function (kelvinValue, convertTo) {
		let result = 0;
		if ( convertTo === 'f') {
			result = (kelvinValue * 9/5) - 459.67;
		} else {
			result = kelvinValue - 273.15;
		}
		return Math.ceil(result);
	},

	convertToCardinal: function(degrees) {
		return ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'][Math.round(degrees / 11.25 / 2)];
	},

	/*
	 1mps = (secs*mins)/meters= 3.6 kmph
	 */
	convertToKmph: function (mps) {
		return Math.ceil(mps * 3.6);
	}
}

export default helpers;