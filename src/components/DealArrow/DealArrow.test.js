import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DealArrow from './DealArrow';

describe('DealArrow', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<DealArrow />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the deal arrow with arrow-small class', () => {
        const tree = renderer.create(<DealArrow className="arrow-small" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
