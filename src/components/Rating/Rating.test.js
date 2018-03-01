import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Rating from './Rating';

describe('Rating', () => {
    it('hides password quality by default', () => {
        const tree = renderer.create(<Rating />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
