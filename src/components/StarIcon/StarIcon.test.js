import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import StarIcon from './StarIcon';

describe('StarIcon', () => {
    it('hides password quality by default', () => {
        const tree = renderer.create(<StarIcon />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
