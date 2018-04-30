import React from 'react';
import StarIcon from 'react-reuse/StarIcon';

/** Some examples of setting the props for customizing the colors for each stars state.  */

function Example() {
    return (
        <div>
            <StarIcon size={20} />
            <StarIcon fillType="half" fill="#29292A" size={20} />
            <StarIcon fillType="full" fill="#29292A" size={20} />
            <br />
            <StarIcon />
            <StarIcon fillType="half" fill="#29292A" />
            <StarIcon fillType="full" fill="#29292A" />
            <br />
            <StarIcon stroke="#980909" />
            <StarIcon fillType="half" fill="#339933" stroke="#980909" />
            <StarIcon fillType="full" fill="#339933" stroke="#980909" />
            <br />
            <StarIcon stroke="magenta" />
            <StarIcon fillType="half" fill="blue" stroke="magenta" />
            <StarIcon fillType="full" fill="blue" stroke="magenta" />
        </div>
    );
}

export default Example;
