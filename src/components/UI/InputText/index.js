import React from 'react';
import { Row, Column } from 'react-foundation';

class InputText extends React.Component {

	render() {
		const props = this.props;

		return (
			<Row>
				<Column>
					<label htmlFor={props.inputText.id}>{props.inputText.label}
						<input id={props.inputText.id} name={props.inputText.name} type="text" value={props.value} placeholder={props.inputText.placeholder} onChange={props.handleOnChange} />
					</label>
				</Column>
			</Row>
		);
	}
}

export default InputText;