import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Hello />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
