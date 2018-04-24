import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<Label />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
