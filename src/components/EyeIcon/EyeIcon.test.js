import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EyeIcon from './EyeIcon';

describe('EyeIcon', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<EyeIcon />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
