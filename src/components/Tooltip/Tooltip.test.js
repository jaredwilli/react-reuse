import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Tooltip label="M.Gemi Fit Expert">Test</Tooltip>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
