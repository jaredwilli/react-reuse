import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Tabs from './Tabs';

describe('Tabs', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Tabs />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
