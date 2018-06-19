import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Textarea from './Textarea';

describe('Textarea', () => {
    const props = {
        htmlId: 'test',
        name: 'Test',
        label: 'Test',
        onChange: () => true
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<Textarea {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
