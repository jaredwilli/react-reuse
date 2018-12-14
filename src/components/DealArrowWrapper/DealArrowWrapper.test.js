import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DealArrowWrapper from './DealArrowWrapper';

describe('DealArrowWrapper', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<DealArrowWrapper rating="great" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
