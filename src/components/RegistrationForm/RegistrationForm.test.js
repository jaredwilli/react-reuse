import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
    function noop() {}

    it('renders the component correctly', () => {
        const tree = renderer.create(<RegistrationForm onSubmit={() => noop()} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
