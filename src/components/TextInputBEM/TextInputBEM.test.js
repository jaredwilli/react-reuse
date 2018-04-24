import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInputBEM from './TextInputBEM';

describe('TextInputBEM', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<TextInputBEM />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
