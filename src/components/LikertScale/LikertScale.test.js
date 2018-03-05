import _ from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LikertScale from './LikertScale';

describe('LikertScale', () => {
    const values = [
        {
            type: 3,
            dimensionId: 3,
            dimensionLabel: 'Size',
            label: ['Felt True to Size']
        },
        {
            type: 3,
            dimensionId: 3,
            dimensionLabel: 'Size',
            label: ['Felt Full Size Smaller']
        },
        {
            type: 3,
            dimensionId: 3,
            dimensionLabel: 'Size',
            label: ['Felt Half Size Larger']
        },
        {
            type: 3,
            dimensionId: 2,
            dimensionLabel: 'Width',
            label: ['Felt Slightly Narrow']
        },
        {
            type: 3,
            dimensionId: 2,
            dimensionLabel: 'Width',
            label: ['Felt Wide']
        }
    ];

    const SIZE_OPTIONS = [
        'Felt Full Size Smaller',
        'Felt Half Size Smaller',
        'Felt True to Size',
        'Felt Half Size Larger',
        'Felt Full Size Larger'
    ];

    const WIDTH_OPTIONS = [
        'Felt Narrow',
        'Felt Slightly Narrow',
        'Felt True to Width',
        'Felt Slightly Wide',
        'Felt Wide'
    ];

    it('renders the component correctly', () => {
        expect(renderer.create(
            <LikertScale value={values[0]} options={SIZE_OPTIONS} />
        ).toJSON()).toMatchSnapshot();

        expect(renderer.create(
            <LikertScale value={values[1]} options={SIZE_OPTIONS} />
        ).toJSON()).toMatchSnapshot();

        expect(renderer.create(
            <LikertScale value={values[2]} options={SIZE_OPTIONS} />
        ).toJSON()).toMatchSnapshot();

        expect(renderer.create(
            <LikertScale value={values[3]} options={WIDTH_OPTIONS} />
        ).toJSON()).toMatchSnapshot();

        expect(renderer.create(
            <LikertScale value={values[4]} options={WIDTH_OPTIONS} />
        ).toJSON()).toMatchSnapshot();
    });
});
