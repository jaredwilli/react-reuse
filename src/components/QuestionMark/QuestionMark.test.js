import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import QuestionMark from './QuestionMark';

describe('QuestionMark', () => {
    it('renders the component correctly', () => {
        const tree = renderer.create(<QuestionMark />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // TODO: test the size prop more
    it('renders the component correctly', () => {
        const tree = renderer.create(<QuestionMark size={20} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
