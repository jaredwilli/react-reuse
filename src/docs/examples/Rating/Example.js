import React from 'react';
import Rating from 'react-reuse/Rating';

/**
 * Various examples of star rating showing different props being set to output different style components.
 * */

function Example() {
    return (
        <div>
            <Rating />
            <br />
            <br />
            <Rating size={50} />
            <Rating size={20} />
            <Rating rating={2} size={20} />
            <Rating rating={4.2} size={20} />
            <br />
            <Rating />
            <Rating rating={.8} />
            <Rating rating={2} />
            <Rating rating={2.3} />
            <Rating rating={5} />
            <br />
            <Rating rating={4.2} totalRatings={203} showAverage />
            <br />
            <Rating scale={10} />
            <Rating rating={4.9} scale={10} />
            <Rating scale={10} size={40} />
            <Rating rating={4.9} scale={10} size={40} />
            <br />
            <br />
        </div>
    );
}

export default Example;
