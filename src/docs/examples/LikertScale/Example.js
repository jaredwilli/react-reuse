import React from 'react';
import LikertScale from 'react-reuse/LikertScale';

/** Some example likert scale charts */

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



function Example() {
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

    return (
        <div>
            <LikertScale value={values[0]} options={SIZE_OPTIONS} />
            <br />
            <br />
            <LikertScale value={values[1]} options={SIZE_OPTIONS} />
            <br />
            <br />
            <LikertScale value={values[2]} options={SIZE_OPTIONS} />
            <br />
            <br />
            <LikertScale value={values[3]} options={WIDTH_OPTIONS} />
            <br />
            <br />
            <LikertScale value={values[4]} options={WIDTH_OPTIONS} />
        </div>
    );
};

export default Example;
