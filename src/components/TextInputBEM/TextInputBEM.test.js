import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInputBEM from './TextInputBEM';

describe('TextInputBEM', () => {
    const props = {
        htmlId: 'test',
        name: 'Test',
        label: 'Test',
        onChange: function() {}
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<TextInputBEM {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
