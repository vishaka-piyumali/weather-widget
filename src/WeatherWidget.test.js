import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import WeatherWidget from './WeatherWidget';

it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<WeatherWidget />, div);
  const wrapper = shallow(<WeatherWidget/>);
  const textHeader = <h3>TITLE OF WIDGET</h3>;
  expect(div.contains(textHeader)).toEqual(true);
  ReactDOM.unmountComponentAtNode(div);
});
