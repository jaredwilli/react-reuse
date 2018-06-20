import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    const props = {
        htmlId: 'test',
        name: 'Test',
        label: 'Test',
        onChange: () => true
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<Input {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
