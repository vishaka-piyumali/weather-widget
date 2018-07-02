import React from 'react';
import {shallow} from 'enzyme';
import {Row, Column} from 'react-foundation';
import UIInputText from './index';

test('UIInputText with label', () => {

	const mockFn = jest.fn();
	const titleInput = {
		id: 'title',
		name: 'title',
		label: 'Title',
		placeholder: 'Title of Widget',
		value: ''
	};

	const wrapper = shallow(<UIInputText inputText = {titleInput} handleOnChange = {mockFn} />);

	expect(wrapper.find(Row).length).toBe(1);
	expect(wrapper.find(Column).length).toBe(1);
	expect(wrapper.contains('Title')).toBe(true);
});