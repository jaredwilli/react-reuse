import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    let props = {
        htmlId: 'test',
        name: 'Test',
        label: 'Test',
        onClick: () => true
    };

    it('renders the component correctly', () => {
        const tree = renderer.create(<Button {...props}>Default</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the component correctly', () => {
        props = {
            htmlId: 'disabled-button',
            name: 'disabled-button',
            disabled: true,
            classname: 'block',
            onClick: () => true
        };

        const tree = renderer.create(<Button {...props}>Disabled Block Level Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();

        expect(tree.props.className).toBe('btn mg-button block');
        expect(tree.children[0]).toBe('Disabled Block Level Button');
    });
});
