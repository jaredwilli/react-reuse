import React from 'react';
import Rating from 'react-reuse/Rating';

/** A basic star rating example */
function Example() {
    return (
        <div>
            <Rating />
            <br />
            <br />
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
            <Rating scale={10} />
            <Rating rating={4.9} scale={10} />
            <Rating rating={4.9} scale={10} size={40} />
            <Rating scale={10} size={40} />
        </div>
    );
};

export default Example;
