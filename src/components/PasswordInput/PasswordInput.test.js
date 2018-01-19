import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
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
