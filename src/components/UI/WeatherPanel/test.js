import React, { Component } from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import UIWeatherPanel from './index';

describe('<UIWeatherPanel />', () => {

	const mockFn = jest.fn();
	const titleInput = {
		id: 'title',
		name: 'title',
		label: 'Title',
		placeholder: 'Title of Widget',
		value: ''
	};

	const wrapper = shallow(<UIWeatherPanel metric = "c" wind = "on" title="" />);

	it('renders one weather panel', () => {

		expect(wrapper.find('.loading')).to.have.length(1);
	});

});