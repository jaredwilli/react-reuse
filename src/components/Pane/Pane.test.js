import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pane from './Pane';

describe('Pane', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Pane label="Tab 1"><div>This is my tab 1 contents!</div></Pane>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
