import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Loader />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
