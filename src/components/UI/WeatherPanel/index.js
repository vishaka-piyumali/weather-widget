import React, { Component } from 'react';

import { Row, Column } from 'react-foundation';
import helpers from '../../../utils/helpers';
import constants from '../../../utils/constants';

import './index.css';
import loading from './images/loading.gif';

/*
* openweather icons to my weather icons
* */
const iconMap = {
		'01d': 'day', //clear sky day
		'01n': 'night', //clear sky night
		'02d': 'cloudy-day-3', //few clouds day
		'02n': 'cloudy-night-3', // few clouds night
		'03d': 'cloudy', //scattered clouds
		'03n': 'cloudy',
		'04d': 'cloudy-1', //broken clouds
		'04n': 'cloudy-4',
		'09d': 'rainy-7', // shower rain
		'09n': 'rainy-7',
		'10d': 'rainy-1', // rain
		'10n': 'rainy-5',
		'11d': 'thunder', //thunderstorm
		'11n': 'thunder',
		'13d': 'snowy-3', // snow
		'13n': 'snowy-6',
		'50d': 'cloudy', // mist
		'50n': 'cloudy'
}

class WeatherPanel extends Component {

	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			data: {
				name: '',
				weather: [
					{
						id: 800,
						main: '',
						description: '',
						icon: "01n"
					}
				],
				main: {
					temp: 0
				},
				wind: {
					speed: 0,
					deg: 0
				}
			}
		};
	}

	componentDidMount () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.loadWeatherData.bind(this));
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	loadWeatherData (position) {
		let url = constants.WEATHER_BY_GEO_LOCATION_API_URL + 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
		fetch(url)
		.then(response => response.json())
		.then(function (data) {
			this.setState({
				loading: false,
				data: data
			})
		}.bind(this));
	}

	showWind() {
		if (this.props.wind === 'on') {
			return (
				<div className="wind">
					<label>Wind </label>
					{helpers.convertToCardinal(this.state.data.wind.deg)}
					{' ' + helpers.convertToKmph(this.state.data.wind.speed)} kmph
				</div>
			)
		}
	}

	showTemperature () {
		return (
			<div>
				{helpers.convertTemperature(this.state.data.main.temp, this.props.metric)}°
			</div>
		);
	}

	showImage () {
		return <img src={require('./images/svgs/animated/' + iconMap[this.state.data.weather[0].icon] + '.svg')} alt={this.state.data.weather[0].description} />;
	}

	showPanel () {
		if (this.state.loading) {
			return <div className="loading"><img src={loading} alt="widget loading" /></div>
		} else {
			return (
				<div>
					<Row>
						<Column>
							<h3>{this.props.title || 'Title of Widget'}</h3>
						</Column>
					</Row>
					<Row className="collapse">
						<Column small={6} className="thumb">
							{this.showImage()}
						</Column>
						<Column small={6}>
							<Row>
								<Column>
									{this.state.data.name}
								</Column>
							</Row>
							<Row>
								<Column>
									<div className="temp">{this.showTemperature()}</div>
								</Column>
							</Row>
							<Row>
								<Column>
									{this.showWind()}
								</Column>
							</Row>
						</Column>
					</Row>
				</div>
			)
		}
	}
	render() {
		return (
			<div className="weather-panel">
				{this.showPanel()}
			</div>
		);
	}
}


export default WeatherPanel;