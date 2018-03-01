import React from 'react';
import PropTypes from 'prop-types';

/** Star Icon component for the atom of a star rating component */

const StarIcon = ({ fillType, fill, stroke }) => {
    return (
        <svg id="star-icon"
            className="star-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32">
            <path className="full"
                d="M15.25,22.08l-8,4.24,1.53-9L2.25,11l9-.12,4-9.36,4,9.36,9,.12-6.5,6.36,1.53,9Z"
                transform="translate(-1.04 -0.23)"
                fill={fillType === 'full' ? fill : 'transparent'}
                stroke={stroke} />
            <path className="half"
                d="M15.25,22.08l-8,4.24,1.53-9L2.25,11l9-.12,4-9.36Z"
                transform="translate(-1.04 -0.23)"
                fill={fillType === 'half' ? fill : 'transparent'}
                stroke="transparent"/>
        </svg>
    )
};

StarIcon.propTypes = {
    /** The stroke color for the border of each star */
    stroke: PropTypes.string,

    /** The fill color */
    fill: PropTypes.string,

    /** The fill type - blank for empty or half or full  */
    fillType: PropTypes.string
};

StarIcon.defaultProps = {
    stroke: '#29292A',
    fill: 'transparent',
    fillType: null
};

export default StarIcon;
