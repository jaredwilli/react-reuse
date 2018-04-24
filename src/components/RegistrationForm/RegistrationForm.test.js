import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<RegistrationForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
