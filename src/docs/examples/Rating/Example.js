import React from 'react';
import Rating from 'react-reuse/Rating';

/** A basic star rating example */
function Example() {
    return (
        <div>
            <Rating />
            <br />
            <Rating rating="2" />
        </div>
    );
};

export default Example;
