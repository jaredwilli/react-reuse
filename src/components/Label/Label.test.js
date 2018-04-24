import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label', () => {
    const props = {
        htmlFor: 'test',
        label: 'Test'
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<Label {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
