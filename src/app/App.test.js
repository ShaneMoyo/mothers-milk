import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';


describe('App', () => {
  const initialState = {};
  const mockStore = configureStore();
  
  it('should match snapshots', () => {
    const store = mockStore(initialState);
    const wrapper = mount(<App store={store}/>);

    expect(wrapper).toMatchSnapshot();
  });
});