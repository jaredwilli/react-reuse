import React from 'react';
import Loader from 'react-reuse/Loader';

function Example() {
    return (
        <div>
            <Loader />
            <br />
            <br />

            <Loader stroke="red" />
            <br />
            <br />

            <Loader stroke="#006600" />
            <br />
            <br />

            <Loader stroke="#ff6633" />
            <br />
            <br />

        </div>
    );
}

export default Example;
