import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'; 
import Header from '../../components/Header';


test('should render Header correctly', () => {
    // const renderer = new ReactShalloRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();


    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify'); // grab the value of h1

});