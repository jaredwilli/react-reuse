import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import * as setupTests from '../../setupTests';

import Tabs from './Tabs';
import Pane from '../Pane/Pane';

describe('Tabs', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Tabs selected={0}><Pane label="Tab 1"><div>This is my tab 1 contents!</div></Pane><Pane label="Tab 2"><div>This is my tab 2 contents!</div></Pane><Pane label="Tab 3"><div>This is my tab 3 contents!</div></Pane></Tabs>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
