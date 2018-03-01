import React from 'react';
import Rating from 'react-reuse/Rating';

/** A basic star rating example */
function Example() {
    return (
        <div>
            <Rating />
            <br />
            <Rating rating={.8} />
            <Rating rating={2} />
            <Rating rating={2.3} />
            <Rating rating={5} />
            <br />
            <Rating scale={10} />
            <Rating rating={4.9} scale={10} />
        </div>
    );
};

export default Example;
