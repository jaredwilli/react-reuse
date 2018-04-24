import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInputCSSModules from './TextInputCSSModules';

describe('TextInputCSSModules', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<TextInputCSSModules />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
