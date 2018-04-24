import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextInputStyledComponents from './TextInputStyledComponents';

describe('TextInputStyledComponents', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<TextInputStyledComponents />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
