import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Rating from './Rating';

describe('Rating', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Rating />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with a default rating value', () => {
        const tree = renderer.create(<Rating rating={2} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with a default rating half value', () => {
        const tree = renderer.create(<Rating rating={0.5} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with a default rating half value and size prop', () => {
        const tree = renderer.create(<Rating rating={0.5} size={20} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
