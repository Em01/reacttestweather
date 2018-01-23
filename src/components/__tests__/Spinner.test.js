import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner', () => {
  var component;

  beforeAll(() => {
    component = shallow(<Spinner />);
  });

  it('has the spinner image', () => {
    expect(component.find('img').length).toBe(1);
  });

  it('has the loading text', () => {
    const text = "Loading...";
    expect(component.find('.spinner-text').props().children).toEqual(text);
  });
});
