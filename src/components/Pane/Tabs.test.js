import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pane from './Pane';

describe('Pane', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Pane />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
