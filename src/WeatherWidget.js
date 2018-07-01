import React, { Component } from 'react';

import './WeatherWidget.css';
import './styles/foundation.6.4.css';

import { Row, Column } from 'react-foundation';
import UIWeatherPanel from './components/UI/WeatherPanel';
import UIInputText from './components/UI/InputText';
import UIRadioGroup from './components/UI/RadioGroup';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			title: '',
			temperature : 'c',
			wind: 'on',
			titleInput: {
				id: 'title',
				name: 'title',
				label: 'Title',
				placeholder: 'Title of Widget',
				value: ''
			},
			groupRadioWind: [{
				id: 'windOn',
				name: 'wind',
				value: 'on',
				label: 'On'
			}, {
				id: 'windOff',
				name: 'wind',
				value: 'off',
				label: 'Off'
			}],
			groupRadioTemp: [{
				id: 'tempC',
				name: 'temperature',
				value: 'c',
				label: '°c'
			}, {
				id: 'tempF',
				name: 'temperature',
				value: 'f',
				label: '°f'
			}]
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(event) {
		let target = event.target,
				value = target.value,
				name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
		  <div className="weather-widget">
			<Row>
				<Column small={12} large={6}>
					<UIInputText inputText={this.state.titleInput} value={this.state.title} handleOnChange={this.handleOnChange} />
					<Row isColumn>
						<label>Temperature</label>
					</Row>
					<UIRadioGroup radio={this.state.groupRadioTemp} value={this.state.temperature} handleOnChange={this.handleOnChange} />
					<Row isColumn>
						<label>Wind</label>
					</Row>
					<UIRadioGroup radio={this.state.groupRadioWind} value={this.state.wind} handleOnChange={this.handleOnChange} />
				</Column>
				<Column small={12} large={6}>
					<UIWeatherPanel
						title={this.state.title}
						metric={this.state.temperature}
						wind={this.state.wind}
					/>
				</Column>
			</Row>
		  </div>
		);
	}
}

export default App;