import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInputCSSModules from './TextInputCSSModules';

describe('TextInputCSSModules', () => {
    const props = {
        htmlId: 'test',
        name: 'Test',
        label: 'Test',
        onChange: function() {}
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<TextInputCSSModules {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
