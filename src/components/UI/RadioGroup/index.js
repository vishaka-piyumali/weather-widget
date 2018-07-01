import React, { Component } from 'react';

import { Row, Column } from 'react-foundation';

class RadioGroup extends Component {

	render() {
		return (
			<Row>
				{this.props.radio.map((radioButton) => {
					return <Column key={radioButton.id} small={6}>
						<input type="radio" name={radioButton.name} value={radioButton.value} id={radioButton.id} onChange={this.props.handleOnChange} checked={this.props.value === radioButton.value} /><label htmlFor={radioButton.id}>{radioButton.label}</label>
					</Column>
				})}
			</Row>
		);
	}
}


export default RadioGroup;