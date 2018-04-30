import React from 'react';
import DotIcon from 'react-reuse/DotIcon';

/** DotIcon example */

function Example() {
    return (
        <div>
            <DotIcon />
            <br />
            <DotIcon size={10} />
            <br />
            <DotIcon size={15} fill="#29292a" />
            <br />
            <DotIcon size={25} fill="red" />
            <br />
            <DotIcon size={105} fill="#29292a" />
        </div>
    );
}

export default Example;
