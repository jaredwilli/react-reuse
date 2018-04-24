import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
    const props = {
        htmlId: 'test',
        name: 'Test',
        label: 'Test',
        onChange: function() {}
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<TextInput {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
