import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import * as setupTests from '../../setupTests';

import PasswordInput from './PasswordInput';


describe('PasswordInput', () => {
    it('toggles the input type when show/hide password is clicked', () => {
        const wrapper = shallow(<PasswordInput
            htmlId="test"
            name="test"
            value=""
            onChange={() => {}}
            showVisibilityToggle
            />
        );

        // PasswordInput should have a type of password initially
        expect(wrapper.find({ type: 'password' })).toHaveLength(1);
        expect(wrapper.find({ type: 'text' })).toHaveLength(0);

        wrapper.find('a').simulate('click');
        expect(wrapper.find({ type: 'password' })).toHaveLength(0);
        expect(wrapper.find({ type: 'text' })).toHaveLength(1);
    });

    it('hides password quality by default', () => {
        const tree = renderer.create(<PasswordInput
            htmlId="test"
            name="test"
            onChange={() => {}}
            value="somevalue123" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('shows password quality when enabled and a password is entered', () => {
        const tree = renderer.create(<PasswordInput
            htmlId="test"
            name="test"
            onChange={() => {}}
            showQuality
            value="somevalue123" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('hides password quality when enabled but no password is entered', () => {
          const tree = renderer.create(<PasswordInput
            htmlId="test"
            name="test"
            onChange={() => {}}
            showQuality
            value="" />).toJSON();
          expect(tree).toMatchSnapshot();
    });
});
