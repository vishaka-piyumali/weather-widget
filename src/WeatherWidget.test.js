import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import WeatherWidget from './WeatherWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
