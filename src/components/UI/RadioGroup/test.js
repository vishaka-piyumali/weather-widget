import React from 'react';
import { Row, Column } from 'react-foundation';
import UIRadioGroup from './index';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('<UIRadioGroup />', () => {

	const mockFn = jest.fn();
	const groupRadioWind = [{
		id: 'windOn',
		name: 'wind',
		value: 'on',
		label: 'On'
	}, {
		id: 'windOff',
		name: 'wind',
		value: 'off',
		label: 'Off'
	}];

	const wrapper = shallow(<UIRadioGroup radio={groupRadioWind} value='on' handleOnChange = {mockFn} />);

	it('renders one <Row /> component', () => {
		expect(wrapper.find(Row).length).to.equal(1);
	});

	it('renders one <Column /> component', () => {
		expect(wrapper.find(Column).length).to.equal(2);
	});

	it('renders first label with On text', () => {
		expect(wrapper.find(Column).first().contains('On')).to.equal(true);
	});

	it('renders second label with Off text', () => {
		expect(wrapper.find(Column).last().contains('Off')).to.equal(true);
	});

	it('renders one input element', () => {
		expect(wrapper.find('input')).to.have.length(2);
	});

	/* TODO DOM snapshot test*/

});