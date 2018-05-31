import React from 'react';
import ReactShalloRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';


test('should render Header correctly', () => {
    const renderer = new ReactShalloRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});