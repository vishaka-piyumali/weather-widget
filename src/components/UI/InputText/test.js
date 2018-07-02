import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Row, Column } from 'react-foundation';
import UIInputText from './index';

describe('<UIInputText />', () => {

	const mockFn = jest.fn();
	const titleInput = {
		id: 'title',
		name: 'title',
		label: 'Title',
		placeholder: 'Title of Widget',
		value: ''
	};
	const wrapper = shallow(<UIInputText inputText = {titleInput} handleOnChange = {mockFn} />);

	it('renders one <Row /> component', () => {
		expect(wrapper.find(Row).length).to.equal(1);
	});

	it('renders one <Column /> component', () => {
		expect(wrapper.find(Column).length).to.equal(1);
	});

	it('renders label with Title text', () => {
		expect(wrapper.contains('Title')).to.equal(true);
	});

	it('renders one input element', () => {
		expect(wrapper.find('input')).to.have.length(1);
	});

	/* TODO DOM snapshot test*/
	//expect(wrapper.html()).toBe('<div class="row"><div class="columns"><label for="title">Title<input type="text" id="title" name="title" placeholder="Title of Widget"/></label></div></div>');

});