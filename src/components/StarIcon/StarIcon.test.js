import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import StarIcon from './StarIcon';

describe('StarIcon', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<StarIcon />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // TODO: test the size prop more
    it('renders the component correctly', () => {
        const tree = renderer.create(<StarIcon size={20} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
