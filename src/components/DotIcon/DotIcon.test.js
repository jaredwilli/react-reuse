import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DotIcon from './DotIcon';

describe('DotIcon', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<DotIcon />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
